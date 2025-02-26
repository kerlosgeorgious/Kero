document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("userName");

    if (userName) {
        document.getElementById("user-name").textContent = userName;
    } else {
        window.location.href = "welcome.html"; // إذا لم يسجل، يتم توجيهه لصفحة التسجيل
    }
});

// دالة تسجيل الخروج
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userBirthDate");
    window.location.href = "welcome.html"; // إعادة توجيه المستخدم لصفحة التسجيل
}

