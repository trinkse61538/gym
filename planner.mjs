// Pure, deterministic schedule engine. All dates are local YYYY-MM-DD, not UTC.
export const iso = (date) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const parse = (s) => { const [y,m,d] = s.split('-').map(Number); return new Date(y,m-1,d,12,0,0); };
export const move = (s, days) => { const d=parse(s); d.setDate(d.getDate()+days); return iso(d); };
export const delta = (a,b) => Math.round((parse(a)-parse(b))/86400000);
export const monday = (s) => { const d=parse(s); return move(s, -((d.getDay()+6)%7)); };
export const days = (start) => Array.from({length:7},(_,i)=>move(start,i));
export const niceDate = (s) => parse(s).toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit'});
export const longDate = (s) => parse(s).toLocaleDateString('vi-VN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
const DAYS = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'];
export { DAYS };

export const CARDIO_TYPES = Object.freeze(['C','D','E','F','G','H','I','J','K','L','M','N','O','P']);
export const isCardio = type => CARDIO_TYPES.includes(type);
export const isStrength = type => Boolean(type && !isCardio(type));
function lastStrengthBefore(logs, firstDay) {
  const previous = Object.entries(logs||{}).filter(([date, log]) => date < firstDay && log?.completed && isStrength(log.type)).sort((a,b)=>b[0].localeCompare(a[0]));
  return previous.length ? {date:previous[0][0], type:previous[0][1].type} : null;
}
function lastABBefore(logs, firstDay) {
  const previous = Object.entries(logs||{}).filter(([date, log]) => date < firstDay && log?.completed && ['A','B'].includes(log.type)).sort((a,b)=>b[0].localeCompare(a[0]));
  return previous.length ? previous[0][1].type : null;
}

/**
 * Adaptive 3-session weekly planner. Strength is preferred over optional cardio.
 * 48-hour spacing between full-body sessions. Missed/past days are never used.
 * A/B rotate based on the last completed strength session of preceding weeks.
 */
export const SPLIT_ORDER=['U1','L1','U2','L2'];
const family=t=>t?.startsWith('U')?'upper':t?.startsWith('L')?'lower':'all';
export function buildWeek(start,today,state={}) {
 const logs=state.logs||{},skips=state.skips||{},drafts=state.drafts||{};
 const dates=days(start),end=dates[6],available=state.settings?.trainingDays||[0,1,3,5];
 const entries=Object.fromEntries(dates.map((date,i)=>[date,{date,day:DAYS[i],kind:date<today?'past':'rest',type:null}]));
 const earliest=[today,start,...Object.keys(logs)].sort()[0];
 let cursor=0, recent=[];
 for(let d=earliest;d<=end;d=move(d,1)){
  const log=logs[d]; let type=null,kind=null;
  if(log?.completed){type=log.type;kind='done';}
  else if(skips[d]){kind='skipped';}
  else if(d>=today){
   if(drafts[d]?.type){type=drafts[d].type;kind='planned';}
   else if(available.includes((parse(d).getDay()+6)%7)){
    const next=SPLIT_ORDER[cursor%4],f=family(next);
    const conflict=recent.some(x=>delta(d,x.date)<2&&(family(x.type)===f||family(x.type)==='all'));
    const consecutive=recent.some(x=>x.date===move(d,-1))&&recent.some(x=>x.date===move(d,-2));
    if(!conflict&&!consecutive){type=next;kind='planned';}
   }
  }
  if(type&&isStrength(type)){
   const ix=SPLIT_ORDER.indexOf(type); if(ix>=0)cursor=(ix+1)%4;
   recent.push({date:d,type});recent=recent.filter(x=>delta(d,x.date)<=3);
  }
  if(entries[d]&&kind)entries[d]={...entries[d],type,kind,...(log?.completed?{log}:{})};
 }
 const list=dates.map(d=>entries[d]),planned=list.filter(d=>d.kind==='planned'),done=list.filter(d=>d.kind==='done');
 return {start,end,days:list,planned,completed:done.length,doneStrength:done.filter(d=>isStrength(d.type)).length,unplanned:[],doneTypes:done.map(d=>d.type),future:end>=today,todayInWeek:start<=today&&today<=end,target:available.length};
}

export function weeklyStats(logs={}, referenceDay=iso(new Date())){
  const thisMon=monday(referenceDay);
  const keys=Object.keys(logs).filter(d=>logs[d]?.completed).sort();
  const total=keys.length;
  const strength=keys.filter(d=>isStrength(logs[d].type)).length;
  const cardio=keys.filter(d=>isCardio(logs[d].type)).length;
  const cardioMinutes=keys.filter(d=>isCardio(logs[d].type)).reduce((n,d)=>n+Math.max(0,Number(logs[d].minutes)||0),0);
  let streak=0;
  for (let i=0;i<104;i++){
    const s=move(thisMon,-7*i), e=move(s,6);
    const n=keys.filter(d=>d>=s&&d<=e&&isStrength(logs[d].type)).length;
    if(i===0&&n===0) continue;
    if(n>=2)streak++;else break;
  }
  return {total,strength,cardio,cardioMinutes,streak};
}
