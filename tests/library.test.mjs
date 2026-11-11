import test from 'node:test';
import assert from 'node:assert/strict';
import {EXERCISES,SESSIONS,MUSCLE_GROUPS,GROUP_IDS} from '../data.js';
import {buildWeek,weeklyStats,delta} from '../planner.mjs';
test('Eight muscle groups contain at least 20 distinct, complete workouts each',()=>{
 assert.equal(MUSCLE_GROUPS.length,8);
 for (const group of MUSCLE_GROUPS){
   const ids=GROUP_IDS[group.id];
   assert.ok(ids.length>=20,group.id);
   assert.equal(new Set(ids).size,ids.length,group.id);
   for (const id of ids){
     const x=EXERCISES[id];
     assert.equal(x.groupId,group.id);
     assert.ok(x.name && x.vi && x.equipment && x.primaryMuscle && x.secondaryMuscles && x.breath && x.avoid && x.video && x.difficulty,id);
     assert.ok(x.steps.length===3,id);
     assert.ok(x.alternatives.length>=1 && x.alternatives.every(k=>EXERCISES[k]),id);
   }
 }
});
test('Legacy focus and new split templates contain supported exercise IDs',()=>{
 const ids=Object.keys(SESSIONS).filter(id=>SESSIONS[id].groupId);
 assert.equal(ids.length,12);
 for(const id of ids){
   const s=SESSIONS[id];
   assert.equal(s.exerciseIds.length,s.split?6:5,id);
   assert.ok(s.exerciseIds.every(x=>EXERCISES[x]),id);
 }
});
test('Completed legacy focus workout stays counted and preserves recovery',()=>{
 const logs={'2026-11-02':{completed:true,type:'FC'}};
 const p=buildWeek('2026-11-02','2026-11-03',{logs,skips:{}});
 assert.equal(p.doneStrength,1);
 assert.equal(p.planned.filter(x=>x.type!=='C').length,2);
 assert.ok(p.planned.every(x=>x.type==='C'||delta(x.date,'2026-11-02')>=2));
 assert.equal(weeklyStats(logs,'2026-11-03').strength,1);
});
test('Two legacy focus workouts leave only recovery-compatible future slots',()=>{
 const logs={'2026-11-02':{completed:true,type:'FC'},'2026-11-04':{completed:true,type:'FV'}};
 const p=buildWeek('2026-11-02','2026-11-05',{logs,skips:{}});
 assert.equal(p.doneStrength,2);
 assert.equal(p.planned.filter(x=>x.type!=='C').length,1);
 assert.ok(p.planned.every(x=>delta(x.date,'2026-11-04')>=2));
 assert.equal(weeklyStats(logs,'2026-11-05').strength,2);
});
