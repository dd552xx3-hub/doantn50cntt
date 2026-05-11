
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBENGuoNVCBveOfFnGwh2CkhX9ckoB5Gk",
    authDomain: "doantn50cntt.firebaseapp.com",
    projectId: "doantn50cntt",
    storageBucket: "doantn50cntt.firebasestorage.app",
    messagingSenderId: "705512357448",
    appId: "1:705512357448:web:844e8f876c489ae27d"
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo các dịch vụ
const auth = getAuth(app);
const db = getFirestore(app);

// Xuất các đối tượng ra để sử dụng ở file khác
export { app, auth, db };
