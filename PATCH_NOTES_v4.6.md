# GymOS v4.6 — My Gym / Equipment-Aware Training + Rare Exercise Illustrations

## Cập nhật chính

1. **Máy phòng gym của tôi:** danh sách 38 loại máy và dụng cụ chia thành 4 nhóm. Tick trực tiếp, có nút chọn nhanh các loại phổ biến, chọn tất cả và bỏ chọn. Mặc định **không lọc** cho người dùng v4.5 đã có dữ liệu; khi tick thì bật lọc.
2. **Lọc trên toàn bộ thư viện Cardio và Strength** theo thiết bị đã chọn. Trong buổi tập *mới*, GymOS tự thử bài thay thế cùng nhóm cơ để tránh chọn máy không có, và thông báo nếu không có bài thay thế. Các buổi đã lưu hoặc đang soạn dở được giữ nguyên, không tự xóa set/rep.
3. **Thêm 3 preset cardio** (vì mục số 3 người dùng bỏ dở nên triển khai theo ý tưởng đã trao đổi): hồi phục 20 phút, vận động hỗ trợ giảm mỡ 15 phút, sức bền 30 phút. Mức khởi đầu vừa sức, không coi đây là HIIT, không đưa ra ngưỡng nhịp tim bắt buộc.
4. **9 ảnh riêng mới** dạng WebP cho các bài hiếm: Bird Dog, Hip Abduction, Quadruped Leg Extension, Banded Clamshell, Lateral Band Walk, March In Place, Shadow Boxing, SkiErg và Medicine Ball Slam. Các ảnh này tạo bằng AI, được ghi rõ là *minh họa tham khảo*.
5. **Audit ảnh trước đó:** ẩn ảnh không đúng động tác của các bài đặc thù thay vì hiển thị ảnh từ bài khác. Ảnh từ free-exercise-db tiếp tục dùng khi đúng/đủ gần, biến thể gần được gắn nhãn.
6. **PWA:** cache `gymos-static-v46`, lưu thêm file module và 9 ảnh local để sử dụng offline sau khi đã tải.

## Lưu ý bảo mật dữ liệu
- Khóa localStorage không thay đổi: `gymos_local_v2`.
- Không ghi số đo hoặc hồ sơ khám sức khỏe của người dùng vào mã nguồn public.
- Thiết bị chọn được lưu trong cùng đối tượng `settings` và có trong JSON backup.
- Không tự sửa nhật ký các buổi đã hoàn thành; lịch tự thích nghi vẫn giữ nguyên.

## File patch
- `app.js`, `data.js`, `planner.mjs`, `styles.css`, `index.html`, `sw.js`
- `gym-equipment.mjs`, `exercise-extra-media.js`
- `assets/exercise-specific/*.webp` (9 file)
- `tests/cardio.test.mjs`, `tests/equipment.test.mjs`, `tests/media.test.mjs`
- `package.json` và ghi chú này

## Giới hạn và kiểm chứng
- Các hình AI không phải minh chứng cho biên độ hoặc động tác chính xác; hãy xem video kiểm chứng trước khi tập.
- Các bài hiếm chưa có ảnh nguồn đáng tin sẽ hiển thị placeholder thay vì ảnh gán sai.
- Hình ảnh public-domain `yuhonas/free-exercise-db` cần internet ở lần mở đầu. Ảnh AI mới nằm local trong `assets/`.
- Đã qua 24 bài test logic, smoke test giao diện mô phỏng desktop 1440 px và mobile 390/320 px; chưa thử trên iPhone vật lý.

## Triển khai
1. Trong app v4.5, vào Cài đặt → Xuất file JSON trước khi cập nhật.
2. Giải nén ZIP vào **gốc repo GitHub** rồi commit/push.
3. Đợi GitHub Pages deploy, mở `gym.khaitringuyen.com` khi có internet.
4. Mở **Máy phòng gym của tôi**, tick thiết bị rồi dùng nút **Cardio phù hợp** hoặc **Xem thư viện đã lọc**.
