/** GymOS v4.7: deterministic, explainable beginner-oriented suggestions.
 * Never modifies logs or completed sessions. Suggestions are not diagnoses.
 */
const GROUPS=['chest','back','shoulders','legs','glutes','biceps','triceps','core'];
const MS_DAY=86400000;
const tick=(day)=>Date.parse(`${day}T00:00:00Z`);
const daysBetween=(older,newer)=>Math.round((tick(newer)-tick(older))/MS_DAY);
const max=(a,b)=>Math.max(a,b);
const coreTarget=(ex)=>ex?.groupId||(
 /Ngực/i.test(ex?.group||'')?'chest':/Lưng|xô/i.test(ex?.group||'')?'back':/Vai/i.test(ex?.group||'')?'shoulders':/Mông/i.test(ex?.group||'')?'glutes':/Chân|Đùi/i.test(ex?.group||'')?'legs':/Tay trước/i.test(ex?.group||'')?'biceps':/Tay sau/i.test(ex?.group||'')?'triceps':/Core|Bụng/i.test(ex?.group||'')?'core':null);
export const muscleOf=coreTarget;
const satellites={chest:{triceps:.32,shoulders:.16},back:{biceps:.33,shoulders:.12},shoulders:{triceps:.20},legs:{glutes:.25},glutes:{legs:.25}};
const isStrengthLog=(log,exercises)=>log?.completed&&(!log.type||!['C','D','E','F','G','H','I','J','K','L','M','N','O','P'].includes(log.type))&&(
 Object.keys(log.exercises||{}).some(id=>muscleOf(exercises[log.exercises[id]?.replacement||id])) ||
 (log.exerciseIds||[]).some(id=>muscleOf(exercises[id]))
);
export function recoveryStatus(logs={},exercises={},date,readiness={}){
 const groupLoad=Object.fromEntries(GROUPS.map(g=>[g,0]));
 const lastByGroup={};let recentStrengthGap=null;
 for(const [day,log] of Object.entries(logs)){
  const distance=daysBetween(day,date);
  if(distance<=0||distance>3||!isStrengthLog(log,exercises))continue;
  recentStrengthGap=recentStrengthGap===null?distance:Math.min(recentStrengthGap,distance);
  const dayLoads={};
  const ids=Array.isArray(log.exerciseIds)&&log.exerciseIds.length?log.exerciseIds:Object.keys(log.exercises||{});
  for(const id of ids){
   const item=log.exercises?.[id];const actual=item?.replacement||id;const group=muscleOf(exercises[actual]);if(!group)continue;
   const done=(item?.sets||[]).filter(s=>s.done).length;
   // Completed old logs without recorded sets are weak evidence of work.
   const scale=done?Math.min(1.3,done/2):.35;
   dayLoads[group]=(dayLoads[group]||0)+scale;
  }
  const ageMultiplier=distance===1?1:distance===2?.48:.18;
  for(const [group,weight] of Object.entries(dayLoads)){
   const capped=Math.min(1.9,weight)*ageMultiplier;
   groupLoad[group]+=capped;
   lastByGroup[group]??=day;
   for(const [neighbor,factor] of Object.entries(satellites[group]||{}))groupLoad[neighbor]+=capped*factor;
  }
 }
 const energy=Number(readiness?.energy)||0,soreness=Number(readiness?.soreness)||0,sleep=Number(readiness?.sleep)||0;
 const checked=energy>0||soreness>0||sleep>0;
 const mode=(energy===1||soreness===3)?'rest':(energy===2||soreness===2||sleep===1||recentStrengthGap===1)?'light':'normal';
 const hotGroups=GROUPS.filter(g=>groupLoad[g]>=.65).sort((a,b)=>groupLoad[b]-groupLoad[a]);
 const recentMessage=recentStrengthGap===1?'Bạn mới có buổi sức mạnh hôm qua. Không nên lặp lại tải nặng trên cùng nhóm cơ.':recentStrengthGap===2?'Có buổi sức mạnh trong 48 giờ vừa qua. Chú ý nhóm cơ còn mỏi.':'';
 return {groupLoad,lastByGroup,hotGroups,recentStrengthGap,checked,mode,energy,soreness,sleep,recentMessage};
}
export function repRange(text='8–12'){
 const values=(String(text).match(/\d+(?:[.,]\d+)?/g)||[]).map(v=>Number(v.replace(',','.')));
 if(values.length===0)return {min:8,max:12};
 if(/giây|phút|second|minute/i.test(String(text)))return null;
 return {min:values[0],max:values.length>1?values[1]:values[0]};
}
const strengthEntries=(logs,id,date)=>Object.entries(logs||{}).filter(([day,log])=>log?.completed&&day<date).flatMap(([day,log])=>{
 const items=Object.entries(log?.exercises||{}).filter(([key,item])=>(item?.replacement||key)===id);
 return items.map(([key,item])=>({date:day,sets:(item?.sets||[]).filter(s=>s.done&&Number(s.reps)>0),formOk:item.formOk===true,effort:Number(log.effort)||0}));
}).filter(row=>row.sets.length).sort((a,b)=>b.date.localeCompare(a.date));
export function progressionSuggestion(id,ex,logs={},date,readiness={},exercises={}){
 const recovery=recoveryStatus(logs, exercises,date,readiness);
 if(recovery.mode==='rest'||recovery.mode==='light')return {kind:'recovery',message:recovery.mode==='rest'?'Hôm nay có dấu hiệu quá mệt hoặc đau mỏi nhiều: không tăng tạ, ưu tiên nghỉ và đánh giá lại.':'Đang cần giảm tải: giữ mức nhẹ, không nâng tạ hôm nay.',pastCount:0};
 const past=strengthEntries(logs,id,date);
 if(!past.length)return {kind:'baseline',message:'Chưa có lịch sử: ghi đủ rep, kg và đánh dấu kỹ thuật ổn để app học mức tập phù hợp.',pastCount:0};
 const last=past[0];
 const pause=daysBetween(last.date,date);
 const range=repRange(ex?.reps);
 if(pause>14)return {kind:'ease',message:`Đã cách buổi trước ${pause} ngày: trở lại với mức nhẹ hơn hoặc giảm 1 nấc máy, không vội tăng tạ.`,pastCount:past.length,last};
 if(!range||last.sets.some(s=>!Number.isFinite(Number(s.reps))))return {kind:'repeat',message:'Duy trì kỹ thuật và nhịp thở; chưa đề xuất tăng tạ cho bài theo thời gian.',pastCount:past.length,last};
 const atUpper=(s)=>Number(s.reps)>=range.max;
 const clean=(entry)=>entry&&entry.sets.length>=2&&entry.sets.every(atUpper)&&entry.formOk===true&&entry.effort>0&&entry.effort<=7;
 if(past.length>=2&&clean(past[0])&&clean(past[1])){
  const w0=Number(past[0].sets[0].weight),w1=Number(past[1].sets[0].weight);
  const sameLoad=Number.isFinite(w0)&&w0>0&&Number.isFinite(w1)&&w1===w0&&past[0].sets.every(s=>Number(s.weight)===w0)&&past[1].sets.every(s=>Number(s.weight)===w1);
  if(sameLoad)return {kind:'increase',message:`Hai buổi liên tiếp đạt ${range.max} rep, kỹ thuật tốt và RPE ≤7. Có thể thử tăng đúng một nấc tạ nhỏ nhất của máy, quay về ${range.min}–${range.max} rep. Không bắt buộc.`,pastCount:past.length,last};
  return {kind:'repeat',message:'Rep đã ổn, nhưng mức tạ khác nhau hoặc đang tập bodyweight; duy trì hoặc chọn biến thể khó hơn chút khi thật sự sẵn sàng.',pastCount:past.length,last};
 }
 if(last.formOk&&last.sets.every(s=>Number(s.reps)>=range.min)){
  return {kind:'reps',message:`Kỹ thuật buổi trước tốt. Giữ nguyên tạ và thử tăng 1 rep/set, tối đa ${range.max} rep trước khi nghĩ đến tăng kg.`,pastCount:past.length,last};
 }
 return {kind:'repeat',message:'Giữ mức tạ/rep hiện tại, ưu tiên kiểm soát động tác. Chưa đủ bằng chứng để tăng tải.',pastCount:past.length,last};
}
function basic(id,exercises,canUse){return Boolean(exercises[id]&&muscleOf(exercises[id])&& !/Nâng cao|Mạnh/i.test(exercises[id].difficulty||'')&&canUse(id,exercises[id]));}
function sortedStable(arr,seed){return arr.sort((a,b)=>a.localeCompare(b)).map((val,i)=>({val,key:(i*37+seed*13)%997})).sort((a,b)=>a.key-b.key).map(x=>x.val);}
function latestUsed(logs,date){const used={};for(const [day,log] of Object.entries(logs||{})){
 const distance=daysBetween(day,date);if(!log?.completed||distance<1||distance>28)continue;
 for(const [base,item] of Object.entries(log.exercises||{})){
  if(!(item.sets||[]).some(s=>s.done))continue;const actual=item.replacement||base;used[actual]=Math.min(used[actual]??999,distance);
 }
 }return used;}
