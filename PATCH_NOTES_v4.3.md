# GymOS v4.3 — Exact exercise pictures and mobile layout

## Đã sửa
- **Sai hình**: ảnh deadlift không còn đại diện cho Lat Pulldown hoặc Seated Cable Row. Ánh xạ ảnh theo `exercise ID` riêng, không dựa vào nhóm cơ.
- **Cắt ảnh mobile**: dùng `object-fit: contain`; ảnh không crop phần đầu, chân hay thiết bị.
- **Ảnh tư thế**: trang chi tiết hiển thị hai frame BẮT ĐẦU / KẾT THÚC và có thể chạm để phóng to trên trình duyệt.
- **Khoảng trống lớn**: bỏ `height:100%` và `margin-top:auto` trên card thư viện khi mobile.
- **Không có hình đúng**: hiển thị nhãn 'CHƯA CÓ ẢNH ĐÚNG', không dùng ảnh sai kỹ thuật.
- **Tải ảnh**: dùng ảnh từ yuhonas/free-exercise-db, thử raw GitHub rồi jsDelivr nếu mạng chặn GitHub raw. Hình ngoài mạng cần Internet; ứng dụng offline vẫn đọc được hướng dẫn bằng chữ.
- **Cập nhật cache PWA**: service worker v43 để nhận JS/CSS mới.

## Độ phủ
Bản này ánh xạ trực tiếp 138/211 bài tập. Những bài chưa có ảnh đúng sẽ hiện placeholder theo đúng tên/thiết bị. Các bài giống nhau trong thư viện (ví dụ bài gốc và bản chuyên nhóm cơ) có thể dùng lại cùng cặp ảnh. Những biến thể máy không tương ứng chính xác không cố gán ảnh gần giống.

## An toàn dữ liệu
Giữ nguyên `gymos_local_v2` của v4.2; không cần import lại JSON chỉ để thay ảnh. Vẫn nên xuất bản sao lưu trước khi nâng cấp.

## Nguồn ảnh và quyền dùng
Ảnh từ https://github.com/yuhonas/free-exercise-db — dự án công bố ảnh và JSON dưới Unlicense (public domain). Có liên kết nguồn trong README. Không tích hợp media ExerciseDB/Gym Visual có tranh chấp giấy phép.

## File patch
`app.js`, `styles.css`, `exercise-media.js`, `sw.js`, `index.html`, `README.md`, `PATCH_NOTES_v4.3.md`.
