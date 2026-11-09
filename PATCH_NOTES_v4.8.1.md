# GymOS v4.8.1 — Fix Pack

Cập nhật an toàn từ commit v4.8 trên nhánh `main` của `trinkse61538/gym`.

## Sửa lỗi
1. **Thời lượng cardio:** Buổi mới lấy đúng phút của preset (15/20/30) hoặc giá trị hợp lý của từng buổi (18–27 phút). Số phút là gợi ý, **không phải kết quả thực tế**. Lịch sử và bản nháp đã có không bị tự sửa.
2. **Smart Workout Mix:** Tắt công tắc thì buổi mới giữ nguyên mẫu A/B hoặc chuyên cơ (chỉ đổi những bài máy không khả dụng). Không tự thêm bài khi mở lại bản nháp hoặc dùng nút Phối lại. Khi bật, cơ chế tự phối của v4.8 vẫn hoạt động.
3. **Phiên bản:** Đồng bộ giao diện, `package.json`, README và service-worker cache lên 4.8.1; mô tả manifest được cập nhật.
4. **Kiểm thử:** Thêm tests cho cả 3 preset, toàn bộ buổi cardio, chế độ cố định, Smart Mix và tôn trọng bản nháp thủ công. Thêm GitHub Actions kiểm tra `npm test` trên push/PR.

## Lưu ý
- Vẫn dùng khóa localStorage `gymos_local_v2`, không xóa dữ liệu cá nhân.
- Buổi đã hoàn thành và bản nháp trước đó **giữ nguyên thông số phút và bài tập**, kể cả khi trước đây có thời lượng mặc định sai. Hãy kiểm tra các bản nháp cũ và tự sửa phút thực tế trước khi lưu.
- GitHub Pages hiện chạy workflow triển khai riêng; workflow test mới **không chặn GitHub Pages** theo mặc định. Lệnh cập nhật đã chạy toàn bộ unit test trên máy Mac *trước khi push*.
- Không upload JSON nhật ký, file khám sức khỏe hay thông tin cá nhân lên repository public.
