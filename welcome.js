function saveUserData() {
    let name = document.getElementById("playerName").value.trim();
    let birthDate = document.getElementById("birthDate").value;

    if (name === "" || birthDate === "") {
        alert("⚠️ يرجى إدخال جميع البيانات قبل بدء اللعب!");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userBirthDate", birthDate);
    
    window.location.href = "index.html"; // الانتقال للصفحة الرئيسية بعد التسجيل
}

// التأكد من أن المستخدم لم يسجل من قبل
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("userName")) {
        window.location.href = "index.html"; // إذا كان الاسم مسجلًا، ينتقل مباشرة للعبة
    }
});

