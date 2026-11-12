# GymOS 5.1 — Đồng bộ sức khỏe hằng ngày

Trạng thái bàn giao: mã nguồn và 68 kiểm thử đã hoàn thành. API CHƯA được triển khai vào tài khoản Cloudflare của bạn, iPhone CHƯA được cấu hình, chưa có dữ liệu thật để xác nhận đồng bộ đầu cuối. Không đổi DNS của gym.khaitringuyen.com. Website tiếp tục chạy GitHub Pages.

Luồng: Huawei Watch GT 4 → Huawei Health → Apple Health → Health Auto Export trên iPhone → Cloudflare Worker + D1 → trang Sức khỏe trong GymOS.

## 1. Triển khai API một lần trên Mac

Cần Node.js 22 trở lên và tài khoản Cloudflare. D1 lưu dữ liệu riêng trong tài khoản bạn; không đưa token hay file xuất Health vào GitHub. Kiểm tra hạn mức/gói Cloudflare trong tài khoản trước khi bật dịch vụ trả phí.

Sau khi áp dụng patch vào Documents/gym-source:

```bash
cd "$HOME/Documents/gym-source/health-sync"
npx wrangler@4 login
npx wrangler@4 d1 create gymos-health
```

Lệnh cuối in ra `database_id`. Mở file cấu hình:

```bash
open -e wrangler.toml
```

Thay đúng `REPLACE_WITH_D1_DATABASE_ID` bằng ID vừa nhận; lưu file. ID database không phải mật khẩu. Giữ nguyên binding `DB`. Nếu đã có database tên này, lấy ID trong Cloudflare Dashboard → D1, không xóa database cũ.

Chạy:

```bash
npx wrangler@4 d1 execute gymos-health --remote --file=./schema.sql
npx wrangler@4 deploy
npx wrangler@4 secret put INGEST_TOKEN
npx wrangler@4 secret put READ_TOKEN
```

Mỗi lần secret put, dán một mật khẩu ngẫu nhiên riêng tối thiểu 32 ký tự từ trình quản lý mật khẩu (khuyến nghị 48 ký tự). Hai khóa phải khác nhau. Không nhập khóa vào code, lệnh git, URL hay gửi lại trong chat. Lưu chúng trong trình quản lý mật khẩu:
- INGEST_TOKEN chỉ dùng trên iPhone để gửi.
- READ_TOKEN chỉ dùng trên trang GymOS để xem.

Worker chặn mọi yêu cầu dữ liệu khi chưa có khóa hợp lệ. Ghi lại URL HTTPS dạng `https://gymos-health-sync.TEN-CUA-BAN.workers.dev` mà lệnh deploy trả về. Chưa thấy workers.dev thì bật Workers subdomain theo hướng dẫn Wrangler/tài khoản Cloudflare. Không thay CNAME domain GymOS.

## 2. Cấu hình iPhone

Cài **Health Auto Export** của HealthyApps. Tự động REST API nằm trong Premium, không phải Basic. Tài liệu công bố dùng thử đầy đủ 7 ngày; giá US là 6,99 USD/năm hoặc 24,99 USD trọn đời, giá Việt Nam xem ngay trong màn hình mua. Chỉ mua sau khi kiểm tra luồng thật hoạt động.

Trước tiên mở Huawei Health, đợi đồng bộ GT 4. Vào Sức khỏe kiểm tra các chỉ số đã thực sự xuất hiện (cấp quyền không có nghĩa mọi chỉ số đều được Huawei ghi sang). Cấp Health Auto Export quyền ĐỌC các chỉ số muốn chia sẻ.

Health Auto Export → Export → Automated → New Automation:

| Mục | Chọn |
|---|---|
| Name | GymOS Daily |
| Automation Type | REST API |
| URL | URL Worker ở bước 1, thêm `/ingest` |
| HTTP Headers | Key `Authorization`, Value `Bearer ` rồi nối INGEST_TOKEN (có một dấu cách) |
| Data Type | Health Metrics |
| Export Format / Version | JSON / Version 2 |
| Select Health Metrics | Step Count, Active Energy, Heart Rate, Resting Heart Rate, Sleep Analysis, Weight/Body Mass, Apple Exercise Time nếu có |
| Units | count; kcal; count/min; hr; kg; min tương ứng |
| Summarize Data | ON — bắt buộc |
| Time Grouping | Days / Daily — bắt buộc |
| Date Range | Previous 7 Days |
| Batch Requests | OFF |
| Sync Frequency | Every 1 Day |
| Enabled | ON, sau đó Update |

Đặt múi giờ iPhone Việt Nam. Previous 7 Days gửi 7 ngày đã kết thúc, nên dữ liệu hôm nay xuất hiện từ ngày mai; cách này giúp bù ngày bị lỡ và tránh tổng chưa đủ ngày. Mỗi cặp ngày/chỉ số được cập nhật thay thế, không cộng lại. Không đổi sang Since Last Sync vì dữ liệu từng phần có thể ghi đè tổng ngày.

