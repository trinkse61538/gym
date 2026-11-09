# GymOS v4.8.2 — Exercise Library Media Fixes

Các thay đổi xem trong [PATCH_NOTES_v4.8.2.md](PATCH_NOTES_v4.8.2.md). Sửa thêm thư viện bài tập: bổ sung ảnh minh hoạ cho các bài hiếm, sửa bài bị trùng/sai ảnh và giảm các trường hợp thiếu hình.

---

# GymOS v4.7

**Patch notes:** [PATCH_NOTES_v4.7.md](PATCH_NOTES_v4.7.md)

# GymOS v4.1 — Premium Dashboard (211 bài tập)

Bản v4.1 là cập nhật trên v4.0: có ảnh vận động viên thật trong dashboard, logo/biểu tượng mới, sidebar/icon chuyên nghiệp, 4 KPI lấy từ nhật ký đã lưu, biểu đồ tần suất tập 8 tuần, 3 lối vào chương trình tập, 4 theme (lime/purple/orange/cyan) và nút chuyển màu nhanh ở header.

**Không có dữ liệu luyện tập giả.** Khi chưa có buổi tập sẽ thấy số 0; kcal không được tính giả. Giao diện được thử ở các kích thước 320, 390, 768, 1080, 1440px.

**Riêng tư:** nhật ký/set/rep/buổi tập vẫn lưu trên thiết bị trong `gymos_local_v1`; không có thông tin bệnh án nhúng vào mã nguồn. Hãy sao lưu JSON trước khi nâng cấp.

## Cập nhật repository hiện tại

```bash
cd ~/Documents/gym-source
git pull --ff-only origin main
unzip -o ~/Documents/GymOS_v4_1_PremiumDashboard_PATCH.zip -d .
git add -A
git commit -m "GymOS v4.1 premium dashboard with athlete hero and themes"
git push origin main
```

Nếu sử dụng bản ZIP đầy đủ thì thay tên ZIP trong lệnh giải nén. GitHub Pages sẽ tự triển khai khi nhánh main cập nhật. Nếu PWA còn giữ giao diện cũ, mở bản HTTPS trong trình duyệt có mạng, tải lại, sau đó đóng mở ứng dụng đã cài.

## Cấu trúc v4.1

- `assets/hero-athlete.webp`, `assets/hero-athlete-mobile.webp`: ảnh nền từ bộ thiết kế này; không phải ảnh chân dung người dùng.
- `assets/icon.svg`, `assets/icon-192.png`, `assets/icon-512.png`: bộ logo/PWA icon mới.
- `index.html`, `styles.css`, `app.js`: brand, dashboard, theme UI.
- `sw.js`: cache `gymos-static-v41` bao gồm ảnh hero, có fallback offline.
- `manifest.webmanifest`: tên hiển thị PWA.

## Lưu ý về báo cáo

- Số buổi tuần = số ngày có nhật ký hoàn thành trong tuần đang xem.
- Phút cardio/giờ tập/sets được cộng từ các bản ghi thực tế.
- Biểu đồ 8 tuần không có dữ liệu sẽ hiển thị số 0; không tự tạo xu hướng tăng hoặc số kcal.
- Chỉ sử dụng đây làm công cụ hỗ trợ luyện tập, không phải chỉ định y khoa.

---

# GymOS v4.0 — Brand Refresh + Theme Switcher (211 bài tập)

Bản v4.0 nâng cấp trực tiếp từ v3.0 và tương thích dữ liệu `localStorage` / backup JSON hiện có.

Điểm mới: làm mới toàn bộ brand/header/sidebar theo hướng mạnh hơn, bớt cảm giác “AI demo”, đồng thời thêm bộ đổi màu giao diện (xanh lá · đen, tím · đen, cam · đen, xanh ngọc · đen).

