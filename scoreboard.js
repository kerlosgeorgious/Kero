document.addEventListener("DOMContentLoaded", function () {
    displayScores(); // تحميل وعرض النقاط عند فتح الصفحة

    // ⏳ بعد 5 ثوانٍ، تصفير النقاط وإرجاع المستخدم إلى الصفحة الرئيسية
    let countdown = 5;
    let countdownInterval = setInterval(() => {
        countdown--;
        document.getElementById("countdown").textContent = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            resetScores();
            window.location.href = 'index.html';
        }
    }, 1000);
});

// استيراد الأسماء والنقاط
function displayScores() {
    let names = JSON.parse(localStorage.getItem("savedNames")) || []; // استرجاع الأسماء من names.html
    let scores = JSON.parse(localStorage.getItem("playerScores")) || {}; // استرجاع النقاط من التحديات
    let scoreboard = document.getElementById("scoreboard");

    scoreboard.innerHTML = ""; // تفريغ الجدول قبل تعبئته

    if (names.length === 0) {
        scoreboard.innerHTML = "<tr><td colspan='2'>⚠️ لا توجد أسماء متاحة</td></tr>";
        return;
    }

    names.forEach(name => {
        let score = scores[name] || 0; // إذا لم يكن لديه نقاط، يبدأ من 0
        let row = document.createElement("tr");
        row.innerHTML = `<td>${name}</td><td>${score}</td>`;
        scoreboard.appendChild(row);
    });
}

// 🛑 تصفير النقاط تمامًا
function resetScores() {
    localStorage.removeItem("playerScores"); // حذف جميع النقاط
}