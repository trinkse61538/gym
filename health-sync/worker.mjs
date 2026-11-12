export const supported = {step_count:['count'], active_energy:['kcal'], heart_rate:['count/min'], resting_heart_rate:['count/min'], sleep_analysis:['hr'], weight_body_mass:['kg'], apple_exercise_time:['min']};
export function normalize(body) {
  const metrics=body?.data?.metrics ?? body?.metrics;
  if(!Array.isArray(metrics)||metrics.length>30) throw Error('Cần JSON Health Metrics, Summarize Data bật, Time Grouping Days.');
  const rows=[], seen=new Set();
  for(const m of metrics){
    if(!supported[m.name]) continue;
    if(!supported[m.name].includes(m.units)||!Array.isArray(m.data)) throw Error('Sai đơn vị hoặc cấu trúc dữ liệu.');
    for(const p of m.data){
      const date=String(p.date||'').slice(0,10);
      if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||new Date(date+'T00:00:00Z').toISOString().slice(0,10)!==date) throw Error('Ngày không hợp lệ.');
      const value=m.name==='sleep_analysis'?p.totalSleep:m.name==='heart_rate'?p.Avg:p.qty;
      if(typeof value!=='number'||!Number.isFinite(value)||value<0) throw Error('Giá trị không hợp lệ; cần dữ liệu tổng hợp ngày.');
      const key=m.name+date;
      if(seen.has(key)) throw Error('Có nhiều mẫu cùng ngày. Chọn tổng hợp Days và một nguồn ưu tiên.');
      seen.add(key); rows.push({name:m.name,date,value,units:m.units});
      if(rows.length>500) throw Error('Tối đa 500 bản ghi mỗi lần.');
    }
  }
  if(!rows.length) throw Error('Không có chỉ số được hỗ trợ.');
  return rows;
}
export default {async fetch(req,env){
 const origin=req.headers.get('Origin'), allowed=env.ALLOWED_ORIGIN||'https://gym.khaitringuyen.com';
 const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','Vary':'Origin','X-Content-Type-Options':'nosniff'};
 if(origin===allowed) Object.assign(headers,{'Access-Control-Allow-Origin':allowed,'Access-Control-Allow-Headers':'Authorization, Content-Type','Access-Control-Allow-Methods':'GET, POST, OPTIONS'});
 const reply=(data,status=200)=>new Response(JSON.stringify(data),{status,headers});
 if(origin&&origin!==allowed) return reply({error:'Origin không được phép'},403);
 if(req.method==='OPTIONS') return new Response(null,{status:204,headers});
 const path=new URL(req.url).pathname;
 const write=path==='/ingest'&&req.method==='POST', read=path==='/summary'&&req.method==='GET';
 if(!write&&!read) return reply({error:'Not found'},404);
 const token=write?env.INGEST_TOKEN:env.READ_TOKEN;
 if(!token||token.length<32||req.headers.get('Authorization')!==`Bearer ${token}`) return reply({error:'Khóa không hợp lệ'},401);
 try{
 if(read){
 const result=await env.DB.prepare("SELECT * FROM daily WHERE day >= date('now','-90 days') ORDER BY day DESC, metric").all();
 const last=await env.DB.prepare('SELECT MAX(received_at) AS last_sync FROM daily').first();
 return reply({rows:result.results,last_sync:last?.last_sync||null});
 }
 if(!req.headers.get('Content-Type')?.includes('application/json')) return reply({error:'Cần application/json'},415);
 const reader=req.body?.getReader(); if(!reader)return reply({error:'Thiếu dữ liệu'},400);
 let size=0; const chunks=[];
 while(true){const {done,value}=await reader.read();if(done)break; size+=value.byteLength;if(size>262144){await reader.cancel();return reply({error:'Payload quá lớn'},413);}chunks.push(value);}
 const bytes=new Uint8Array(size);let off=0;for(const c of chunks){bytes.set(c,off);off+=c.length;}
 let rows;try{rows=normalize(JSON.parse(new TextDecoder().decode(bytes)));}catch(e){return reply({error:e.message},400);}
 const now=new Date().toISOString();
 await env.DB.batch(rows.map(r=>env.DB.prepare('INSERT INTO daily(day,metric,value,units,received_at) VALUES(?,?,?,?,?) ON CONFLICT(day,metric) DO UPDATE SET value=excluded.value,units=excluded.units,received_at=excluded.received_at').bind(r.date,r.name,r.value,r.units,now)));
 return reply({ok:true,records:rows.length,received_at:now});
 }catch{return reply({error:'Không thể lưu/đọc dữ liệu. Hãy kiểm tra cấu hình D1.'},503);}
}};