**Mới trong v3:**
- **36 lựa chọn cardio**, chia thành **12 máy cardio**, **12 bodyweight không cần dụng cụ**, **12 bài dùng dụng cụ phòng gym**. Cùng 175 bài khác từ v2, tổng cộng **211 bài**.
- **6 mẫu buổi cardio**: đi bộ máy, xe đạp, elliptical, rowing nhẹ, circuit bodyweight không nhảy, circuit với dụng cụ. Có thể thêm/bỏ bài cardio theo máy/dụng cụ thực tế, tối đa 6 bài/buổi.
- Mỗi bài có cách thực hiện 3 bước, thiết bị, cơ/vùng vận động, nhịp thở, điều cần tránh, bài thay thế và **link tìm kiếm video theo tên bài** (không phải video đã thẩm định). Bài nâng cao được đánh dấu rõ và không tự xuất hiện trong mẫu cho người mới.
- Theo dõi **phút tập, RPE 0–10, nhịp/tốc độ, độ dốc, mức kháng lực và thông số circuit khi phù hợp**. Tích hoàn thành từng bài, ghi chú và nhật ký; thống kê tổng phút cardio.
- **Lịch tuần:** hoàn thành *bất kỳ* cardio nào (C/D/E/F/G/H) sẽ tính vào ô cardio tuần, không tự bắt bạn tập thêm buổi treadmill. Buổi cardio không bị tính nhầm vào 2 buổi tạ. Lưu dữ liệu trên thiết bị và có xuất/nhập JSON.
- **PWA responsive** và hỗ trợ offline đối với nội dung đã cache. Video và liên kết bên ngoài cần Internet.

### Lưu ý về cường độ và an toàn

Cardio **không chỉ là bodyweight**: máy tập, vận động không tạ và circuit dụng cụ đều có thể rèn sức bền tim mạch tùy cách thực hiện và mức gắng sức. Với người ít tập, bắt đầu 1–2 buổi × 15–25 phút, RPE khoảng 3–4/10 hoặc theo *talk test*, vẫn nói được trọn câu. Tăng thời lượng trước khi tăng cường độ, hướng tới 150 phút aerobic vừa mỗi tuần theo khả năng và hướng dẫn y tế phù hợp.

Nếu từng có vấn đề về nhịp tim, hen suyễn hoặc triệu chứng khi vận động, nên trao đổi với bác sĩ về mức tập phù hợp trước khi tăng cường độ, đặc biệt với bài sức bền mạnh/HIIT. Dừng khi đau ngực, choáng, khó thở bất thường, hồi hộp hoặc tim đập không đều; tìm hỗ trợ y tế khi cần. Chưa nên tự chọn battle rope/sled/jump rope để tập mạnh khi chưa làm quen.

### Nâng cấp từ repository đã tồn tại (Mac Terminal)

1. Trên GymOS phiên bản đang dùng, vào **Cài đặt & dữ liệu → Xuất JSON** để sao lưu.
2. Tải ZIP v3 và đặt ở `~/Documents/`, ví dụ `GymOS_PWA_v3_Cardio_Endurance_GitHubReady.zip`.
3. Trong Terminal:

```bash
cd ~/Documents/gym-source
git pull --ff-only origin main
unzip -o ~/Documents/GymOS_PWA_v3_Cardio_Endurance_GitHubReady.zip -d .
git add -A
git commit -m "GymOS v3 - cardio endurance library"
git push origin main
```

4. Chờ GitHub Pages deploy, mở `gym.khaitringuyen.com` bằng HTTPS, tải lại trang một lần khi có mạng; PWA có thể cần mở lại sau cập nhật.

**Quan trọng:** ZIP chứa các file ngay thư mục gốc, không lồng thư mục `gym-os-v3/`. Không đưa PDF bệnh án hoặc dữ liệu tập luyện xuất ra dưới dạng JSON lên repository public.

### Kiểm thử

Chạy `npm test` (Node 20+): kiểm thử bộ dữ liệu và thuật toán lịch. `python3 -m http.server 8000` để chạy local, không cần build.

---

# GymOS — Personal Training PWA

Web app responsive và PWA tiếng Việt, dành cho người mới tập gym, có thể triển khai ngay qua GitHub Pages và `gym.khaitringuyen.com`.

## Những gì app làm được

