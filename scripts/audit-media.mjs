import {readFileSync, existsSync, statSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {join,resolve} from 'node:path';
const root=resolve(process.argv[2]||'.');
const imp=async file=>import(pathToFileURL(join(root,file)).href+'?audited=485');
const [{EXERCISES},{EXERCISE_MEDIA},{EXERCISE_LOCAL_MEDIA,EXERCISE_APPROX_MEDIA}]=await Promise.all([imp('data.js'),imp('exercise-media.js'),imp('exercise-extra-media.js')]);
let problems=[],approx=0,original=0,hosted=0;
for(const [id,x] of Object.entries(EXERCISES)){
 if(EXERCISE_APPROX_MEDIA[id]===true)approx++;
 if(EXERCISE_LOCAL_MEDIA[id]){
   original++;const f=join(root,EXERCISE_LOCAL_MEDIA[id]);if(!existsSync(f)||statSync(f).size<1000)problems.push(`${id}: local image missing`);
 }else{
   const ref=EXERCISE_APPROX_MEDIA[id]===false?null:EXERCISE_MEDIA[id];
   if(!ref){problems.push(`${id}: no media mapping`);continue;}
   hosted++;
   for(let i=0;i<=1;i++){
      const path=join(root,'assets','exercise-photos',ref,`${i}.jpg`);
      if(!existsSync(path)||statSync(path).size<1500)problems.push(`${id}: ${ref}/${i}.jpg absent`);
   }
 }
}
const out={total:Object.keys(EXERCISES).length,local:original,hosted,approx,unresolved:problems.length,issues:problems.slice(0,20)};
console.log(JSON.stringify(out,null,2));
if(problems.length)process.exit(1);
