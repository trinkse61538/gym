# GymOS — Personal Training PWA

Web app responsive và PWA tiếng Việt, dành cho người mới tập gym, có thể triển khai ngay qua GitHub Pages và `gym.khaitringuyen.com`.

## Những gì app làm được

- **Lịch tập tự điều chỉnh:** 2 buổi sức mạnh Full Body A / B, 1 buổi đi bộ máy, ưu tiên giữ ít nhất 48 giờ giữa các buổi toàn thân. Nếu đánh dấu *Bỏ buổi*, các buổi chưa tập được dời trong tuần; nếu không đủ chỗ, để lại buổi chưa xếp và tiếp tục xoay A/B vào tuần kế tiếp. **Không tự dồn hai buổi tạ liền nhau.**
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
