import test from 'node:test';
import assert from 'node:assert/strict';
import { monday, move, delta, buildWeek, weeklyStats } from '../planner.mjs';
const sampleWeek='2026-11-02';
const get= (week,now,logs={},skips={})=>buildWeek(week,now,{logs,skips});
const schedule=p=>p.planned.reduce((o,s)=>{o[s.type]=s.date;return o;},{});
test('Date helpers preserve Monday and local day arithmetic',()=>{
 assert.equal(monday('2026-11-05'),'2026-11-02');
 assert.equal(move('2026-11-29',2),'2026-12-01');
 assert.equal(delta('2026-11-07','2026-11-05'),2);
});
test('Monday plan is two strength days at least 48 hours apart plus treadmill',()=>{
 const p=get(sampleWeek,'2026-11-02'),s=schedule(p);
 assert.equal(p.planned.length,3);
 assert.equal(s.A,'2026-11-02');
 assert.ok(delta(s.B,s.A)>=2);
 assert.ok(s.C);
});
test('Skip Monday moves strength work later in same week',()=>{
 const p=get(sampleWeek,'2026-11-02',{}, {'2026-11-02':true}),s=schedule(p);
 assert.equal(p.days[0].kind,'skipped');
 assert.equal(s.A,'2026-11-03');
 assert.ok(delta(s.B,s.A)>=2);
});
test('Skipping several days never schedules a missed or future-forbidden day',()=>{
 const p=get(sampleWeek,'2026-11-06',{}, {'2026-11-06':true});
 assert.ok(p.planned.every(s=>s.date>='2026-11-06'&&s.date!=='2026-11-06'));
 assert.ok(p.unplanned.includes('B'));
});
test('Completed A stays fixed and B is scheduled >=48h later',()=>{
 const logs={'2026-11-02':{type:'A',completed:true}};
 const p=get(sampleWeek,'2026-11-03',logs),s=schedule(p);
 assert.equal(p.days[0].kind,'done');
 assert.equal(p.doneStrength,1);
 assert.equal(s.B,'2026-11-06');
 assert.ok(!('A' in s));
});
test('Late Sunday A pushes next week first strength beyond 48h',()=>{
 const logs={'2026-11-08':{type:'A',completed:true}};
 const p=get('2026-11-09','2026-11-09',logs),s=schedule(p);
 assert.equal(s.B,'2026-11-10');
 assert.ok(delta(s.B,'2026-11-08')>=2);
});
test('Last strength B rotates A as the next first session',()=>{
 const logs={'2026-11-06':{type:'B',completed:true}};
 const p=get('2026-11-09','2026-11-09',logs),s=schedule(p);
 assert.equal(s.A,'2026-11-09');
});
test('Weekly stats counts only completed logs',()=>{
 const logs={'2026-11-02':{type:'A',completed:true},'2026-11-04':{type:'C',completed:true},'2026-11-06':{type:'B',completed:true},'2026-11-08':{type:'C',completed:false}};
 const s=weeklyStats(logs,'2026-11-08');
 assert.equal(s.total,3);assert.equal(s.strength,2);assert.equal(s.cardio,1);assert.equal(s.streak,1);
});
