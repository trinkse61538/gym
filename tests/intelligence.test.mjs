import test from 'node:test';
import assert from 'node:assert/strict';
import {EXERCISES,SESSIONS} from '../data.js';
import {makeSmartWorkout,progressionSuggestion,recoveryStatus,repRange,muscleOf} from '../workout-intelligence.mjs';
import {canDoExercise} from '../gym-equipment.mjs';
const day='2026-11-09';
const log=(type,exercise,weights=[10,10],reps=[12,12],formOk=true,effort=6)=>({type,completed:true,effort,exerciseIds:[exercise],exercises:{[exercise]:{replacement:exercise,formOk,sets:weights.map((weight,i)=>({weight,reps:reps[i],done:true}))}}});
const build=(session=SESSIONS.A, extra={})=>makeSmartWorkout({date:day,session,exercises:EXERCISES,logs:{},canUse:()=>true,...extra});
test('new users start with familiar Full Body A anchors',()=>{
 const r=build();assert.equal(r.ids.length,5); assert.deepEqual(r.ids.slice(0,3),['legPress','chestPress','latPull']); assert.equal(new Set(r.ids).size,5);
});
test('Full Body B keeps its three stable anchor lifts',()=>{
 const r=build(SESSIONS.B);assert.deepEqual(r.ids.slice(0,3),['goblet','seatedRow','gluteBridge']);
});
test('smart mix returns a different supplemental list and remains deterministic',()=>{
 const logs={'2026-11-05':log('A','legPress')};
 const opt={logs,variant:2};const r=build(SESSIONS.A,opt);const r2=build(SESSIONS.A,opt);
 assert.deepEqual(r.ids,r2.ids);assert.deepEqual(r.ids.slice(0,3),['legPress','chestPress','latPull']);assert.equal(r.ids.length,5);
 assert.ok(r.ids.every(id=>EXERCISES[id]));
});
test('respects gym equipment: none of selected exercises require absent machines',()=>{
 const settings={gymConfigured:true,gymOnly:true,gymEquipment:['mat','dumbbell','bench','band']};
 const r=build(SESSIONS.A,{canUse:(id,x)=>canDoExercise(id,x,settings)});
 assert.ok(r.ids.length>0);assert.ok(r.ids.every(id=>canDoExercise(id,EXERCISES[id],settings)));
});
test('no equipment available: returns no bad exercise',()=>{
 const r=build(SESSIONS.A,{canUse:()=>false});assert.deepEqual(r.ids,[]);
});
test('does not silently plan advanced exercises',()=>{
 const r=build(SESSIONS.A,{logs:{'2026-11-01':log('A','legPress')}});
 assert.ok(r.ids.every(id=>!['Nâng cao','Mạnh'].includes(EXERCISES[id].difficulty)));
});
test('focus session selects only muscle category, within five exercises',()=>{
 const focused=Object.values(SESSIONS).find(s=>s.groupId==='chest');assert.ok(focused);
 const r=build(focused,{logs:{'2026-11-01':log('A','chestPress')}});
 assert.ok(r.ids.length>=3&&r.ids.length<=5);assert.ok(r.ids.filter(id=>muscleOf(EXERCISES[id])==='chest').length>=3);assert.ok(r.ids.every(id=>['chest','triceps','shoulders'].includes(muscleOf(EXERCISES[id]))));
});
test('old completed session does not mutate when planning',()=>{
 const logs={'2026-11-04':log('A','chestPress')}, snapshot=JSON.stringify(logs);
 build(SESSIONS.A,{logs});assert.equal(JSON.stringify(logs),snapshot);
});
test('recovery excludes sessions in future and completed cardio',()=>{
 const logs={'2026-11-08':{type:'C',completed:true,exerciseIds:['treadmill'],exercises:{}},'2026-11-10':log('A','legPress')};
 const r=recoveryStatus(logs,EXERCISES,day);assert.equal(r.recentStrengthGap,null);
});
test('recovery detects strength from yesterday and overlapping muscles',()=>{
 const r=recoveryStatus({'2026-11-08':log('A','chestPress')},EXERCISES,day);
 assert.equal(r.recentStrengthGap,1);assert.equal(r.mode,'light');assert.ok(r.groupLoad.chest>0);assert.ok(r.groupLoad.triceps>0);
});
test('readiness severe soreness flags rest, mild check-in flags light',()=>{
 assert.equal(recoveryStatus({},EXERCISES,day,{energy:1,soreness:3,sleep:1}).mode,'rest');
 assert.equal(recoveryStatus({},EXERCISES,day,{energy:2,soreness:1,sleep:3}).mode,'light');
 assert.equal(recoveryStatus({},EXERCISES,day,{energy:4,soreness:0,sleep:4}).mode,'normal');
});
test('rep ranges distinguish reps and timed holds',()=>{
 assert.deepEqual(repRange('8–12'),{min:8,max:12});assert.deepEqual(repRange('6–8 mỗi bên'),{min:6,max:8});assert.equal(repRange('20 giây'),null);
});
test('no historical data: baseline, no unearned weight increases',()=>{
 assert.equal(progressionSuggestion('legPress',EXERCISES.legPress,{},day).kind,'baseline');
});
test('one clean top-rep session suggests rep increase, not weight',()=>{
 const logs={'2026-11-05':log('A','chestPress')};assert.equal(progressionSuggestion('chestPress',EXERCISES.chestPress,logs,day).kind,'reps');
});
test('two clean top-rep sessions, same kg: cautiously suggest one small weight notch',()=>{
 const logs={'2026-11-01':log('A','chestPress'),'2026-11-05':log('A','chestPress')};
 assert.equal(progressionSuggestion('chestPress',EXERCISES.chestPress,logs,day).kind,'increase');
});
test('without verified technique the app must not suggest increasing weight',()=>{
 const logs={'2026-11-01':log('A','chestPress',[10,10],[12,12],false),'2026-11-05':log('A','chestPress')};
 assert.notEqual(progressionSuggestion('chestPress',EXERCISES.chestPress,logs,day).kind,'increase');
});
test('higher effort / differing weights / bodyweight does not qualify for kg increase',()=>{
 const logs={'2026-11-01':log('A','chestPress',[10,10],[12,12],true,8),'2026-11-05':log('A','chestPress')};assert.notEqual(progressionSuggestion('chestPress',EXERCISES.chestPress,logs,day).kind,'increase');
 const mismatch={'2026-11-01':log('A','chestPress',[9,9]),'2026-11-05':log('A','chestPress')};assert.notEqual(progressionSuggestion('chestPress',EXERCISES.chestPress,mismatch,day).kind,'increase');
});
test('long training gap suggests easing back rather than progressing',()=>{
 const logs={'2026-10-01':log('A','legPress')};assert.equal(progressionSuggestion('legPress',EXERCISES.legPress,logs,day).kind,'ease');
});
test('current/future log is not used for progression on that date',()=>{
 const logs={'2026-11-09':log('A','legPress'),'2026-11-11':log('A','legPress')};assert.equal(progressionSuggestion('legPress',EXERCISES.legPress,logs,day).kind,'baseline');
});

test('manual re-mix rotates optional lifts but keeps main anchors',()=>{
 const logs={'2026-11-05':log('A','legPress')};
 const a=build(SESSIONS.A,{logs,variant:0}),b=build(SESSIONS.A,{logs,variant:1});
 assert.deepEqual(a.ids.slice(0,3),b.ids.slice(0,3));
 assert.notDeepEqual(a.ids.slice(3),b.ids.slice(3));
});
test('last strength day suppresses any load increase when recovery is limited',()=>{
 const logs={'2026-11-01':log('A','chestPress'),'2026-11-08':log('A','chestPress')};
 assert.equal(progressionSuggestion('chestPress',EXERCISES.chestPress,logs,day,{energy:3,soreness:0,sleep:3},EXERCISES).kind,'recovery');
});
