// استرجاع النقاط المخزنة
let scores = JSON.parse(localStorage.getItem("wrongScoreBoard")) || {};
let scoreList = document.getElementById("scoreList");

// تحميل النقاط وعرضها في الجدول
for (let player in scores) {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${player}</td><td>${scores[player]}</td>`;
    scoreList.appendChild(row);
}

// تصفير النقاط والرجوع للصفحة الرئيسية بعد 5 ثوانٍ
setTimeout(() => {
    localStorage.removeItem("wrongScoreBoard"); // حذف جميع النقاط
    window.location.href = "index.html"; // الرجوع للصفحة الرئيسية
}, 5000); // 5000 ميلي ثانية = 5 ثوانٍ

