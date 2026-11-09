// GymOS v4.8 – complete, equipment-aware sessions & on-demand alternatives.
// Pure helpers: no localStorage, no mutation of logs, no implicit completion.
export const STRENGTH_TARGET = 6;
export const MIN_STRENGTH_EXERCISES = 5;
export const CARDIO_TARGET_MINUTES = 60;

const GROUP_KEYWORDS = [
  ['chest', /Ngực/i], ['back', /Lưng|xô/i], ['shoulders', /Vai/i],
  ['legs', /Chân|Đùi/i], ['glutes', /Mông/i],
  ['biceps', /Tay trước/i], ['triceps', /Tay sau/i], ['core', /Core|Bụng/i]
];
const isAdvanced = (x) => /Nâng cao|Mạnh/i.test(x?.difficulty || '');
const groupOf = (x) => x?.group === 'Tim mạch' ? 'cardio'
  : x?.groupId || GROUP_KEYWORDS.find(([, test]) => test.test(x?.group || ''))?.[0] || null;

export function workoutAlternatives(id, exercises, canUse = () => true, options = {}) {
  const x = exercises[id];
  if (!x) return [];
  const group = groupOf(x);
  if (!group) return [];
  const excluded = new Set(options.exclude || []);
  const preferred = new Set(x.alternatives || []);
  const ids = Object.keys(exercises).filter(k => {
    const y = exercises[k];
    return k !== id && !excluded.has(k) && groupOf(y) === group &&
      !isAdvanced(y) && canUse(k, y);
  });
  const score = k => {
    const y = exercises[k];
    return (preferred.has(k) ? 100 : 0) +
      (x.movementPattern && x.movementPattern === y.movementPattern ? 50 : 0) +
      (x.primaryMuscle && x.primaryMuscle === y.primaryMuscle ? 25 : 0) +
      (y.difficulty === 'Rất dễ' ? 8 : y.difficulty === 'Dễ' ? 7 : 2);
  };
  ids.sort((a, b) => score(b) - score(a) || a.localeCompare(b));
  return ids.slice(0, Number(options.limit) || 8);
}

function groupOrder(session, planned) {
  if (session?.groupId) {
    const support = {
      chest: ['triceps', 'shoulders', 'core'],
      back: ['biceps', 'core', 'shoulders'],
      shoulders: ['triceps', 'back', 'core'],
      legs: ['glutes', 'core', 'back'],
      glutes: ['legs', 'core', 'back'],
      biceps: ['back', 'core', 'shoulders'],
      triceps: ['chest', 'core', 'shoulders'],
      core: ['legs', 'back', 'glutes']
    };
    return [session.groupId, session.groupId, session.groupId, session.groupId,
      ...(support[session.groupId] || ['core', 'back']), 'legs', 'chest', 'back'];
  }
  const templateGroups = (session.exerciseIds || []).map(id => groupOf(planned[id])).filter(Boolean);
  return [...templateGroups, 'shoulders', 'chest', 'back', 'legs', 'glutes', 'core', 'biceps', 'triceps'];
}