- **Lịch tập tự điều chỉnh:** 2 buổi sức mạnh Full Body A / B, 1 buổi cardio linh hoạt (mặc định đi bộ máy), ưu tiên giữ ít nhất 48 giờ giữa các buổi toàn thân. Nếu đánh dấu *Bỏ buổi*, các buổi chưa tập được dời trong tuần; nếu không đủ chỗ, để lại buổi chưa xếp và tiếp tục xoay A/B vào tuần kế tiếp. **Không tự dồn hai buổi tạ liền nhau.**
- **Thư viện bài tập:** chỉ dẫn tiếng Việt theo từng bước, cách thở, lỗi thường gặp, set/rep và nghỉ; mở đường dẫn video hoặc minh họa có chuyển động, chọn bài thay thế.
- **Nhật ký:** tick set, ghi rep và kg, lưu thời gian tập, mức gắng sức, ghi chú, xem lại/sửa/xóa buổi. Có đồng hồ nghỉ set.
- **Treadmill:** tuần làm quen 5' ở 3–3,5 km/h dốc 0%; 10–15' ở 3,8–4,5 km/h dốc 0–1%; 5' ở 2,8–3,2 km/h dốc 0%. Khi đã có ít nhất 3 buổi cardio và đã trải qua 14 ngày mới hiển thị pha nâng dần (4,2–5 km/h, dốc 1–2%). Đây là **gợi ý**, giảm ngay khi cảm thấy không phù hợp.
- **Thống kê:** số buổi mỗi tuần, biểu đồ cân nặng, vòng eo tùy chọn, ghi mục tiêu.
- **PWA:** manifest, Service Worker, biểu tượng và giao diện cho máy tính/điện thoại. Có thể chạy offline khi app đã được cache; **video bên ngoài cần Internet**.
- **Riêng tư:** lưu `localStorage` trên chính trình duyệt, không dùng backend hoặc analytics; tải/xuất JSON để sao lưu và chuyển thiết bị.

## Khởi chạy nhanh

Không có bước build, không cần `npm install`.

```bash
cd gym-os
python3 -m http.server 8000
```

Mở `http://localhost:8000` trên máy phát triển. Nên mở qua server HTTP thay vì `file://` do app sử dụng JavaScript modules và PWA. Có thể dùng `npm test` (cần Node 20+).

## Đưa lên GitHub Pages với tên miền riêng

1. Tạo GitHub repository mới, ví dụ `gym` (khuyến nghị public để GitHub Pages hoạt động với tài khoản thông thường).
2. Giải nén bản ZIP và đưa **các file bên trong thư mục `gym-os/` vào ngay thư mục gốc repo** (`index.html`, `app.js`, `data.js`, `sw.js`, v.v.), không lồng thêm một thư mục `gym-os`.
3. Trong Terminal tại thư mục mã nguồn:

```bash
git init
git add .
git commit -m "Launch GymOS responsive PWA"
git branch -M main
git remote add origin https://github.com/trinkse61538/gym.git
git push -u origin main
```

Nếu đã tạo repo/remote rồi, đừng chạy `git init` hoặc `git remote add` lần nữa; chỉ cần `git add . && git commit -m "Update GymOS" && git push`.

4. GitHub repo → **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, `main` / `/(root)` → Save. Trong **Custom domain**, nhập `gym.khaitringuyen.com`; repo đã có sẵn file `CNAME`.
5. Tại DNS nơi quản lý `khaitringuyen.com`, tạo bản ghi:

   - Type: `CNAME`
   - Host/Name: `gym`
   - Target/Value: `trinkse61538.github.io`

   Nếu `gym` đang có A/AAAA/CNAME khác, xử lý xung đột trước. Sau khi GitHub cấp chứng chỉ, bật **Enforce HTTPS** để PWA hoạt động ổn định.

6. Trên Android: Chrome → menu ⋮ → **Install app** / **Add to Home screen**. Trên iPhone: Safari → **Share** → **Add to Home Screen**.

**Lưu ý:** Chưa có repository nào được tạo hoặc triển khai hộ. `CNAME` chỉ khai báo tên miền, bạn vẫn cần cập nhật DNS và bật Pages.

## Quy tắc an toàn và giới hạn

