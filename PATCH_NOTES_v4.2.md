# GymOS v4.2 – Visual Exercise Update

## Mục tiêu bản nâng cấp
- Thay cảm giác “emoji khó hình dung” bằng **hình minh hoạ nhanh** cho bài tập.
- Bổ sung **hướng dẫn thở rõ hơn** ngay trong thẻ bài tập, chi tiết bài tập và buổi tập.
- Chuẩn hoá lại tên hiển thị mặc định thành **Khai Trí** (nếu từng lưu nhầm “Khải Trí” sẽ được sửa).

## Điểm mới chính
1. **Preview hình minh hoạ cho bài tập**
   - Thư viện bài tập nay có ảnh minh hoạ nhanh.
   - Trang chi tiết bài tập có ảnh lớn hơn để hình dung posture trước khi bấm video.
   - Thẻ bài tập trong buổi tập cũng có preview trực quan.

2. **Hướng dẫn thở nâng cấp**
   - Mỗi bài có block “Cách thở đúng”.
   - Strength: nhắc hít vào / gồng bụng / nhả hơi ở pha gắng sức / tránh nín thở.
   - Cardio: nhắc nhịp thở đều, talk test và thả lỏng cuối buổi.

3. **Cá nhân hoá tên**
   - Default nickname: **Khai Trí**.
   - Placeholder settings: “Khai Trí hoặc Henry”.
   - Tự sửa các bản lưu cũ nếu nickname là “Khải Trí”.

4. **Làm mới storage key**
   - Bản này dùng localStorage key mới để tránh đè data của bản cũ trong lúc test.

## File được thay đổi
- `app.js`
- `styles.css`
- `assets/preview-*.png`

## Ghi chú
- Bản này ưu tiên **hình minh hoạ tĩnh** vì nhẹ, tải nhanh và ổn định hơn GIF.
- Nếu muốn, bước tiếp theo có thể làm **GIF / sprite mini** cho 8–12 bài cốt lõi nhất.
