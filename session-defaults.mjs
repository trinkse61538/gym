/** GymOS 4.8.1 – initial workout times, not a claim that user completed them. */
export const CARDIO_DEFAULT_MINUTES=Object.freeze({
  C:25,D:25,E:25,F:18,G:18,H:20,I:27,J:23,K:20,L:22,M:20,N:20,O:15,P:30
});
export function defaultCardioMinutes(type, session={}) {
  if(session?.kind !== 'cardio') return 60;
  const preset=Number(session.presetMinutes);
  if(Number.isFinite(preset) && preset>=1 && preset<=240) return preset;
  const known=CARDIO_DEFAULT_MINUTES[type];
  if(known) return known;
  const nums=String(session.time||'').match(/\d+/g)?.map(Number)||[];
  if(nums.length>=2)return Math.round((nums[0]+nums[1])/2);
  if(nums.length===1)return nums[0];
  return 20;
}
