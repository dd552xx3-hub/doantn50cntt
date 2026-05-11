✈️ 50CNTT1 TRAVEL - Hệ Thống Quản Lý & Đặt Tour Du Lịch Hiện Đại
50CNTT1 Travel là nền tảng ứng dụng web lữ hành hiện đại, được thiết kế nhằm mang đến trải nghiệm đặt tour trực tuyến mượt mà cho khách hàng và công cụ quản trị mạnh mẽ cho doanh nghiệp du lịch. Sản phẩm được xây dựng bởi nhóm sinh viên Khoa 50 Công Nghệ Thông Tin - Trường Cao đẳng Điện tử Điện lạnh.

🌟 Tính Năng Cốt Lõi
👤 Phân hệ Khách hàng
Trang chủ thông minh: Tích hợp widget dự báo thời tiết thời gian thực qua OpenWeatherMap API và hỗ trợ đa ngôn ngữ với Google Translate.

Khám phá hành trình: Hệ thống bento-grid hiển thị điểm đến và danh sách tour đa dạng.

Bộ lọc tìm kiếm: Cho phép lọc tour theo mức giá, thời gian và loại hình du lịch (Luxury, Văn hóa, Khám phá).

Giỏ hàng trực quan: Quản lý danh sách tour đã chọn và tính toán tổng chi phí tự động.

Quy trình Checkout 3 bước: Chuyên nghiệp hóa từ khâu điền thông tin khách hàng, lựa chọn phương thức thanh toán đến xác nhận đơn hàng.

Quản lý tài khoản: Hệ thống đăng ký/đăng nhập và theo dõi lịch sử chuyến đi trong hồ sơ cá nhân.

🛡️ Phân hệ Quản trị (Admin)
Dashboard thống kê: Biểu đồ hình quạt (Chart.js) hiển thị trực quan tỉ lệ trạng thái đơn hàng và các chỉ số tăng trưởng.

Quản lý Tour (CRUD): Giao diện Modal hiện đại để thêm, sửa, xóa các tour du lịch nhanh chóng.

Quản lý Bài viết: Hệ thống biên tập cẩm nang du lịch và tin tức tích hợp dữ liệu thời gian thực.

Điều hành đơn hàng: Tiếp nhận và cập nhật trạng thái đơn đặt tour (Chờ xử lý, Đã thanh toán, Hoàn thành, Đã hủy).

Bảo mật hệ thống: Phân quyền truy cập nghiêm ngặt dựa trên vai trò (Role-based) trong Database.

🛠 Công Nghệ Sử Dụng
Frontend
Tailwind CSS: Framework CSS utility-first giúp tối ưu hóa giao diện responsive trên mọi thiết bị.

JavaScript (ES6+): Xử lý logic nghiệp vụ, tương tác DOM và gọi API.

Chart.js: Thư viện đồ họa cho các báo cáo quản trị.

Backend & Cloud Service (Firebase)
Firebase Authentication: Quản lý định danh và bảo mật phiên đăng nhập.

Cloud Firestore: Cơ sở dữ liệu NoSQL thời gian thực, lưu trữ thông tin Tour, Booking và Bài viết.

Firebase Hosting: Nền tảng triển khai web tốc độ cao.

📂 Cấu Trúc Dự Án
Plaintext
├── admin.html          # Trang quản trị tổng hợp (Dashboard/Tours/Blogs/Bookings)
├── blog.html           # Danh sách bài viết cẩm nang du lịch
├── blog-detail.html    # Nội dung chi tiết bài viết
├── cart.html           # Giao diện giỏ hàng của người dùng
├── checkout.html       # Quy trình thanh toán và đặt chỗ
├── destinations.html   # Khám phá các điểm đến theo vùng miền
├── index.html          # Trang chủ dự án
├── login.html          # Giao diện đăng nhập hệ thống
├── profile.html        # Hồ sơ cá nhân và lịch sử đặt tour
├── register.html       # Giao diện đăng ký tài khoản mới
├── tour-detail.html    # Chi tiết lịch trình và giá tour
└── tours.html          # Danh sách tất cả tour du lịch hiện có
🚀 Hướng Dẫn Cài Đặt
Clone dự án về máy:

Bash
git clone https://github.com/dd552xx3-hub/doantn50cntt.git
Cấu hình Firebase:

Truy cập Firebase Console.

Tạo dự án mới và sao chép mã cấu hình firebaseConfig.

Dán mã cấu hình vào các file HTML tương ứng để kết nối cơ sở dữ liệu.

Chạy ứng dụng:

Sử dụng extension Live Server trên VS Code để khởi chạy file index.html.

👤 Tác Giả & Bản Quyền
Thực hiện: Nhóm sinh viên 50CNTT1 - Khoa Công Nghệ Thông Tin.

Trường: Cao đẳng Điện tử Điện lạnh Hà Nội.

Bản quyền: © 2026 Đạt_Tùng_Đăng_Long Travel.
