document.getElementById("addPlayer").addEventListener("click", function () {
    let playersList = document.getElementById("playersList");

    let playerDiv = document.createElement("div");
    playerDiv.classList.add("player");

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "أدخل اسم اللاعب";

    playerDiv.appendChild(input);
    playersList.appendChild(playerDiv);
});

document.getElementById("clearPlayers").addEventListener("click", function () {
    document.getElementById("playersList").innerHTML = "";
    
    // إضافة مربع اسم واحد بعد الحذف
    let playersList = document.getElementById("playersList");
    let playerDiv = document.createElement("div");
    playerDiv.classList.add("player");

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "أدخل اسم اللاعب";

    playerDiv.appendChild(input);
    playersList.appendChild(playerDiv);
});

function saveNames() {
    let inputs = document.querySelectorAll("#playersList input");
    let names = [];

    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            names.push(input.value.trim());
        }
    });

    let errorMessage = document.getElementById("errorMessage");

    if (names.length < 2) {
        errorMessage.innerText = "⚠ يجب إدخال اسمين على الأقل!";
        return;
    } else {
        errorMessage.innerText = ""; // مسح رسالة الخطأ
    }

    localStorage.setItem("wrongPlayers", JSON.stringify(names));
    window.location.href = "wrong-challenge.html"; // الانتقال إلى صفحة التحدي
}