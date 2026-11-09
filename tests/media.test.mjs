import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {EXERCISES} from '../data.js';
import {EXERCISE_MEDIA} from '../exercise-media.js';
import {EXERCISE_LOCAL_MEDIA,EXERCISE_APPROX_MEDIA} from '../exercise-extra-media.js';
const root=new URL('../',import.meta.url);
test('Original illustration assets exist for rare exercises',()=>{
 assert.ok(Object.keys(EXERCISE_LOCAL_MEDIA).length>=9);
 for(const [id,path] of Object.entries(EXERCISE_LOCAL_MEDIA)){
   assert.ok(EXERCISES[id],id);
   assert.ok(existsSync(fileURLToPath(new URL(path.replace('./',''),root))),path);
 }
});
test('Known inaccurate references are suppressed rather than presented as correct technique',()=>{
 for(const id of ['glutes09','glutes17','bwLateralShuffle','bwToeReach','gearSandbagCarry','gearJumpRope'])assert.equal(EXERCISE_APPROX_MEDIA[id],false,id);
 assert.ok(EXERCISE_LOCAL_MEDIA.core02);
 assert.ok(EXERCISE_LOCAL_MEDIA.mSki);
 assert.ok(EXERCISE_MEDIA.latPull && EXERCISE_MEDIA.seatedRow);
});
