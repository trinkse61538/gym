import test from 'node:test';
import assert from 'node:assert/strict';
import { monday, move, delta, buildWeek, weeklyStats } from '../planner.mjs';
import { EXERCISES, SESSIONS } from '../data.js';
import { planStrengthSession, workoutAlternatives } from '../gymos-session-upgrade.mjs';
const w='2026-11-16';
test('Date helpers preserve Monday and local arithmetic',()=>{
 assert.equal(monday('2026-11-05'),'2026-11-02');assert.equal(move('2026-11-29',2),'2026-12-01');assert.equal(delta('2026-11-07','2026-11-05'),2);
});
test('Default week has four focused upper/lower sessions',()=>{
 const p=buildWeek(w,w,{});assert.deepEqual(p.planned.map(d=>d.type),['U1','L1','U2','L2']);assert.deepEqual(p.planned.map(d=>d.date),['2026-11-16','2026-11-17','2026-11-19','2026-11-21']);
});
test('Skipping a day preserves the next muscle group and recorded sets',()=>{
 const state={logs:{[w]:{type:'U1',completed:true,exercises:{chestPress:{sets:[{weight:5,reps:10,done:true}]}}}},skips:{'2026-11-17':true}};
 const before=JSON.stringify(state),p=buildWeek(w,'2026-11-18',state);assert.equal(p.planned[0].type,'L1');assert.equal(p.planned[0].date,'2026-11-19');assert.equal(JSON.stringify(state),before);
});
test('A missed session continues across week boundaries',()=>{
 const logs={'2026-11-16':{type:'U1',completed:true},'2026-11-19':{type:'L1',completed:true},'2026-11-21':{type:'U2',completed:true}};
 assert.equal(buildWeek('2026-11-23','2026-11-23',{logs}).planned[0].type,'L2');
});
test('Draft date, type and checked sets remain intact',()=>{
 const state={drafts:{'2026-11-19':{type:'U2',exerciseIds:['latPull'],exercises:{latPull:{sets:[{done:true}]}}}}};const before=JSON.stringify(state);const p=buildWeek(w,'2026-11-18',state);assert.equal(p.days[3].type,'U2');assert.equal(JSON.stringify(state),before);
});
test('Schedule respects selected days and avoids three consecutive strength days',()=>{
 const p=buildWeek(w,w,{settings:{trainingDays:[0,1,2,3]}});assert.deepEqual(p.planned.map(d=>d.date),['2026-11-16','2026-11-17','2026-11-19']);
});
test('Old completed full body sessions impose recovery spacing',()=>{
 const p=buildWeek(w,w,{logs:{'2026-11-15':{type:'A',completed:true}}});assert.equal(p.planned[0].date,'2026-11-17');
});
test('Each default split contains six supported exercises with alternatives',()=>{
 for(const t of ['U1','L1','U2','L2']){const p=planStrengthSession({date:w,session:SESSIONS[t],exercises:EXERCISES});assert.equal(p.ids.length,6);for(const id of p.ids)assert.ok(workoutAlternatives(id,EXERCISES,()=>true,{exclude:p.ids.filter(k=>k!==id)}).length);}
});
test('Weekly stats counts only completed logs, including legacy types',()=>{
 const logs={'2026-11-02':{type:'A',completed:true},'2026-11-04':{type:'C',completed:true},'2026-11-06':{type:'B',completed:true},'2026-11-08':{type:'C',completed:false}};
 const s=weeklyStats(logs,'2026-11-08');assert.equal(s.total,3);assert.equal(s.strength,2);assert.equal(s.cardio,1);assert.equal(s.streak,1);
});
