import test from 'node:test';
import assert from 'node:assert/strict';
import {EXERCISES,SESSIONS} from '../data.js';
import {EQUIPMENT_GROUPS,EQUIPMENT_IDS,equipmentForExercise,canDoExercise,adaptedSessionIds} from '../gym-equipment.mjs';
import {isCardio,isStrength} from '../planner.mjs';
const chosen=['treadmill','latpull','legpress','chestpress','legcurl','mat'];
const settings={gymConfigured:true,gymOnly:true,gymEquipment:chosen};
test('Inventory categories are unique and include requested cardio and strength machines',()=>{
 const all=EQUIPMENT_GROUPS.flatMap(x=>x.items.map(y=>y.id));
 assert.equal(new Set(all).size,all.length);
 assert.deepEqual(new Set(all),new Set(EQUIPMENT_IDS));
 for(const x of ['treadmill','rower','bike','chestpress','legpress','latpull','cable','dumbbell'])assert.ok(all.includes(x));
});
test('Identifies exact equipment requirements for common exercises',()=>{
 assert.deepEqual(equipmentForExercise('treadmill',EXERCISES.treadmill),['treadmill']);
 assert.deepEqual(equipmentForExercise('bike',EXERCISES.bike),['bike']);
 assert.deepEqual(equipmentForExercise('latPull',EXERCISES.latPull),['latpull']);
 assert.deepEqual(equipmentForExercise('chestPress',EXERCISES.chestPress),['chestpress']);
 assert.deepEqual(equipmentForExercise('legPress',EXERCISES.legPress),['legpress']);
 assert.deepEqual(equipmentForExercise('bwMarch',EXERCISES.bwMarch),[]);
});
test('Legacy behavior remains unfiltered until inventory is explicitly configured',()=>{
 assert.equal(canDoExercise('latPull',EXERCISES.latPull,{}),true);
 assert.equal(canDoExercise('latPull',EXERCISES.latPull,{gymConfigured:true,gymOnly:false,gymEquipment:[]}),true);
});
test('Activating inventory excludes missing machines but keeps bodyweight',()=>{
 assert.equal(canDoExercise('latPull',EXERCISES.latPull,settings),true);
 assert.equal(canDoExercise('bike',EXERCISES.bike,settings),false);
 assert.equal(canDoExercise('treadmill',EXERCISES.treadmill,settings),true);
 assert.equal(canDoExercise('bwMarch',EXERCISES.bwMarch,settings),true);
});
test('Workout generator replaces missing equipment instead of proposing it',()=>{
 for (const type of ['A','B','C','N','O','P']) {
 const res=adaptedSessionIds(SESSIONS[type],EXERCISES,settings);
 assert.ok(res.ids.length>0,type);
 assert.ok(res.ids.every(id=>canDoExercise(id,EXERCISES[id],settings)),type);
 }
 const adapted=adaptedSessionIds(SESSIONS.B,EXERCISES,settings);
 assert.ok(adapted.removed.length>0);
});
test('All cardio presets are counted as cardio, not strength',()=>{
 for(const id of 'IJKLMNOP') {assert.ok(isCardio(id),id);assert.ok(!isStrength(id),id);}
 assert.equal(SESSIONS.N.presetMinutes,20);
 assert.equal(SESSIONS.O.presetMinutes,15);
 assert.equal(SESSIONS.P.presetMinutes,30);
});
