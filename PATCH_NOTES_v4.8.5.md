# GymOS v4.8.5 – Full Media Availability Repair

*This is an installer patch, not a ZIP containing every public-domain JPG.*

- Current dataset audited: **231** gym/cardio exercises.
- Previous code: 28 local visuals, 192 references to off-site image servers, 11 missing mappings. Some refs were invalid or misleading.
- Every exercise now has a **photo reference**. Images in the public-domain free-exercise-db collection are downloaded to `assets/exercise-photos/` and served from the user's own GitHub Pages site.
- `app.js` renders self-hosted images first, GitHub raw as a fallback. Detail page shows two frames when source supplies them.
- Explicitly corrected `Pec Deck Fly` to **Butterfly**, `EZ-Bar Skull Crusher` to **EZ-Bar_Skullcrusher**, `gearJumpRope` to valid `Rope_Jumping` source, and marked rare variants where sources don't show the precise form.
- A small number of niche exercises (e.g. Boxer Bounce, Incline Mountain Climber, Medicine Ball Carry) **still use a related-movement reference**, visibly labeled as such. **Do not treat these as verified exact technique photos.**
- Download script fails instead of letting GitHub receive missing or broken image assets. Audit and unit tests verify every local file.
- Data, Smart Mix, History, Recovery, Progressive Overload and user settings remain unchanged. No localStorage key changes.

## Sources and licensing

`yuhonas/free-exercise-db` – public-domain/Unlicense source images. https://github.com/yuhonas/free-exercise-db

## Run

1. Export a GymOS JSON backup from Settings.
2. Ensure repository `~/Documents/gym-source` is clean, up to date and version `4.8.4`.
3. Unzip the installer outside the repository, run `apply_patch.py <repository>`, then `python3 <repository>/scripts/sync-exercise-photos.py`.
4. Run `node scripts/audit-media.mjs .`, `npm test`, then commit/push.