export function planStrengthSession({
  date, session, exercises, logs = {}, settings = {}, canUse = () => true,
  readiness = {}, variant = 0, basePlanner
}) {
  const base = basePlanner
    ? basePlanner({date, session, exercises, logs, settings, canUse, readiness, variant})
    : {ids:[], fixed:[], rotated:[], recovery:null};
  if (!session || session.kind !== 'strength') return base;

  const good = id => exercises[id] && groupOf(exercises[id]) !== 'cardio' &&
    groupOf(exercises[id]) && !isAdvanced(exercises[id]) &&
    canUse(id, exercises[id]) &&
    workoutAlternatives(id, exercises, canUse, {limit:1}).length > 0;
  const eligible = Object.keys(exercises).filter(good);
  const chosen = [];
  const add = id => {
    if (!good(id) || chosen.includes(id) || chosen.length >= STRENGTH_TARGET) return false;
    chosen.push(id);
    return true;
  };
  const seed = [...(base.ids || []), ...(session.exerciseIds || [])];
  const original = [...new Set(seed)];
  // Preserve foundational lifts where possible. If a machine is missing, seek the
  // same muscle group, not an unrelated substitute.
  for (const id of original) {
    if (chosen.length >= 5) break;
    if (add(id)) continue;
    const match = exercises[id] && eligible
      .filter(k => !chosen.includes(k) && groupOf(exercises[k]) === groupOf(exercises[id]))
      .sort((a,b) =>
        (exercises[b]?.movementPattern === exercises[id]?.movementPattern ? 1 : 0) -
        (exercises[a]?.movementPattern === exercises[id]?.movementPattern ? 1 : 0) ||
        a.localeCompare(b))[0];
    if (match) add(match);
  }
  const priorities = groupOrder(session, exercises);
  let counter = 0;
  while (chosen.length < STRENGTH_TARGET && counter++ < STRENGTH_TARGET + 2) {
    const used = Object.fromEntries(chosen.map(id => [groupOf(exercises[id]), 0]));
    for (const id of chosen) used[groupOf(exercises[id])]++;
    const rank = group => {
      const index = priorities.indexOf(group);
      const focus = session.groupId;
      const maxGroup = focus && focus === group ? 4 : (focus ? 2 : 2);
      const excess = (used[group] || 0) >= maxGroup ? 100 : 0;
      return excess + (index < 0 ? 35 : index * 2) + (used[group] || 0) * 16;
    };
    const candidates = eligible.filter(id => !chosen.includes(id))
      .filter(id => workoutAlternatives(id, exercises, canUse,
        {exclude: chosen.filter(k => k !== id),limit:1}).length > 0)
      .sort((a,b) => rank(groupOf(exercises[a])) - rank(groupOf(exercises[b])) ||
        // Rotate accessories deterministically without shuffling anchors.
        (variant ? ((a.length * 11 + variant * 17) % 19) -
                   ((b.length * 11 + variant * 17) % 19) : 0) || a.localeCompare(b));
    if (!candidates.length) break;
    add(candidates[0]);
  }
  // Validate alternatives AFTER the whole plan is composed. If the only
  // possible substitute is already elsewhere in the session, it is not a usable
  // replacement. Try another movement; otherwise omit the under-supported one.
  for (let passes = 0; passes < STRENGTH_TARGET + 2; passes++) {
    const hasAlt = (id, ids) => workoutAlternatives(id, exercises, canUse,
      {exclude:ids.filter(other => other !== id),limit:1}).length > 0;
    const unsupported = chosen.find(id => !hasAlt(id, chosen));
    if (!unsupported) break;
    chosen.splice(chosen.indexOf(unsupported), 1);
    const substitute = eligible.find(id => !chosen.includes(id) &&
      hasAlt(id, [...chosen,id]) && chosen.every(old => hasAlt(old, [...chosen,id])));
    if (substitute) chosen.push(substitute);
  }
  // Never include equipment the user has not selected just to reach a number.
  // These cases are reported explicitly instead of producing an unsafe plan.
  const shortage = Math.max(0, MIN_STRENGTH_EXERCISES - chosen.length);
  const fixed = (base.fixed || []).filter(id => chosen.includes(id));
  return {
    ...base, ids:chosen, fixed,
    targetCount:STRENGTH_TARGET, missingCount:shortage,
    estimatedMinutes:chosen.length >= 5 ? 60 : Math.max(15,chosen.length * 10),
    reason:shortage
      ? `Chỉ có ${chosen.length} bài phù hợp với thiết bị đã tick và có bài thay thế. Hãy chọn thêm máy/tạ/thảm trong “Máy phòng gym của tôi”.`
      : `${chosen.length} bài (~60 phút gồm khởi động và thả lỏng). Giữ bài chính, phối thêm bài phụ theo thiết bị và nhóm cơ.`,
    equipmentLimited: shortage > 0
  };
}

export function extendDraftExerciseIds(existingIds, recommendedIds, max = STRENGTH_TARGET) {
  const ids = [...new Set((existingIds || []).filter(Boolean))];
  for (const id of recommendedIds || []) {
    if (ids.length >= max) break;
    if (!ids.includes(id)) ids.push(id);
  }
  return ids;
}


/** Circuit days satisfy the 5-movement alternative to a 60-minute single-machine day.
 * Prefer easy low-impact bodyweight moves; never invent unavailable equipment.
 */
export function fillCardioCircuitIds(existingIds, exercises, canUse = () => true, minimum = 5) {
  const chosen = [...new Set((existingIds || []).filter(id => exercises[id]))];
  if (chosen.length >= minimum) return chosen;
  const preferred = ['bwMarch','bwStepTouch','bwWalkJacks','bwShadowbox',
    'bwToeReach','bwStandingClimber','bwReachSquat','bwLateralShuffle'];
  const other = Object.keys(exercises).filter(id => groupOf(exercises[id]) === 'cardio');
  for (const id of [...new Set([...preferred,...other])]) {
    if (chosen.length >= minimum) break;
    if (chosen.includes(id) || !exercises[id] || isAdvanced(exercises[id]) ||
      groupOf(exercises[id]) !== 'cardio' || !canUse(id, exercises[id])) continue;
    if (!workoutAlternatives(id, exercises, canUse, {limit:1}).length) continue;
    chosen.push(id);
  }
  return chosen;
}
