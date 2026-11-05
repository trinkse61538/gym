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

export const isStrength = type => Boolean(type && type !== 'C');
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
export function buildWeek(start, today, state={}) {
  const logs=state.logs||{}; const skips=state.skips||{};
  const dates=days(start), end=dates[6], entries=Object.fromEntries(dates.map((d,i)=>[d,{date:d, day:DAYS[i], kind:'rest', type:null}]));
  const inWeek = dates.map(d=>({date:d, log: logs[d]})).filter(x=>x.log?.completed);
  const completed = inWeek.map(x=>x.log.type);
  const doneA=completed.includes('A'),doneB=completed.includes('B'),doneC=completed.includes('C');
  const lastPrev=lastStrengthBefore(logs,start);
  const strengthDone=inWeek.filter(x=>isStrength(x.log.type)).sort((a,b)=>a.date.localeCompare(b.date));
  const priorAB=lastABBefore(logs,start);
  const preferredFirst=priorAB==='A'?'B':'A';
  // A muscle-focus session occupies one of the two weekly strength slots.
  // Do not schedule extra A/B on top of manually completed strength sessions.
  const need=Math.max(0,2-strengthDone.length);
  const preference=(doneA&&doneB)?[]:doneA?['B']:doneB?['A']:[preferredFirst,preferredFirst==='A'?'B':'A'];
  const nextOrder=preference.slice(0,need);
  const minDay=today>start?today:start;
  const isAvailable=(d)=> d>=minDay && !skips[d] && !logs[d]?.completed && entries[d]?.kind==='rest';
  const planned=[];
  let anchor=strengthDone.at(-1)?.date || lastPrev?.date || null;
  // Pick as early as practicable, except reserve Friday for the second strength day.
  for (let i=0; i<nextOrder.length; i++) {
    const type=nextOrder[i];
    const candidate=dates.filter(d=>isAvailable(d) && (!anchor || delta(d,anchor)>=2));
    if (!candidate.length) break;
    let chosen;
    if(i===0 && strengthDone.length===0) {
      // First full-body ideally Monday, or first open day following a missed Monday.
      chosen=candidate[0];
    } else {
      // Second full-body ideally Friday, but choose Saturday if first was Thursday.
      const friday=dates[4];
      chosen=candidate.reduce((best,day)=>Math.abs(delta(day,friday))<Math.abs(delta(best,friday))?day:best,candidate[0]);
    }
    entries[chosen]={...entries[chosen],kind:'planned',type};
    planned.push({date:chosen,type});
    anchor=chosen;
  }
  if(!doneC) {
    const free=dates.filter(d=>isAvailable(d));
    if(free.length){
      const wednesday=dates[2];
      const chosen=free.reduce((best,day)=>Math.abs(delta(day,wednesday))<Math.abs(delta(best,wednesday))?day:best,free[0]);
      entries[chosen]={...entries[chosen],kind:'planned',type:'C'};
      planned.push({date:chosen,type:'C'});
    }
  }
  for (const d of dates) {
    if(logs[d]?.completed) entries[d]={...entries[d],kind:'done',type:logs[d].type,log:logs[d]};
    else if(skips[d]) entries[d]={...entries[d],kind:'skipped',type:null};
    else if(d<today && entries[d].kind==='rest') entries[d]={...entries[d],kind:'past',type:null};
  }
  const unplanned=[...nextOrder,'C'].filter(t=>!completed.includes(t)&&!planned.some(p=>p.type===t));
  const doneStrength=completed.filter(isStrength).length;
  return {start,end,days:dates.map(d=>entries[d]),planned:planned.sort((a,b)=>a.date.localeCompare(b.date)),completed:inWeek.length,doneStrength,unplanned,doneTypes:completed, future:end>=today, todayInWeek:start<=today && today<=end};
}

export function weeklyStats(logs={}, referenceDay=iso(new Date())){
  const thisMon=monday(referenceDay);
  const keys=Object.keys(logs).filter(d=>logs[d]?.completed).sort();
  const total=keys.length;
  const strength=keys.filter(d=>isStrength(logs[d].type)).length;
  const cardio=keys.filter(d=>logs[d].type==='C').length;
  let streak=0;
  for (let i=0;i<104;i++){
    const s=move(thisMon,-7*i), e=move(s,6);
    const n=keys.filter(d=>d>=s&&d<=e&&isStrength(logs[d].type)).length;
    if(i===0&&n===0) continue;
    if(n>=2)streak++;else break;
  }
  return {total,strength,cardio,streak};
}
