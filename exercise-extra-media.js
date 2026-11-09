// GymOS-specific original visuals for rare exercises.
// AI visuals are previews only and MUST NOT replace checked technique demonstrations.
export const EXERCISE_LOCAL_MEDIA=Object.freeze({
  core02:'./assets/exercise-specific/bird-dog.webp',
  glutes11:'./assets/exercise-specific/seated-hip-abduction.webp',
  glutes08:'./assets/exercise-specific/quadruped-leg-extension.webp',
  glutes20:'./assets/exercise-specific/banded-clamshell.webp',
  glutes13:'./assets/exercise-specific/lateral-band-walk.webp',
  bwMarch:'./assets/exercise-specific/march-in-place.webp',
  bwShadowbox:'./assets/exercise-specific/shadow-boxing.webp',
  mSki:'./assets/exercise-specific/ski-erg.webp',
  gearMedicineSlam:'./assets/exercise-specific/medicine-ball-slam.webp',
});
// false means the existing source image depicts the wrong movement and must not be shown.
// true means the photo is of a nearby variation; always display a visible disclosure.
export const EXERCISE_APPROX_MEDIA=Object.freeze({
  // Different equipment or movement: hide rather than mislead.
  glutes09:false,glutes17:false,bwSideSteps:false,bwHeelDig:false,bwKneeLift:false,
  bwButtKick:false,bwLateralShuffle:false,bwWalkJacks:false,bwCalfReach:false,
  bwFastFeet:false,bwBoxerBounce:false,bwToeReach:false,
  bwStepTouch:false,bwSkaterStep:false,bwInclineClimber:false,
  gearLadder:false,gearToeTap:false,gearBandMarch:false,gearConeShuffle:false,
  gearBandPunch:false,gearMedCarry:false,gearPlateMarch:false,gearSandbagCarry:false,
  gearKettleMarch:false,gearBoxLateral:false,gearRopes:false,
  // Known invalid references from the public dataset; prevent broken images.
  gearJumpRope:false,
  // Similar movements, not exact variant.
  wallPush:true,chest03:true,chest18:true,glutes10:true,glutes12:true,
  shoulders16:true,glutes01:true,glutes03:true,glutes05:true,
  triceps18:true,gearStepUp:true,bwStairEasy:true,bwBearMarch:true,
  mCurved:true,legs16:true,core19:true,
});
