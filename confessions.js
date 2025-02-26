document.addEventListener("DOMContentLoaded", function () {
    let chosenName = localStorage.getItem("chosenName") || "لاعب مجهول";
    document.getElementById("chosenName").textContent = `👤 اللاعب: ${chosenName}`;
    
    loadConfessions(); // تحميل الاعترافات من الملف الخارجي
});

// تحميل الاعترافات من `confessionsData.js`
function loadConfessions() {
    if (typeof confessions !== "undefined" && confessions.length > 0) {
        generateConfession();
    } else {
        console.error("⚠ لم يتم تحميل قائمة الاعترافات.");
    }
}

// توليد اعتراف عشوائي
function generateConfession() {
    let randomIndex = Math.floor(Math.random() * confessions.length);
    document.getElementById("randomConfession").textContent = `📝 ${confessions[randomIndex]}`;
}

// منع المستخدم من الضغط أكثر من مرة
let answered = false;

// عند الضغط على "نعم" أو "لا"
function handleAnswer(isAccepted) {
    if (answered) return; // منع الاختيار أكثر من مرة
    answered = true; // قفل الأزرار بعد الضغط

    if (isAccepted) {
        updateScore(10);
    } else {
        updateScore(-10);
    }

    // بعد 3 ثوانٍ، الانتقال لاختيار اسم جديد
    setTimeout(() => {
        window.location.href = "wheels.html";
    }, 3000);
}

// تحديث النقاط
function updateScore(points) {
    let chosenName = localStorage.getItem("chosenName");
    let scores = JSON.parse(localStorage.getItem("playerScores")) || {};

    if (!scores[chosenName]) {
        scores[chosenName] = 0;
    }

    scores[chosenName] += points;
    localStorage.setItem("playerScores", JSON.stringify(scores));

    updateDisplayedScore();
}

// تحديث عرض النقاط داخل الصفحة
function updateDisplayedScore() {
    let chosenName = localStorage.getItem("chosenName");
    let scores = JSON.parse(localStorage.getItem("playerScores")) || {};
    let score = scores[chosenName] || 0;

    let scoreDisplay = document.getElementById("playerScore");
    if (!scoreDisplay) {
        scoreDisplay = document.createElement("h3");
        scoreDisplay.id = "playerScore";
        document.querySelector(".container").appendChild(scoreDisplay);
    }
    scoreDisplay.textContent = `🔢 نقاط اللاعب: ${score}`;
}

// إنهاء التحدي والانتقال إلى صفحة النقاط
function endConfession() {
    window.location.href = "scoreboard.html";
}