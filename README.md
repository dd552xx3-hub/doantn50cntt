
✈️ 50CNTT1 TRAVEL - Hệ Thống Quản Lý & Đặt Tour Du Lịch

License: MIT Firebase Tailwind CSS

50CNTT1 Travel là một ứng dụng web hiện đại dành cho các đơn vị lữ hành, cho
phép người dùng khám phá các hành trình du lịch khắp Việt Nam, thực hiện đặt
tour trực tuyến và quản lý hành trình một cách dễ dàng.

🌟 Tính Năng Nổi Bật

👤 Dành cho Khách hàng

  - Khám phá điểm đến: Giao diện đẹp mắt, hiển thị các điểm đến nổi bật theo
    vùng miền.
  - Tìm kiếm & Lọc thông minh: Tìm kiếm tour theo tên hoặc lọc nhanh theo loại
    hình (Nghỉ dưỡng, Khám phá, Văn hóa).
  - Giỏ hàng (Cart): Quản lý danh sách các tour đã chọn một cách trực quan.
  - Quy trình thanh toán (Checkout): Quy trình 3 bước chuyên nghiệp (Thông tin
    \rightarrow Thanh toán \rightarrow Xác nhận).
  - Hệ thống tài khoản: Đăng ký, Đăng nhập và quản lý hồ sơ cá nhân.
  - Đa ngôn ngữ: Tích hợp Google Translate API để hỗ trợ khách du lịch quốc tế.
  - Thời tiết thời gian thực: Tích hợp OpenWeatherMap API để cập nhật thời tiết
    tại các điểm đến.

🛡️ Dành cho Quản trị viên (Admin)

  - Dashboard Tổng quan: Biểu đồ thống kê (Chart.js) về tỉ lệ trạng thái đơn
    hàng.
  - Quản lý Tour (CRUD): Thêm, sửa, xóa và cập nhật danh mục tour một cách nhanh
    chóng.
  - Quản lý Đơn hàng: Theo dõi và thay đổi trạng thái các đơn đặt hàng của
    khách.
  - Quản lý Thành viên: Xem danh sách người dùng đã đăng ký trên hệ thống.
  - Bảo mật: Phân quyền truy cập dựa trên Email và Role trong database.

🛠 Công Nghệ Sử Dụng

🌐 Frontend

  - HTML5 & CSS3: Xây dựng cấu trúc và giao diện.
  - Tailwind CSS: Framework CSS để thiết kế giao diện hiện đại, responsive
    (tương thích mọi thiết bị).
  - JavaScript (ES6+): Xử lý logic phía client, tương tác DOM và gọi API.
  - Chart.js: Vẽ biểu đồ thống kê trực quan cho Admin.

☁️ Backend & Database (BaaS)

  - Firebase Authentication: Quản lý đăng nhập/đăng ký người dùng.
  - Cloud Firestore: Cơ sở dữ liệu NoSQL thời gian thực (Realtime Database).

🔌 API bên thứ ba

  - OpenWeatherMap API: Hiển thị thời tiết thực tế.
  - Google Translate API: Hỗ trợ đa ngôn ngữ.

🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

1.  Clone dự án:

    git clone https://github.com/dd552xx3-hub/doantn50cntt.git

2.  Mở dự án:

      - Bạn không cần cài đặt môi trường phức tạp. Chỉ cần mở file index.html
        bằng trình duyệt (Chrome, Edge, Firefox) để bắt đầu trải nghiệm.
      - Lưu ý: Để các tính năng Firebase hoạt động tốt nhất, nên sử dụng một
        Local Server (như Live Server trong VS Code).

3.  Cấu hình Firebase (Dành cho lập trình viên):

      - Thay thế firebaseConfig trong các file HTML bằng thông tin dự án
        Firebase của riêng bạn để quản lý dữ liệu riêng.

📂 Cấu Trúc Thư Mục Chính

├── assets/             # Chứa hình ảnh, icon (nếu có)
├── index.html          # Trang chủ
├── destinations.html   # Trang khám phá điểm đến
├── tours.html          # Danh sách tất cả các tour
├── tour-detail.html    # Chi tiết từng tour
├── cart.html           # Giỏ hàng
├── checkout.html       # Trang thanh toán
├── admin.html          # Trang quản trị tổng quát
├── login.html          # Trang đăng nhập
├── register.html      # Trang đăng ký
└── profile.html        # Trang hồ sơ cá nhân

👤 Tác giả

  - Sinh viên thực hiện: Nhóm 50CNTT1
  - Đề tài: Đồ án môn học/tốt nghiệp - Hệ thống quản lý du lịch.

Dự án được thực hiện với mục tiêu ứng dụng các công nghệ Web hiện đại để giải
quyết bài toán thực tế trong ngành du lịch.
