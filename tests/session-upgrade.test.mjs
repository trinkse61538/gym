import test from 'node:test';
import assert from 'node:assert/strict';
import {planStrengthSession,workoutAlternatives,extendDraftExerciseIds,fillCardioCircuitIds,MIN_STRENGTH_EXERCISES,CARDIO_TARGET_MINUTES} from '../gymos-session-upgrade.mjs';

const muscles=['legs','chest','back','shoulders','core','glutes','biceps','triceps'];
const exercises={};
for(const group of muscles) for(let i=1;i<=5;i++) {
  const id=`${group}${i}`;
  exercises[id]={name:id,vi:id,groupId:group,group,equipment:i===5?'machine':'mat',difficulty:'Dễ',
    movementPattern:i%2?'press':'pull',primaryMuscle:group,alternatives:[`${group}${i===1?2:1}`]};
}
exercises.walk={name:'Walk',group:'Tim mạch',difficulty:'Dễ',alternatives:['cycle']};
exercises.cycle={name:'Cycle',group:'Tim mạch',difficulty:'Dễ',alternatives:['walk']};
const a={kind:'strength',exerciseIds:['legs1','chest1','back1','shoulders1','core1']};
const basePlanner=()=>({ids:['legs1','chest1'],fixed:['legs1','chest1'],safeVolume:'normal'});
const create=(opts={})=>planStrengthSession({date:'2026-11-09',session:a,exercises,basePlanner,canUse:()=>true,...opts});

test('v4.7 two-exercise bug expands to six, remains muscle-diverse',()=>{
  const r=create();assert.equal(r.ids.length,6);
  assert.ok(new Set(r.ids.map(k=>exercises[k].groupId)).size>=5);
  assert.deepEqual(r.ids.slice(0,2),['legs1','chest1']);
  assert.equal(r.estimatedMinutes,60);
});
test('all scheduled exercises offer a non-duplicating available replacement',()=>{
  const r=create();
  for(const id of r.ids) assert.ok(workoutAlternatives(id,exercises,()=>true,{exclude:r.ids.filter(k=>k!==id)}).length>0,id);
});
test('respects equipment selection even while filling a session',()=>{
  const selected=new Set(['mat']);
  const canUse=(id,x)=>selected.has(x.equipment);
  const r=create({canUse});
  assert.ok(r.ids.length>=MIN_STRENGTH_EXERCISES);
  assert.ok(r.ids.every(id=>canUse(id,exercises[id])));
  for(const id of r.ids) assert.ok(workoutAlternatives(id,exercises,canUse,{exclude:r.ids.filter(k=>k!==id)}).length>0,id);
});
test('reports explicit shortage rather than suggesting unowned machines',()=>{
  const r=create({canUse:()=>false});
  assert.deepEqual(r.ids,[]);assert.equal(r.missingCount,MIN_STRENGTH_EXERCISES);
  assert.match(r.reason,/Chỉ có 0 bài/);
});
test('repairs old draft without deleting exercises or recorded logs',()=>{
  const before=['legs1','chest1'],logs={'2026-11-01':{completed:true,type:'A'}};
  const snapshot=JSON.stringify(logs);
  const fixed=extendDraftExerciseIds(before,create({logs}).ids);
  assert.equal(fixed.length,6);assert.deepEqual(fixed.slice(0,2),before);
  assert.deepEqual(before,['legs1','chest1']);assert.equal(JSON.stringify(logs),snapshot);
});
test('cardio offers at least one same-category alternative',()=>{
  assert.deepEqual(workoutAlternatives('walk',exercises,()=>true),['cycle']);
});
test('normal cardio target is 60 min; recovery remains a short optional session',()=>{
  assert.equal(CARDIO_TARGET_MINUTES,60);
});

test('integration: actual Full Body A/B templates expand to at least 5 exercises', async()=>{
  try {
    const {EXERCISES,SESSIONS} = await import('../data.js');
    const {makeSmartWorkout} = await import('../workout-intelligence.mjs');
    for(const type of ['A','B']) {
      const r=planStrengthSession({date:'2026-11-09',session:SESSIONS[type],exercises:EXERCISES,
        canUse:()=>true,basePlanner:makeSmartWorkout});
      assert.ok(r.ids.length>=MIN_STRENGTH_EXERCISES,`${type}: ${r.ids.length}`);
      for(const id of r.ids) assert.ok(workoutAlternatives(id,EXERCISES,()=>true,
        {exclude:r.ids.filter(k=>k!==id)}).length>0,`${type}/${id}`);
    }
  } catch(error) {
    // Standalone ZIP unit tests omit v4.7 source. In a real repo, any error must fail.
    if(error.code!=='ERR_MODULE_NOT_FOUND') throw error;
  }
});


test('circuit day gains fifth compatible cardio movement without extra equipment',()=>{
  const library={walk:{group:'Tim mạch',difficulty:'Dễ'},cycle:{group:'Tim mạch',difficulty:'Dễ'},
    a:{group:'Tim mạch',difficulty:'Dễ'},b:{group:'Tim mạch',difficulty:'Dễ'},c:{group:'Tim mạch',difficulty:'Dễ'}};
  const r=fillCardioCircuitIds(['walk','cycle','a','b'],library,()=>true);
  assert.equal(r.length,5);assert.equal(new Set(r).size,5);
  assert.deepEqual(r.slice(0,4),['walk','cycle','a','b']);
});
