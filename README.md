# doantn50cntt
# ✈️ 50CNTT1 TRAVEL - Nền Tảng Đặt Tour Du Lịch Thế Hệ Mới

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

> Đồ án chuyên ngành: Xây dựng Website Đặt Tour Du Lịch "Công ty Du lịch 50CNTT1".
> 
> Tích hợp các công nghệ hiện đại như Trợ lý ảo AI, Dữ liệu đám mây Realtime và Dịch thuật Đa ngôn ngữ.

## 🌟 Tính Năng Nổi Bật (Key Features)

Dự án không chỉ là một trang web tĩnh mà là một nền tảng Web Application hoàn chỉnh với các tính năng:

* **🤖 Trợ Lý Ảo Trí Tuệ Nhân Tạo (AI Chatbot):** Tích hợp trực tiếp Google Gemini API (1.5 Flash), đóng vai nhân viên tư vấn khách hàng 24/7 với khả năng hiểu ngữ cảnh.
* **🌍 Đa Ngôn Ngữ (Localization):** Tích hợp Google Translate API, tự động chuyển đổi ngôn ngữ không cần tải lại trang, hướng tới tệp khách quốc tế (Inbound).
* **⚡ Dữ Liệu Thời Gian Thực (Realtime DB):** Sử dụng Firebase Firestore để lưu trữ, lấy dữ liệu tour và quản lý trạng thái hiển thị tức thời.
* **🛒 Hệ Thống Giỏ Hàng (Cart Management):** Xử lý giỏ hàng mượt mà bằng trình duyệt `localStorage`, không gây độ trễ cho máy chủ.
* **🔥 Kỹ Thuật UI/UX Nâng Cao:**
    * Hiệu ứng FOMO (Sợ bỏ lỡ) thúc đẩy tỷ lệ chốt sale.
    * Tự động cập nhật thời tiết thực tế bằng OpenWeather API.
    * Lịch trình Tour hiển thị dạng Timeline trực quan.
* **🔒 Xác Thực Người Dùng (Auth):** Tích hợp Firebase Authentication quản lý đăng nhập/đăng ký.

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

* **Frontend:** HTML5, Tailwind CSS (qua CDN), Vanilla JavaScript (ES6+).
* **Backend / Database (BaaS):** Firebase (Firestore, Authentication).
* **API Bên Thứ 3:** Google Gemini AI, Google Cloud Translation, OpenWeatherMap.
* **Kiến trúc & Quản lý:** Responsive Mobile-First, GitHub.

## 📂 Cấu Trúc Thư Mục (Folder Structure)

```text
📦 doantn50cntt
 ┣ 📜 index.html         # Trang chủ (Banner, Thời tiết, Chatbot AI)
 ┣ 📜 tours.html         # Danh sách tất cả các tour (kéo từ Firebase)
 ┣ 📜 tour-detail.html   # Chi tiết tour (Timeline lịch trình, FOMO, Thêm vào giỏ)
 ┣ 📜 destinations.html  # Phân loại theo điểm đến nổi bật
 ┣ 📜 cart.html          # Quản lý giỏ hàng (LocalStorage)
 ┣ 📜 login.html         # Đăng nhập (Firebase Auth)
 ┣ 📜 register.html      # Đăng ký (Firebase Auth)
 ┗ 📜 admin.html         # Phân hệ dành riêng cho Quản trị viên