Preferred Sources: ưu tiên Huawei Health cho dữ liệu từ GT 4. Chọn một nguồn phù hợp cho mỗi chỉ số; cân nặng có thể từ nguồn nhập tay/cân khác. Không cộng số bước của Huawei với iPhone thủ công. So sánh kết quả xuất với Apple Health; nếu chênh, kiểm tra nguồn. Dữ liệu không được chia sẻ sang Apple Health sẽ hiện “Chưa có”. Không có API Huawei trực tiếp trong bản này.

Bật Background App Refresh cho Health Auto Export. iOS chỉ cho đọc Health khi máy mở khóa và không bảo đảm chạy nền đúng giờ; Low Power Mode có thể trì hoãn. Có thể đặt reminder 20:30 hoặc Shortcuts “Run Automation” để hỗ trợ, nhưng reminder không chứng minh đã đồng bộ. Mở app khi cần bù dữ liệu. Không cần mở GymOS để API nhận dữ liệu.

## 3. Kiểm tra lần đầu và sử dụng

1. Trong automation chọn Manual Upload, chọn hôm qua đến hôm qua, Begin Export. Xem Activity Logs: cần HTTP 200.
2. Mở `https://gym.khaitringuyen.com/health.html` hoặc Cài đặt → Sức khỏe · Đồng bộ GT 4.
3. Nhập URL gốc Worker (KHÔNG có /ingest) và READ_TOKEN. Chọn “Nhớ kết nối” chỉ trên máy cá nhân. Mỗi trình duyệt/thiết bị cần kết nối riêng.
4. Chọn ngày hôm qua, đối chiếu số bước/giấc ngủ với Apple Health. Gửi lại lần nữa: số liệu phải giữ nguyên, không tăng gấp đôi.
5. Đóng GymOS. Ngày tiếp theo mở lại: kiểm tra “API nhận lần cuối” và “Ngày dữ liệu mới nhất” để xác nhận chạy tự động thật.

Trang lấy lại dữ liệu mỗi 5 phút khi đang mở; điều này không kích hoạt iPhone gửi dữ liệu. Cảnh báo nếu API hơn 36 giờ chưa nhận. Từng chỉ số thiếu vẫn hiện “Chưa có”, không biến thành số 0. Giữ toàn bộ lịch sử trong D1, chỉ tải 90 ngày gần nhất ra màn hình. Dữ liệu sức khỏe không tự tick bài, không ghi đè lịch sử/nhật ký/cân nặng nhập tay và không tự tăng giảm tạ.

## 4. Xử lý lỗi và quản lý dữ liệu

- 401: sai khóa hoặc thiếu `Bearer `; kiểm tra dùng đúng khóa ghi trên iPhone, khóa đọc trên GymOS.
- 400: kiểm tra JSON V2, Summarize ON, Days, đơn vị đúng, không chọn Workouts. Bản này đồng bộ chỉ số ngày; chưa nhập danh sách buổi tập/route GPS.
- 413: xuất tối đa 7 ngày, chỉ chọn 7 chỉ số hỗ trợ.
- 503: schema chưa tạo hoặc binding DB/database_id sai.
- Trang lỗi kết nối: kiểm tra URL HTTPS, CORS chỉ cho phép https://gym.khaitringuyen.com. Nếu dùng domain khác, sửa ALLOWED_ORIGIN trong wrangler.toml và deploy lại.
- Dữ liệu đến chậm: mở Huawei Health, mở khóa máy và chạy Manual Upload trong Health Auto Export; kiểm tra Background App Refresh.
- Ngắt kết nối trên trang chỉ xóa khóa lưu tại trình duyệt, không xóa máy chủ. Tắt Enabled trên iPhone để ngừng gửi. Đổi secret bằng `wrangler secret put` để thu hồi khóa cũ; cập nhật thiết bị tương ứng.
- Muốn xóa dữ liệu đã lưu: tắt automation rồi dùng Cloudflare D1 Console, chạy `DELETE FROM daily;`. Đây là thao tác xóa toàn bộ dữ liệu sức khỏe đồng bộ; không ảnh hưởng lịch tập localStorage. Chỉ chạy khi bạn thực sự muốn xóa.
- Khóa đọc lưu localStorage nếu chọn Nhớ kết nối; ai dùng cùng profile trình duyệt có thể xem dữ liệu. Mặc định không lưu khóa qua lần tải lại. Không đưa khóa vào bản backup/commit.

## Kiểm chứng kỹ thuật

68 kiểm thử Node đã qua, bao gồm xác thực, phân quyền đọc/ghi, CORS, định dạng dữ liệu, retry/upsert, giới hạn payload. Chưa kiểm thử trình duyệt trực quan, chưa kiểm thử Cloudflare thật hoặc dữ liệu GT 4 thật. Cần hoàn thành checklist bước 3 trước khi coi là đã kích hoạt.

Tài liệu nguồn:
- https://help.healthyapps.dev/en/health-auto-export/automations/rest-api/
- https://help.healthyapps.dev/en/health-auto-export/export-format/health-metrics/
- https://help.healthyapps.dev/en/health-auto-export/purchases/pricing/
- https://developers.cloudflare.com/d1/get-started/
