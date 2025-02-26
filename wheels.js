let names = JSON.parse(localStorage.getItem("savedNames")) || [];
let selectedChallenge = localStorage.getItem("selectedChallenge");

// تحميل الأسماء عند فتح الصفحة
function loadNames() {
    let listContainer = document.getElementById("playersList");
    listContainer.innerHTML = ""; 

    if (names.length === 0) {
        listContainer.innerHTML = "<p>⚠ لا توجد أسماء متاحة، الرجاء العودة وإضافتها.</p>";
        return;
    }

    names.forEach(name => {
        let nameBox = document.createElement("div");
        nameBox.textContent = name;
        nameBox.classList.add("name-box");
        listContainer.appendChild(nameBox);
    });
}

// اختيار اسم عشوائي
function pickRandomName() {
    if (names.length === 0) {
        alert("⚠ يرجى إدخال الأسماء أولًا!");
        return;
    }

    let popup = document.getElementById("randomPopup");
    let randomNameDisplay = document.getElementById("randomName");

    popup.classList.remove("hidden");

    let cycles = Math.floor(Math.random() * 8) + 6; 
    let currentCycle = 0;

    let interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * names.length);
        randomNameDisplay.textContent = names[randomIndex];

        currentCycle++;
        if (currentCycle >= cycles) {
            clearInterval(interval);
            playSound();

            // حفظ الاسم المختار والتوجيه إلى التحدي
            setTimeout(() => {
                localStorage.setItem("chosenName", randomNameDisplay.textContent);
                location.href = selectedChallenge;
            }, 2000);
        }
    }, 200);
}

// تشغيل صوت عند اختيار الاسم
function playSound() {
    let audio = new Audio("select.mp3");
    audio.play();
}

// تحميل الأسماء عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadNames);