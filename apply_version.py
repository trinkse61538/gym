from pathlib import Path
import json
p=Path('index.html')
s=p.read_text(encoding='utf-8')
if '4.8.4' in s:
    print('Giao diện đã ghi v4.8.4')
elif '4.8.3' in s:
    p.write_text(s.replace('4.8.3','4.8.4'),encoding='utf-8')
    print('Đã cập nhật nhãn phiên bản ngay trong index.html mà không thay file gốc')
else:
    raise SystemExit('index.html không có nhãn v4.8.3; dừng để tránh sửa nhầm')