/** Generates one stable A/B or muscle-focus workout. Only called for new drafts or explicit re-mix. */
export function makeSmartWorkout({date,session,exercises,logs={},settings={},canUse=()=>true,readiness={},variant=0}){
 if(!session||session.kind!=='strength')return {ids:(session?.exerciseIds||[]).filter(id=>exercises[id]&&canUse(id,exercises[id])),reason:'Không áp dụng Smart Mix cho cardio.',recovery:recoveryStatus(logs,exercises,date,readiness),fixed:[]};
 const base=(session.exerciseIds||[]).filter(id=>exercises[id]);
 const recovery=recoveryStatus(logs,exercises,date,readiness),used=latestUsed(logs,date);
 const rotation=Math.floor((tick(date)-Date.UTC(2026,0,5))/(14*MS_DAY))+(Number(variant)||0);
 const hasHistory=Object.keys(logs||{}).some(d=>d<date&&logs[d]?.completed);
 const count=Math.min(5,base.length),anchors=(session.groupId?2:3);
 const chosen=[],fixed=[],rotated=[],omitted=[];
 for(let i=0;i<count;i++){
  const original=base[i],g=muscleOf(exercises[original]);
  if(!g)continue;
  const available=Object.keys(exercises).filter(id=>basic(id,exercises,canUse)&&muscleOf(exercises[id])===g&&!chosen.includes(id));
  if(!available.length){omitted.push(original);continue;}
  const preferred=[original,...(exercises[original].alternatives||[])].find(id=>available.includes(id));
  if(i<anchors&&preferred){chosen.push(preferred);fixed.push(preferred);continue;}
  // Preserve the original template when new, but rotate the support lifts afterwards.
  if(!hasHistory&&variant===0&&preferred){chosen.push(preferred);continue;}
  const priorPattern=exercises[original]?.movementPattern;
  const byScore=available.map(id=>{
   const x=exercises[id],last=used[id]??99;
   let score= (x.difficulty==='Dễ'?22:x.difficulty==='Rất dễ'?25:14)
      +(id===original?6:0)+(priorPattern&&x.movementPattern===priorPattern?9:0)
      +(last<=7?-55:last<=14?-15:0)
      -(chosen.some(z=>exercises[z]?.movementPattern&&exercises[z].movementPattern===x.movementPattern)?5:0);
   // Prioritize low-load accessories on muscle groups with recent work.
   if(recovery.groupLoad[g]>=.65&&x.difficulty!=='Dễ'&&x.difficulty!=='Rất dễ')score-=12;
   return {id,score};
  }).sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id));
  const top=byScore.slice(0,Math.min(7,byScore.length));
  const topScore=top[0]?.score??0;
  const contenders=top.filter(x=>x.score>=topScore-17).map(x=>x.id);
  // Stable throughout a 14-day block; new block or manual re-mix chooses another suitable accessory.
  const pickFrom=contenders.length?contenders:top.map(x=>x.id);
  const index=pickFrom.length?((rotation+i*3)%pickFrom.length+pickFrom.length)%pickFrom.length:0;
  const choice=pickFrom[index];
  if(choice){chosen.push(choice);if(choice!==original)rotated.push({from:original,to:choice});}else omitted.push(original);
 }
 const reason=rotated.length?`Giữ ${fixed.length} bài nền tảng, đổi ${rotated.length} bài phụ để học kỹ thuật và tránh lặp lại.`:`Giữ bài nền tảng, chưa cần đổi nhiều khi đang làm quen.`;
 const safeVolume=recovery.mode==='rest'?'rest':recovery.mode==='light'?'light':'normal';
 return {ids:chosen,reason,recovery,rotated,fixed,omitted,safeVolume,rotation};
}
