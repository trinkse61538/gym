import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,statSync} from 'node:fs';
import {EXERCISES} from '../data.js';
import {EXERCISE_MEDIA} from '../exercise-media.js';
import {EXERCISE_LOCAL_MEDIA,EXERCISE_APPROX_MEDIA} from '../exercise-extra-media.js';
test('Every exercise has a locally available, nonempty visual source (including cardio)',()=>{
 for(const [id,x] of Object.entries(EXERCISES)){
  if(EXERCISE_LOCAL_MEDIA[id]){
   const f=EXERCISE_LOCAL_MEDIA[id];assert.ok(existsSync(f)&&statSync(f).size>1000,id+' '+f);
  }else{
   const ref=EXERCISE_APPROX_MEDIA[id]===false?null:EXERCISE_MEDIA[id];
   assert.ok(ref,id+' no mapped photo');
   for(const i of [0,1]){
    const f=`./assets/exercise-photos/${ref}/${i}.jpg`;
    assert.ok(existsSync(f)&&statSync(f).size>1500,id+' '+f);
   }
  }
 }
 assert.equal(Object.keys(EXERCISES).length,231,'Review dataset size changes and resync media before deployment');
});