- Đây là mẫu chương trình rèn luyện sức khỏe, không phải toa tập điều trị hay hướng dẫn chẩn đoán. Nếu có tiền sử vấn đề nhịp tim, hen suyễn, huyết áp chưa kiểm soát hoặc triệu chứng khi gắng sức, cần hỏi bác sĩ trước khi tăng cường độ. Dừng nếu đau ngực, ngất/choáng, khó thở bất thường hoặc đánh trống ngực kéo dài.
- Tập tạ còn dự trữ khoảng 2–3 lần lặp, thở ra khi nâng/đẩy/kéo và hít vào khi hạ, tránh nín thở. Nên nhờ nhân viên gym trực tiếp hướng dẫn chỉnh máy lần đầu.
- Cardio nên giữ mức có thể trò chuyện bằng câu đầy đủ (*talk test*). Tốc độ/độ dốc phụ thuộc thể lực, không có một con số đúng cho tất cả.
- Không tự dùng testosterone hoặc anabolic steroid khi mong muốn cải thiện sinh sản. Tập thể dục chỉ là một phần của lối sống khỏe, không bảo đảm tăng khả năng thụ thai.
- Không upload PDF bệnh án hoặc ảnh X-quang vào repository public. Repo không chứa các hồ sơ sức khỏe đã cung cấp.
- Khi xóa browser storage, đổi thiết bị, xóa app hoặc chạy trên domain khác, dữ liệu **không tự đồng bộ**. Nên xuất JSON thường xuyên từ **Cài đặt & dữ liệu**. Không nên dùng app này như hệ thống lưu trữ hồ sơ y tế.
- Mỗi tài khoản trình duyệt có dữ liệu riêng; nếu muốn đồng bộ nhiều thiết bị an toàn cần xây backend + đăng nhập ở phiên bản sau.

## Nguồn tham khảo

- American Heart Association — Resistance and Strength Training: https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/strength-and-resistance-training-exercise
- CDC — Measuring Physical Activity Intensity: https://www.cdc.gov/physical-activity-basics/measuring/index.html
- University of Utah Health — Treadmill Workouts: https://healthcare.utah.edu/healthfeed/2023/01/treadmill-workouts-how-get-started
- EAU — Male Infertility, lifestyle: https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/male-infertility
- PureGym — equipment how-to videos: https://www.puregym.swiss/en/lets-get-started-equipment/
- StrengthLog — exercise demonstrations: https://www.strengthlog.com/exercise-directory/


## Bản phát hành public-safe

- Bản này sử dụng số đo mẫu (170 cm, 70 kg, mục tiêu 68 kg), không điền sẵn số đo hoặc tiền sử sức khỏe riêng. Hãy mở **Cài đặt & dữ liệu** để nhập số đo đúng của mình sau khi triển khai.
- Website GitHub Pages và nội dung repository public có thể được người khác xem. Nhật ký tập thực tế chỉ lưu trong localStorage của trình duyệt mà bạn sử dụng, không tự đồng bộ.


## GymOS v2.0 — Muscle library and focused workouts

- New `catalog.js`: 8 main muscle groups × 20 distinct exercise options (160 additional movements), plus the original library. Each has Vietnamese setup, execution, breath, caution, equipment, primary/secondary muscles, difficulty and alternatives.
- Video buttons for new movements open an exercise-specific YouTube **search results** page; these are not verified direct video endorsements.
- Select any day of the week → one of 8 focused sessions (chest, back, shoulders, legs, glutes, biceps, triceps, core), or keep Full Body A/B and treadmill.
- Customize an active workout by adding/removing movements, up to 8 exercises; 4–6 suggested for beginners. Session choices are stored in its draft/log and preserved in backup JSON.
- A completed focused resistance session counts toward the two weekly strength sessions; the adaptive planner does not automatically pile two additional Full Body sessions on top. Recommended strength days keep at least 48h spacing.
- Service Worker precaches `catalog.js` with cache v3. After deployment refresh once with a network connection.
- Users with cardiovascular/respiratory history should check with their clinician before increasing training intensity. All new movements are library options, not a recommendation to perform 20 in one workout.


## v4.7 — Smart Training Engine

Mã nguồn `workout-intelligence.mjs` bổ sung Smart Workout Mix (bài chính ổn định + xoay bài phụ theo 14 ngày, có xét thiết bị), Progressive Overload thận trọng (chỉ đề xuất khi đủ bằng chứng từ set/rep + form tốt + RPE), và Recovery Check-in (tự ghi năng lượng/đau cơ/giấc ngủ, giảm set hoặc dời ngày). Nhật ký và backup v4.6 được giữ nguyên.
