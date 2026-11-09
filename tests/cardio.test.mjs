import test from 'node:test';
import assert from 'node:assert/strict';
import {EXERCISES,SESSIONS,CARDIO_CATEGORIES} from '../data.js';
import {isCardio,isStrength,buildWeek,weeklyStats} from '../planner.mjs';

test('Three cardio modalities and expanded cardio exercises',()=>{
  const cardio=Object.entries(EXERCISES).filter(([,x])=>x.group==='Tim mạch');
  assert.ok(cardio.length>=56);
  assert.deepEqual(CARDIO_CATEGORIES.map(x=>x.id),['machine','bodyweight','equipment']);
  for(const category of CARDIO_CATEGORIES){assert.ok(cardio.filter(([,x])=>x.cardioCategory===category.id).length>=12);}
  for(const [id,x] of cardio){
    assert.ok(x.vi&&x.name&&x.steps.length===3&&x.avoid&&x.breath&&x.video&&x.equipment,id);
    assert.ok(x.alternatives.every(k=>EXERCISES[k]),id);
  }
});
test('Cardio templates and presets provide valid IDs',()=>{
  for(const type of ['C','D','E','F','G','H','I','J','K','L','M','N','O','P']){
    const s=SESSIONS[type];assert.ok(s&&s.kind==='cardio'&&s.exerciseIds.length>=1,type);
    assert.ok(s.exerciseIds.every(id=>EXERCISES[id]&&EXERCISES[id].group==='Tim mạch'),type);
    assert.ok(isCardio(type)&&!isStrength(type),type);
    assert.ok(s.exerciseIds.every(id=>EXERCISES[id].difficulty!=='Nâng cao') || ['M'].includes(type),type);
  }
  assert.ok(isStrength('A'));assert.ok(isStrength('FC'));
});
test('Alternative cardio completion replaces planned treadmill, does not become strength',()=>{
  for(const type of ['D','E','F','G','H']){
    const logs={'2026-11-03':{completed:true,type,minutes:22,effort:4}};
    const plan=buildWeek('2026-11-02','2026-11-04',{logs,skips:{}});
    assert.equal(plan.doneStrength,0);
    assert.ok(!plan.planned.some(x=>isCardio(x.type)),type);
    assert.ok(!plan.unplanned.includes('C'),type);
    assert.equal(weeklyStats(logs,'2026-11-04').cardio,1);
    assert.equal(weeklyStats(logs,'2026-11-04').cardioMinutes,22);
  }
});
test('Combinations of cardio + strength get counted correctly',()=>{
  const logs={'2026-11-02':{completed:true,type:'A',minutes:40},'2026-11-04':{completed:true,type:'G',minutes:20},'2026-11-06':{completed:true,type:'B',minutes:43}};
  const plan=buildWeek('2026-11-02','2026-11-07',{logs,skips:{}});
  assert.equal(plan.doneStrength,2);assert.equal(plan.planned.length,0);
  const stats=weeklyStats(logs,'2026-11-07');assert.equal(stats.total,3);assert.equal(stats.strength,2);assert.equal(stats.cardio,1);assert.equal(stats.cardioMinutes,20);
});
