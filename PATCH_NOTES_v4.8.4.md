# GymOS v4.8.4 — Cardio photo upgrade

Thay 8 thẻ bằng hình AI photorealistic có người thật và tư thế dễ nhận diện; không dùng hình que. Hình minh họa vẫn cần video để kiểm tra chuyển động và kỹ thuật.

Ảnh mới: bwStepTouch, bwWalkJacks, bwSideSteps, bwHeelDig, bwKneeLift, bwButtKick, bwLateralShuffle, gearBandPunch

Chưa có ảnh khớp chính xác (ẩn người que cũ, hiển thị thông báo thay thế): bwCalfReach, bwToeReach, bwFastFeet, bwBoxerBounce, bwSkaterStep, bwInclineClimber, gearBandMarch, gearConeShuffle, gearMedCarry, gearPlateMarch, gearKettleMarch, gearBoxLateral

Giữ nguyên `gymos_local_v2` và các tính năng đã có; Service Worker v484.

**Triển khai:** Giải nén ZIP vào repo, chạy `python3 apply_version.py`, kiểm thử và push. Không bao gồm `index.html` để tránh ghi đè giao diện mới trên GitHub.
