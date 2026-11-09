// GymOS v4.6: machine inventory and compatibility are pure functions for testability.
// Rules classify the gear named by each exercise; users may still manually open other exercises.
export const EQUIPMENT_GROUPS = Object.freeze([
  {name:'Máy tim mạch',items:[
    {id:'treadmill',label:'Treadmill',detail:'Máy đi bộ/chạy bộ'},
    {id:'bike',label:'Xe đạp cố định',detail:'Upright / spin / recumbent'},
    {id:'elliptical',label:'Elliptical / Arc',detail:'Máy đi bộ trên không'},
    {id:'rower',label:'Máy chèo thuyền',detail:'Rowing Ergometer'},
    {id:'stair',label:'Stair Climber',detail:'Máy leo cầu thang'},
    {id:'airbike',label:'Air Bike',detail:'Xe đạp quạt gió'},
    {id:'skierg',label:'SkiErg',detail:'Máy kéo Ski'},
    {id:'curved',label:'Máy chạy bộ cong',detail:'Curved treadmill'}]},
  {name:'Máy tập thân trên',items:[
    {id:'chestpress',label:'Chest Press',detail:'Máy đẩy ngực'},
    {id:'pecdeck',label:'Pec Deck / Rear Delt',detail:'Máy ép ngực/ép vai sau'},
    {id:'latpull',label:'Lat Pulldown',detail:'Máy kéo xô'},
    {id:'rowmachine',label:'Seated Row',detail:'Máy chèo lưng'},
    {id:'shoulderpress',label:'Shoulder Press',detail:'Máy đẩy vai'},
    {id:'cable',label:'Cable / Crossover',detail:'Giàn cáp và phụ kiện'},
    {id:'assisted',label:'Assisted Dip / Pull-up',detail:'Máy trợ lực'},
    {id:'bicepsmachine',label:'Biceps Curl Machine',detail:'Máy tay trước'},
    {id:'tricepsmachine',label:'Triceps Machine',detail:'Máy tay sau'},
    {id:'othermachine',label:'Máy chuyên dụng khác',detail:'Máy ít gặp chưa phân loại'}]},
  {name:'Máy chân và mông',items:[
    {id:'legpress',label:'Leg Press',detail:'Máy đạp đùi'},
    {id:'legextension',label:'Leg Extension',detail:'Máy duỗi đùi'},
    {id:'legcurl',label:'Leg Curl',detail:'Máy gập đùi sau'},
    {id:'hacksquat',label:'Hack Squat',detail:'Máy squat'},
    {id:'hipmachine',label:'Hip Abductor / Adductor',detail:'Máy mở/khép đùi'},
    {id:'smith',label:'Smith Machine',detail:'Khung dẫn thanh'},
    {id:'calfmachine',label:'Calf Raise Machine',detail:'Máy bắp chân'},
    {id:'abmachine',label:'Abdominal Crunch Machine',detail:'Máy gập bụng'}]},
  {name:'Tạ & dụng cụ chức năng',items:[
    {id:'dumbbell',label:'Tạ đơn',detail:'Dumbbell các mức tạ'},
    {id:'barbell',label:'Tạ đòn / EZ bar',detail:'Barbell / EZ'},
    {id:'bench',label:'Ghế tập',detail:'Ghế phẳng / dốc / cố định'},
    {id:'kettlebell',label:'Kettlebell',detail:'Tạ chuông'},
    {id:'mat',label:'Thảm tập',detail:'Bài sàn / core'},
    {id:'step',label:'Bục Step / Box',detail:'Bục step thấp'},
    {id:'band',label:'Dây kháng lực',detail:'Resistance / mini band'},
    {id:'medicineball',label:'Bóng y tế',detail:'Medicine ball / stability ball'},
    {id:'battlerope',label:'Battle Rope',detail:'Dây thừng tập'},
    {id:'sled',label:'Sled',detail:'Xe đẩy kéo tạ'},
    {id:'agility',label:'Thang / cọc agility',detail:'Agility ladder / cone'},
    {id:'sandbag',label:'Sandbag',detail:'Túi cát'}]}
]);
export const EQUIPMENT_IDS = EQUIPMENT_GROUPS.flatMap(g=>g.items.map(x=>x.id));
export const equipmentLabel = id => EQUIPMENT_GROUPS.flatMap(g=>g.items).find(x=>x.id===id)?.label||id;
export function equipmentForExercise(id,ex){
  const s=`${id} ${ex?.equipment||''} ${ex?.name||''}`.toLowerCase();
  const gear=[];
  const add=k=>{if(!gear.includes(k))gear.push(k)};
  if(/không dụng cụ|không cần|trọng lượng cơ thể|tường|wall push|body only|bodyweight|no equipment/.test(s) && !/máy|cáp|tạ|band|dây|bục|box|thảm/.test((ex?.equipment||'').toLowerCase()))return [];
  // Cardio families: exact id override prevents text ambiguity.
  if(ex?.cardioCategory==='machine'||['bike','treadmill','elliptical'].includes(id)){
    if(/air bike|assault bike|mairbike/.test(s))return ['airbike'];
    if(/ski.?erg|mski/.test(s))return ['skierg'];
    if(/curved|mcurved|máy cong/.test(s))return ['curved'];
    if(/tread|máy chạy|đi bộ máy|mtread/.test(s))return ['treadmill'];
    if(/elliptical|arc trainer|marc/.test(s))return ['elliptical'];
    if(/row|chèo thuyền|mrow/.test(s))return ['rower'];
    if(/stair|cầu thang/.test(s))return ['stair'];
    if(/bike|xe đạp|spin|recumbent/.test(s))return ['bike'];
    return [];
  }
  // Cardio and gym accessories.
  if(/thang agility|agility ladder|cọc mốc|cone shuffle|marker/.test(s))add('agility');
  if(/battle.?rope|battling rope|dây thừng/.test(s))add('battlerope');
  if(/sled|xe đẩy tạ/.test(s))add('sled');
  if(/sandbag|bao cát/.test(s))add('sandbag');
  if(/medicine|bóng y tế|bóng tập|stability ball/.test(s))add('medicineball');
  if(/resistance band|mini.band|dây kháng lực|dây đàn hồi|band.resisted/.test(s))add('band');
  if(/step|bục|aerobic|platform|box jump/.test(s))add('step');
  if(/kettlebell|tạ chuông/.test(s))add('kettlebell');
  if(/tạ đơn|dumbbell/.test(s))add('dumbbell');
  if(/tạ đòn|barbell|thanh ez|ez.bar/.test(s))add('barbell');
  if(/ghế|bench/.test((ex?.equipment||'').toLowerCase()))add('bench');
  if(/thảm|mat/.test((ex?.equipment||'').toLowerCase()))add('mat');
  // Specific gym machines win over generic free weights/cables.
  if(/pec.?deck|reverse pec|ép ngực máy/.test(s))return ['pecdeck'];
  if(/máy đẩy ngực|machine chest press|máy chest press|máy chest/.test(s))return ['chestpress'];
  if(/máy đẩy vai|máy shoulder press|machine shoulder press/.test(s))return ['shoulderpress'];
  if(/máy kéo xô|lat pulldown|lat pull.down|máy lat/.test(s))return ['latpull'];
  if(/seated row|machine row|máy kéo lưng|máy seated row/.test(s) && !/cáp/.test((ex?.equipment||'').toLowerCase()))return ['rowmachine'];
  if(/máy duỗi đùi|máy leg extension|leg extension machine|leg extension/.test(s) && /máy/.test(s))return ['legextension'];
  if(/máy gập đùi|leg curl|seated leg curl|lying leg curl/.test(s) && /máy/.test(s))return ['legcurl'];
  if(/leg press|máy đạp đùi/.test(s))return ['legpress'];
  if(/hack squat/.test(s))return ['hacksquat'];
  if(/hip abduction machine|hip adduction machine|máy mở đùi|máy khép đùi|abductor machine|adductor machine/.test(s))return ['hipmachine'];
  if(/smith/.test(s))return ['smith',...gear.filter(k=>k==='bench')];
  if(/máy bắp chân|calf machine|seated calf raise/.test(s) && /máy/.test(s))return ['calfmachine'];
  if(/máy gập bụng|abdominal crunch machine|ab crunch machine/.test(s))return ['abmachine'];
  if(/assisted|máy trợ lực|dip trợ lực/.test(s))return ['assisted'];
  if(/máy tay trước|biceps machine|máy biceps|machine bicep/.test(s))return ['bicepsmachine'];
  if(/máy tay sau|triceps machine|máy triceps|machine triceps/.test(s))return ['tricepsmachine'];
  if(/cáp|cable|pulley|máy kéo cáp|dây cáp/.test(s))return ['cable'];
  if(/máy|machine/.test((ex?.equipment||'').toLowerCase())&&!gear.length)return ['othermachine'];
  return gear;
}
export function gymActive(settings){return !!settings?.gymConfigured&&!!settings?.gymOnly;}
export function canDoExercise(id,ex,settings){if(!gymActive(settings))return true;
  const owned=new Set(Array.isArray(settings.gymEquipment)?settings.gymEquipment:[]);
  return equipmentForExercise(id,ex).every(k=>owned.has(k));
}
export function equipmentFilteredEntries(entries,settings){return entries.filter(([id,ex])=>canDoExercise(id,ex,settings));}
export function adaptedSessionIds(session,exercises,settings){
 const chosen=[],replaced=[],removed=[];
 for(const id of (session?.exerciseIds||[])){
   const ex=exercises[id];if(!ex)continue;
   if(canDoExercise(id,ex,settings)){if(!chosen.includes(id))chosen.push(id);continue;}
   const candidates=[...(ex.alternatives||[]),...Object.keys(exercises).filter(k=>k!==id&&((ex.groupId&&exercises[k].groupId===ex.groupId)||(ex.group==='Tim mạch'&&exercises[k].group==='Tim mạch')))];
   let next=candidates.find(k=>exercises[k] && !chosen.includes(k) && exercises[k].group===ex.group && canDoExercise(k,exercises[k],settings) && !['Nâng cao','Mạnh'].includes(exercises[k].difficulty));
   if(!next && ex.group!=='Tim mạch')next=candidates.find(k=>exercises[k] && !chosen.includes(k) && exercises[k].group===ex.group && canDoExercise(k,exercises[k],settings));
   if(next){chosen.push(next);replaced.push({from:id,to:next});}else removed.push(id);
 }
 return {ids:chosen,replaced,removed};
}
