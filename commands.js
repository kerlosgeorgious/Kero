document.addEventListener("DOMContentLoaded", function () {
    if (typeof orders === "undefined" || orders.length === 0) {
        document.getElementById("randomOrder").textContent = "⚠️ لم يتم تحميل التحديات، يرجى تحديث الصفحة!";
        return;
    }

    const chosenName = localStorage.getItem("chosenName"); // استرجاع اسم اللاعب من LocalStorage
    if (chosenName) {
        document.getElementById("chosenName").textContent = `👤 ${chosenName}`;
    } else {
        document.getElementById("chosenName").textContent = "⚠️ لم يتم اختيار اسم!";
    }

    updateScoreDisplay();

    // اختيار أمر عشوائي وعرضه
    document.getElementById("randomOrder").textContent = getRandomOrder();
});

function getRandomOrder() {
    return orders[Math.floor(Math.random() * orders.length)];
}

// تحديث النقاط
function updateScore(isCompleted) {
    let scores = JSON.parse(localStorage.getItem("playerScores")) || {};
    const chosenName = localStorage.getItem("chosenName");

    if (!chosenName) return;

    if (!scores[chosenName]) {
        scores[chosenName] = 0;
    }

    scores[chosenName] += isCompleted ? 10 : -10;

    localStorage.setItem("playerScores", JSON.stringify(scores));
    updateScoreDisplay();

    setTimeout(() => {
        location.href = 'wheels.html';
    }, 1000);
}

// عرض النقاط في الصفحة
function updateScoreDisplay() {
    const chosenName = localStorage.getItem("chosenName");
    let scores = JSON.parse(localStorage.getItem("playerScores")) || {};
    let score = scores[chosenName] || 0;

    document.getElementById("playerScore").textContent = `🏆 النقاط: ${score}`;
}

// إنهاء التحدي والانتقال إلى صفحة عرض النقاط
function endChallenge() {
    location.href = 'scoreboard.html';
}