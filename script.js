document.addEventListener("DOMContentLoaded", function () {
    let addPlayerButton = document.getElementById("add-player");
    let startGameButton = document.getElementById("start-game");

    if (addPlayerButton) {
        addPlayerButton.addEventListener("click", function() {
            let newInput = document.createElement("input");
            newInput.type = "text";
            newInput.classList.add("player-input");
            newInput.placeholder = "👤 أدخل اسم اللاعب";
            document.getElementById("players-container").appendChild(newInput);
        });
    }

    if (startGameButton) {
        startGameButton.addEventListener("click", function() {
            alert("🚀 ابدأ اللعبة الآن!");
        });
    }
});