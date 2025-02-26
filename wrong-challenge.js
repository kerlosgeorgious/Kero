document.addEventListener("DOMContentLoaded", function () {
    // استرجاع الأسئلة من LocalStorage
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    
    if (!Array.isArray(questions) || questions.length === 0) {
        alert("⚠️ فشل تحميل الأسئلة! تأكد من وجود ملف questions.js.");
        return;
    }

    // استرجاع أسماء اللاعبين من LocalStorage
    let players = JSON.parse(localStorage.getItem("wrongPlayers")) || [];
    let currentPlayerIndex = 0;
    let scoreBoard = JSON.parse(localStorage.getItem("wrongScoreBoard")) || {}; // استرجاع النقاط أو تعيينها إلى 0

    // التأكد من وجود لاعبين
    if (players.length > 0) {
        players.forEach(player => {
            if (!(player in scoreBoard)) {
                scoreBoard[player] = 0;
            }
        });
        updatePlayerTurn();
    } else {
        alert("⚠️ لا يوجد لاعبين! الرجاء إضافة الأسماء أولًا.");
        window.location.href = "wrong-names.html";
    }

    // دالة لاختيار سؤال عشوائي
    function getRandomQuestion() {
        if (questions.length === 0) {
            document.getElementById("questionText").innerText = "⚠️ لا توجد أسئلة متاحة!";
            return;
        }
        let randomIndex = Math.floor(Math.random() * questions.length);
        document.getElementById("questionText").innerText = questions[randomIndex];
    }

    // تحديث اسم اللاعب الحالي وعرض السؤال الجديد
    function updatePlayerTurn() {
        let playerName = players[currentPlayerIndex];
        document.getElementById("playerName").innerText = `📛 ${playerName}`;
        document.getElementById("playerScore").innerText = `🏆 النقاط: ${scoreBoard[playerName]}`;
        getRandomQuestion();
    }

    // التعامل مع إجابة اللاعب
    function answerQuestion(isCorrect) {
        let playerName = players[currentPlayerIndex];

        if (!isCorrect) {
            scoreBoard[playerName] += 1; // إضافة نقطة عند الإجابة الخاطئة
        }

        // حفظ النقاط في LocalStorage
        localStorage.setItem("wrongScoreBoard", JSON.stringify(scoreBoard));

        // الانتقال إلى اللاعب التالي
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updatePlayerTurn();
    }

    // إنهاء اللعبة وحفظ النتائج
    function endGame() {
        localStorage.setItem("wrongScoreBoard", JSON.stringify(scoreBoard));
        window.location.href = "wrong-score.html"; // الانتقال إلى صفحة عرض النتائج
    }

    // ربط الأزرار بالدوال
    document.getElementById("correctBtn").addEventListener("click", () => answerQuestion(true));
    document.getElementById("wrongBtn").addEventListener("click", () => answerQuestion(false));
    document.getElementById("endGameBtn").addEventListener("click", endGame);

    updatePlayerTurn();
});