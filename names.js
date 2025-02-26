// تحميل الأسماء من localStorage إذا كانت موجودة
let names = JSON.parse(localStorage.getItem("savedNames")) || [];

// تحديث قائمة الأسماء عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", updateNamesList);

// وظيفة لإضافة اسم جديد
function addName() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value.trim();

    if (name) {
        names.push(name);
        updateNamesList();
        localStorage.setItem("savedNames", JSON.stringify(names)); // حفظ الأسماء في التخزين المحلي
        nameInput.value = "";
    }
}

// تحديث قائمة الأسماء في الصفحة
function updateNamesList() {
    let listContainer = document.getElementById("namesList");
    listContainer.innerHTML = ""; 

    names.forEach((name, index) => {
        let nameBox = document.createElement("div");
        nameBox.textContent = name;
        nameBox.classList.add("name-box");

        // زر حذف الاسم الفردي
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-name");
        deleteBtn.onclick = () => removeName(index);

        nameBox.appendChild(deleteBtn);
        listContainer.appendChild(nameBox);
    });
}

// وظيفة لحذف اسم معين
function removeName(index) {
    names.splice(index, 1);
    updateNamesList();
    localStorage.setItem("savedNames", JSON.stringify(names)); // تحديث التخزين المحلي
}

// وظيفة لحذف كل الأسماء
function clearNames() {
    names = [];
    localStorage.removeItem("savedNames"); // حذف الأسماء المخزنة
    updateNamesList();
}

// الانتقال إلى عجلة الحظ بعد التحقق من الأسماء
function goToWheel() {
    if (names.length === 0) {
        alert("⚠️ يرجى إدخال أسماء اللاعبين أولًا!");
        return;
    }
    localStorage.setItem("savedNames", JSON.stringify(names));
    location.href = "wheels.html";
}