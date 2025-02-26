let score1 = 0;
let score2 = 0;
let currentTeam = "team1";
let rounds = parseInt(localStorage.getItem("rounds") || 2);
let currentRound = 0;

document.getElementById("team1Score").textContent = score1;
document.getElementById("team2Score").textContent = score2;

function answer(correct) {
    if (correct) {
        if (currentTeam === "team1") {
            score1 += 3; // فقط 3 نقاط لكل إجابة صحيحة
        } else {
            score2 += 3;
        }
    }

    updateScoreDisplay();
    nextRound();
}

function updateScoreDisplay() {
    document.getElementById("team1Score").textContent = score1;
    document.getElementById("team2Score").textContent = score2;
}

function nextRound() {
    currentRound++;
    if (currentRound >= rounds * 2) {
        localStorage.setItem("finalScore1", score1);
        localStorage.setItem("finalScore2", score2);
        window.location.href = "results.html";
    } else {
        currentTeam = currentTeam === "team1" ? "team2" : "team1";
    }
}

