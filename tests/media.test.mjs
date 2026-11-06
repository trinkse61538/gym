import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {EXERCISES} from '../data.js';
import {EXERCISE_MEDIA} from '../exercise-media.js';

const app=readFileSync(new URL('../app.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../styles.css',import.meta.url),'utf8');
const serviceWorker=readFileSync(new URL('../sw.js',import.meta.url),'utf8');

test('Lat Pulldown and Seated Cable Row have distinct exercise-specific photos, never deadlift',()=>{
 assert.equal(EXERCISE_MEDIA.latPull,'Wide-Grip_Lat_Pulldown');
 assert.equal(EXERCISE_MEDIA.seatedRow,'Seated_Cable_Rows');
 assert.notEqual(EXERCISE_MEDIA.latPull,EXERCISE_MEDIA.seatedRow);
 assert.equal(EXERCISE_MEDIA.back01,'Wide-Grip_Lat_Pulldown');
});

test('all mapped image IDs correspond to an exercise that exists in GymOS',()=>{
 assert.ok(Object.keys(EXERCISE_MEDIA).length>100);
 for(const id of Object.keys(EXERCISE_MEDIA)){
  assert.ok(EXERCISES[id],`missing exercise ${id}`);
  assert.ok(EXERCISE_MEDIA[id] && !EXERCISE_MEDIA[id].includes(' '),`invalid image reference ${id}`);
 }
});

test('unmapped variants show a text placeholder, not a misleading photo',()=>{
 assert.ok(!EXERCISE_MEDIA.chest03); // Pec Deck Fly does not use a random shoulder/back image.
 assert.ok(app.includes('CHƯA CÓ ẢNH ĐÚNG'));
 assert.ok(!app.includes('PREVIEW_ASSETS'));
});

test('mobile exercise images use contain and cards do not stretch',()=>{
 assert.match(css,/exercise-cover img\.exercise-photo\{[^}]*object-fit:contain/s);
 assert.match(css,/exercise-list-card \.exercise-card-body\{[^}]*height:auto/s);
 assert.match(css,/exercise-frame img\.exercise-photo\{[^}]*object-fit:contain/s);
});

test('updated service worker includes image index and localStorage is untouched',()=>{
 assert.match(serviceWorker,/gymos-static-v43/);
 assert.match(serviceWorker,/exercise-media\.js/);
 assert.match(app,/gymos_local_v2/);
});
