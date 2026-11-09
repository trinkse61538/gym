import test from 'node:test';
import assert from 'node:assert/strict';
import {SESSIONS} from '../data.js';
import {defaultCardioMinutes,CARDIO_DEFAULT_MINUTES} from '../session-defaults.mjs';
import {smartMixEnabled,chooseStrengthIds,shouldExpandDraft} from '../training-modes.mjs';

test('all cardio workouts start with documented realistic durations, not 60m',()=>{
  for(const [type,expected] of Object.entries(CARDIO_DEFAULT_MINUTES)){
    const session=SESSIONS[type];
    assert.equal(session?.kind,'cardio',type);
    assert.equal(defaultCardioMinutes(type,session),expected,type);
    assert.ok(expected<=30,`unexpectedly long suggested workout ${type}`);
  }
});
test('predefined 15m/20m/30m presets override all fallbacks',()=>{
  for(const [id,minutes] of [['O',15],['N',20],['P',30]]){
    assert.equal(defaultCardioMinutes(id,SESSIONS[id]),minutes);
  }
  assert.equal(defaultCardioMinutes('custom',{kind:'cardio',presetMinutes:12,time:'60 phút'}),12);
});
test('cardio duration fallback and strength defaults work',()=>{
  assert.equal(defaultCardioMinutes('new',{kind:'cardio',time:'15–25 phút'}),20);
  assert.equal(defaultCardioMinutes('new',{kind:'cardio',time:'21 phút'}),21);
  assert.equal(defaultCardioMinutes('new',{kind:'cardio'}),20);
  assert.equal(defaultCardioMinutes('A',SESSIONS.A),60);
});
test('fixed mode never adds extra or rotated exercises',()=>{
  const settings={smartMix:false};
  const fixed=['legPress','chestPress','latPull','legCurl','deadBug'];
  const suggestions=['chestPress','latPull','legPress','other','core'];
  assert.equal(smartMixEnabled(settings),false);
  assert.deepEqual(chooseStrengthIds(settings,fixed,suggestions),fixed);
  assert.deepEqual(chooseStrengthIds(settings,['a','b'],['a','b','c','d']),['a','b']);
});
test('smart mode uses smart recommendations; honors intentional manual edits',()=>{
  const opts={smartMix:true};
  assert.deepEqual(chooseStrengthIds(opts,['a','b'],['a','c','d']),['a','c','d']);
  assert.equal(shouldExpandDraft(opts,{exerciseIds:['a','b'],manualExerciseCustomization:false},false),true);
  assert.equal(shouldExpandDraft(opts,{exerciseIds:['a','b'],manualExerciseCustomization:true},false),false);
  assert.equal(shouldExpandDraft(opts,{exerciseIds:['a','b']},true),false);
  assert.equal(shouldExpandDraft({smartMix:false},{exerciseIds:['a','b']},false),false);
});
