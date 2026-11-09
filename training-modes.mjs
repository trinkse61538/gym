/** GymOS 4.8.1: explicit choice between fixed templates and automatic mix. */
export const smartMixEnabled=settings=>settings?.smartMix!==false;
export function chooseStrengthIds(settings, fixedIds, smartIds) {
  const source=smartMixEnabled(settings)&&Array.isArray(smartIds)&&smartIds.length?smartIds:fixedIds;
  return [...new Set((source||[]).filter(Boolean))];
}
export function shouldExpandDraft(settings, draft, completed, minExercises=5) {
  return smartMixEnabled(settings)&&!completed&&draft?.manualExerciseCustomization!==true&&
    Array.isArray(draft?.exerciseIds)&&draft.exerciseIds.length<minExercises;
}
