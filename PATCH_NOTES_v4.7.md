# GymOS v4.7 — Smart Workout Mix + Progressive Overload + Recovery Planning

Bản v4.7 được xây dựa trên v4.6. Có thể cập nhật bằng cách giải nén ZIP patch đè lên repository, rồi git commit/push. Không yêu cầu cài npm khi triển khai GitHub Pages.

## 1. Smart Workout Mix
- Áp dụng cho **buổi tạ tạo mới** (Full Body A/B và các buổi chuyên nhóm cơ). Buổi đã hoàn thành, bản nháp hiện có và buổi cardio được giữ nguyên.
- Mỗi buổi mặc định có khoảng 5 bài. Giữ 2–3 bài nền tảng, chọn các bài còn lại từ cùng nhóm cơ và ưu tiên mức dễ/cơ bản. Bài phụ được thay theo chu kỳ 14 ngày và lịch sử tập, tránh lặp quá sớm.
- Tôn trọng mục **Máy phòng gym của tôi**: không tự chọn bài cần máy không được tick khi chế độ lọc máy đang bật. Nếu quá ít lựa chọn sẽ chỉ đưa ra bài khả dụng, không chèn bài sai thiết bị.
- Nút **Phối lại các bài phụ** đổi các bài tự chọn mà vẫn giữ những bài chính. Nếu bản nháp đã nhập set/rep, ứng dụng yêu cầu xác nhận trước khi xóa bản nháp đó. Không xóa nhật ký các ngày khác.
- Tắt/bật tính năng trong **Cài đặt & dữ liệu → Huấn luyện thông minh**.

## 2. Progressive Overload
- Trong từng bài tạ, app hiển thị nhận xét dựa trên nhật ký trước ngày tập.
- Cần tối thiểu **2 lần tập cùng bài**, hoàn thành ít nhất 2 set mỗi lần, rep đạt ngưỡng trên của mục tiêu, **chủ động đánh dấu kỹ thuật tốt** và RPE tối đa 7/10, cùng mức tạ, mới gợi ý tăng **một nấc tạ nhỏ nhất**. Đây là đề xuất, không tự thay kg.
- Nếu một buổi có kỹ thuật tốt nhưng chưa có đủ hai lần đạt ngưỡng, giữ kg và tăng 1 rep mỗi set đến ngưỡng trên.
- Nếu nghỉ tập trên 14 ngày, ưu tiên giảm tải trở lại. Nếu check-in đang mệt hoặc đau mỏi, không gợi ý tăng tạ.
- Mức tạ của mỗi máy có các nấc khác nhau, vì vậy app không tự đoán số kg cụ thể.

## 3. Recovery Planning
- Trước buổi tạ có **Recovery Check-in**: năng lượng (1–5), đau mỏi cơ (0–3), giấc ngủ (1–5).
- Từ số buổi sức mạnh trong 72 giờ trước và câu trả lời của bạn, ứng dụng hiển thị cảnh báo cần phục hồi, gợi ý giảm về 1 set nhẹ, chuyển cardio hồi phục, hoặc dời buổi tạ.
- **Dời buổi tạ** đánh dấu ngày đó là bỏ buổi trong lịch; phần lập lịch v4.6 tự phân phối các buổi còn lại, giữ nguyên log cũ.
- Ghi nhận chưa có set thì có thể giảm xuống 1 set; khi đã ghi rep/tick set, app không tự động cắt set để bảo toàn dữ liệu.
- Đây là quy tắc hỗ trợ tập luyện cho người mới, **không chẩn đoán sức khỏe** hay thay thế tư vấn bác sĩ. Nếu đau ngực, choáng/ngất, khó thở khác thường hoặc hồi hộp kéo dài, dừng tập và tìm hỗ trợ y tế.

## Tương thích dữ liệu
- Khóa `localStorage` giữ nguyên: `gymos_local_v2`.
- Định dạng backup JSON và `version:1` của dữ liệu cũ giữ nguyên; các trường mới là bổ sung tùy chọn.
- Không sửa buổi tập đã hoàn thành. Chỉ buổi **mới tạo sau khi cập nhật** mới tự phối bài; muốn đổi buổi đã tạo, dùng **Phối lại**.
- Nên xuất bản sao lưu JSON trước khi deploy.

## Triển khai
```bash
cd ~/Documents/gym-source
git pull --ff-only origin main
unzip -o ~/Documents/GymOS_v4_7_SmartWorkout_Recovery_PATCH.zip -d .
git add -A
git commit -m "GymOS v4.7 - Smart Workout Mix Progressive Overload Recovery"
git push origin main
```

## Kiểm thử
- `npm test`: 45 bài kiểm thử tự động khi đóng patch (bao gồm tất cả test v4.6).
- Kiểm thử giao diện bằng Chromium ở viewport 320px, 390px, 1440px: trang lịch, mở buổi, check-in, áp dụng giảm tải, không có lỗi JavaScript hoặc tràn ngang.
- Không kiểm thử trực tiếp trên iPhone vật lý. Ảnh từ web bên ngoài vẫn cần Internet.
