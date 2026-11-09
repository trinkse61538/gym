#!/usr/bin/env python3
"""GymOS v4.8.5 HTTPS photo downloader for macOS (verified TLS via system curl).

Rerunnable: already-valid files are reused, partial/corrupt files are replaced.
NEVER uses --insecure / -k. Requires Apple's /usr/bin/curl on macOS.
"""
import concurrent.futures
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import time
from urllib.parse import quote

root = Path(__file__).resolve().parent.parent

enumerate_script = r"""import {EXERCISES} from './data.js';
import {EXERCISE_MEDIA} from './exercise-media.js';
import {EXERCISE_LOCAL_MEDIA, EXERCISE_APPROX_MEDIA} from './exercise-extra-media.js';
const out = [];
for (const [id, x] of Object.entries(EXERCISES)) {
  const local = EXERCISE_LOCAL_MEDIA[id] || null;
  const ref = local ? null : (EXERCISE_APPROX_MEDIA[id] === false ? null : EXERCISE_MEDIA[id] || null);
  out.push({id, name:x.name, group:x.group, local, ref, approx:EXERCISE_APPROX_MEDIA[id] === true});
}
console.log(JSON.stringify(out));
"""
result = subprocess.run(['node', '--input-type=module', '-e', enumerate_script], cwd=str(root), capture_output=True, text=True)
if result.returncode:
    sys.exit('Cannot enumerate exercises:\n' + result.stderr)
entries = json.loads(result.stdout)
missing = [x['id'] for x in entries if not x['local'] and not x['ref']]
if missing:
    sys.exit('No media source for exercise IDs: ' + ', '.join(missing))
missing_local = [x['id'] for x in entries if x['local'] and not (root / x['local']).is_file()]
if missing_local:
    sys.exit('Missing local assets: ' + ', '.join(missing_local))

refs = sorted({x['ref'] for x in entries if x['ref']})
base = root / 'assets' / 'exercise-photos'
base.mkdir(parents=True, exist_ok=True)

curl = os.environ.get('GYMOS_CURL_BIN') or ('/usr/bin/curl' if Path('/usr/bin/curl').is_file() else shutil.which('curl'))
if not curl or not Path(curl).is_file():
    sys.exit('curl was not found. macOS normally provides /usr/bin/curl.')

def valid_jpeg(path):
    try:
        with path.open('rb') as fp:
            if path.stat().st_size <= 1500 or fp.read(3) != b'\xff\xd8\xff':
                return False
            fp.seek(-2, 2)
            return fp.read(2) == b'\xff\xd9'
    except (OSError, ValueError):
        return False


def pull(job):
    source_id, frame = job
    target = base / source_id / f'{frame}.jpg'
    if valid_jpeg(target):
        return (source_id, frame, 'cached', '')
    target.parent.mkdir(parents=True, exist_ok=True)
    part = target.with_name(target.name + '.part')
    escaped = quote(source_id, safe='')
    urls = [
        f'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/{escaped}/{frame}.jpg',
        f'https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/exercises/{escaped}/{frame}.jpg'
    ]
    errors = []
    for url in urls:
        try:
            part.unlink(missing_ok=True)
            completed = subprocess.run([
                str(curl), '--fail', '--location', '--silent', '--show-error',
                '--connect-timeout', '15', '--max-time', '55',
                '--retry', '2', '--retry-delay', '1',
                '--proto', '=https', '--user-agent', 'GymOS-verified-media/4.8.5',
                '--output', str(part), url
            ], capture_output=True, text=True, timeout=210)
            if completed.returncode != 0:
                raise RuntimeError((completed.stderr or f'curl exit {completed.returncode}').strip()[-220:])
            if not valid_jpeg(part):
                raise ValueError('response is not a complete JPEG')
            part.replace(target)
            return (source_id, frame, 'downloaded', '')
        except (subprocess.TimeoutExpired, OSError, RuntimeError, ValueError) as exc:
            errors.append(str(exc)[:220])
        finally:
            try:
                part.unlink(missing_ok=True)
            except OSError:
                pass
    return (source_id, frame, 'failed', ' / '.join(errors)[-360:])


jobs = [(ref, i) for ref in refs for i in (0, 1)]
print(f'Preparing {len(entries)} exercises; {len(refs)} unique public-domain exercises / {len(jobs)} photo frames.', flush=True)
print(f'Using verified HTTPS with {curl}; SSL verification is ENABLED.', flush=True)

# Fail fast on a broken Mac trust store or inaccessible network, instead of
# attempting 270 expensive downloads that are guaranteed to fail.
first_pending = next((job for job in jobs if not valid_jpeg(base / job[0] / f'{job[1]}.jpg')), None)
if first_pending is not None:
    first = pull(first_pending)
    if first[2] == 'failed':
        sys.exit('HTTPS preflight failed before batch download: ' + f'{first[0]}/{first[1]}.jpg: {first[3]}\n' + 'Check VPN/proxy/firewall and macOS certificate trust. TLS verification was not disabled.')

results = []
# Lower concurrency than the Python urllib release reduces rate-limit errors.
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    for k, row in enumerate(pool.map(pull, jobs), 1):
        results.append(row)
        if k % 30 == 0 or k == len(jobs):
            n_failed = sum(x[2] == 'failed' for x in results)
            print(f'Checked/downloaded: {k}/{len(jobs)} | failed: {n_failed}', flush=True)
failed = [row for row in results if row[2] == 'failed']
if failed:
    print(f'ERROR: {len(failed)} images could not be downloaded; NOT SAFE to push. Re-running will reuse valid photos.')
    for ref, frame, _, err in failed[:15]:
        print(f' - {ref}/{frame}.jpg: {err}')
    sys.exit(2)

report = {
    'version': '4.8.5',
    'total_exercises': len(entries),
    'local_ai_previews': sum(bool(x['local']) for x in entries),
    'hosted_photo_exercises': sum(bool(x['ref']) for x in entries),
    'variant_previews': sum(bool(x['approx']) for x in entries),
    'exactly_unmapped': 0,
    'unique_source_movements': len(refs),
    'jpg_frames': len(jobs),
    'source': 'yuhonas/free-exercise-db, Unlicense',
    'notice': 'Some images are related variants; check the named video for exact technique.',
    'exercises': entries,
}
(root / 'assets' / 'media-coverage-report.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'PASS: {len(entries)}/{len(entries)} mapped; all {len(jobs)} photos are locally present and valid.', flush=True)
