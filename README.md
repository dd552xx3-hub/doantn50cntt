

🌊 50CNTT1 TRAVEL - Hệ Thống Quản Lý & Đặt Tour Du Lịch

![alt text](https://img.shields.io/badge/Firebase-Backend-FFCA28?logo=firebase&logoColor=white)

![alt text](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?logo=tailwind-css&logoColor=white)

![alt text](https://img.shields.io/badge/Status-Completed-success?logo=checkmarx)

50CNTT1 TRAVEL là một ứng dụng web hiện đại được thiết kế để kết nối khách du lịch với những hành trình di sản và văn hóa đặc sắc tại Việt Nam. Hệ thống cung cấp trải nghiệm đặt tour mượt mà cho người dùng và bộ công cụ quản trị mạnh mẽ cho nhà điều hành.

✨ Các Tính Năng Chính (Key Features)
👤 Dành cho Khách hàng (User Interface)
* 🔍 Khám phá Tour: Danh sách tour được cập nhật thời gian thực, phân loại theo vùng miền và loại hình du lịch.
* 📄 Chi tiết hành trình: Xem thông tin chi tiết, hình ảnh, mô tả và giá cả của từng tour.
* 🛒 Giỏ hàng thông minh: Thêm/Xóa tour vào giỏ hàng và quản lý số lượng dễ dàng qua localStorage.
* 💳 Thanh toán trực tuyến: Quy trình thanh toán 3 bước (Chi tiết -> Thanh toán -> Xác nhận) với mô phỏng thanh toán qua QR/Thẻ.
* ⛅ Tiện ích thời tiết: Tích hợp API thời tiết thực tế tại các địa điểm du lịch nổi tiếng.
* 🤖 Chatbot hỗ trợ: Hỗ trợ khách hàng giải đáp nhanh các thắc mắc về giá và dịch vụ.
* 🌐 Đa ngôn ngữ: Tích hợp Google Translate giúp người dùng quốc tế dễ dàng tiếp cận.
* 👤 Quản lý tài khoản: Đăng ký, đăng nhập và theo dõi lịch sử đặt tour cá nhân.
🛡️ Dành cho Quản trị viên (Admin Dashboard)
* 📊 Dashboard trực quan: Biểu đồ thống kê tỉ lệ trạng thái đơn hàng (Chờ xử lý, Đã thanh toán, Hoàn thành, Đã hủy) qua Chart.js.
* 🗺️ Quản lý Tour (CRUD): Thêm mới, chỉnh sửa và xóa các tour du lịch một cách nhanh chóng.
* 📦 Quản lý Đơn hàng: Theo dõi danh sách khách hàng đã đặt tour và cập nhật trạng thái đơn hàng theo thời gian thực.
* 👥 Quản lý Thành viên: Danh sách người dùng đăng ký trên hệ thống và phân quyền (Admin/User).

🚀 Công Nghệ Sử Dụng (Tech Stack)
Frontend
* HTML5 & CSS3: Cấu trúc và giao diện.
* Tailwind CSS: Framework CSS hiện đại giúp giao diện responsive và đẹp mắt.
* JavaScript (ES6+): Xử lý logic ứng dụng và tương tác người dùng.
* Chart.js: Trực quan hóa dữ liệu biểu đồ cho Admin.
Backend & Database (BaaS)
* Firebase Authentication: Quản lý xác thực người dùng (Đăng ký/Đăng nhập).
* Cloud Firestore: Cơ sở dữ liệu NoSQL lưu trữ thông tin Tour, Bookings và Users theo thời gian thực.
Third-party APIs
* OpenWeatherMap API: Cung cấp dữ liệu thời tiết.
* Google Translate API: Hỗ trợ đa ngôn ngữ.
* Material Symbols: Hệ thống icon hiện đại.

🛠️ Cài Đặt & Chạy Dự Án (Installation & Setup)
1. Clone Repository: code Bashdownloadcontent_copy expand_less git clone https://github.com/dd552xx3-hub/doantn50cntt.git
2. cd doantn50cntt    
3. Cấu hình Firebase:
    * Tạo một dự án trên Firebase Console.
    * Bật Authentication (Email/Password) và Cloud Firestore.
    * Lấy cấu hình firebaseConfig và dán vào các file .html trong dự án (tại các biến const firebaseConfig).
4. Chạy ứng dụng:
    * Bạn không cần cài đặt server phức tạp. Chỉ cần mở file index.html bằng trình duyệt (khuyên dùng extension Live Server trên VS Code để đảm bảo các module JS hoạt động tốt nhất).

📂 Cấu Trúc Thư Mục (Project Structure)
code Text
downloadcontent_copy
expand_less
├── admin.html         # Giao diện quản trị hệ thống
├── cart.html          # Trang quản lý giỏ hàng
├── checkout.html      # Quy trình thanh toán
├── destinations.html  # Trang khám phá điểm đến
├── index.html         # Trang chủ (Landing Page)
├── login.html         # Trang đăng nhập
├── profile.html       # Trang hồ sơ cá nhân người dùng
├── register.html      # Trang đăng ký tài khoản
├── tours.html         # Danh sách tất cả các tour
└── tour-detail.html   # Chi tiết từng tour du lịch

👨‍💻 Tác Giả (Author)
* Nhóm phát triển: 50CNTT1
* Dự án: Đồ án môn học/Tốt nghiệp.

© 2026 50CNTT1 TRAVEL. All rights reserved.
