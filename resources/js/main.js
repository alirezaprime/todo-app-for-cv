// تعریف عناصر مرتبط با HTML
var addBtn = document.querySelector("#add");
var inputValue = document.querySelector("#item");
let todoContainer = document.querySelector("#todo");
let completedContainer = document.querySelector("#completed");

// تابع برای افزودن آیتم جدید
function addItem() {
  let itemText = inputValue.value.trim();

  if (itemText) {
    let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    todoList.push(itemText);
    localStorage.setItem("todoItems", JSON.stringify(todoList));

    // پاک کردن مقدار input
    inputValue.value = "";

    // خواندن مجدد لیست و نمایش آن
    renderTodoList();
  }
}

// تابع برای رندر کردن لیست وظایف و لیست تکمیل‌شده‌ها
function renderTodoList() {
  let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
  let completedList = JSON.parse(localStorage.getItem("completedItems")) || [];

  // پاک کردن لیست قبلی
  todoContainer.innerHTML = "";
  completedContainer.innerHTML = "";

  // نمایش آیتم‌های todo
  todoList.forEach((item, index) => createTodoItem(item, index, false));

  // نمایش آیتم‌های completed
  completedList.forEach((item, index) => createTodoItem(item, index, true));
}

// تابع ساخت آیتم‌های لیست وظایف
function createTodoItem(item, index, isCompleted) {
  let li = document.createElement("li");
  if (isCompleted) {
    li.classList.add("completed");
  }

  let textSpan = document.createElement("span");
  textSpan.textContent = item;
  textSpan.className = "item-text";

  let iconsContainer = document.createElement("div");
  iconsContainer.className = "icons-container";

  // ساخت آیکون تیک
  let tickIcon = document.createElement("span");
  tickIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${
    isCompleted ? "gray" : "green"
  }" viewBox="0 0 16 16">
    <path d="M13.485 1.93a.5.5 0 0 1 .707.707l-8.485 8.485a.5.5 0 0 1-.707 0L2.07 8.485a.5.5 0 1 1 .707-.707L5.5 10.5l7.985-7.985z"/>
  </svg>`;

  // رویداد برای تغییر وضعیت آیتم
  tickIcon.addEventListener("click", () => {
    let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    let completedList =
      JSON.parse(localStorage.getItem("completedItems")) || [];

    if (!isCompleted) {
      // انتقال از todo به completed
      completedList.push(item);
      todoList.splice(index, 1);
    } else {
      // انتقال از completed به todo
      todoList.push(item);
      completedList.splice(index, 1);
    }

    // ذخیره تغییرات
    localStorage.setItem("todoItems", JSON.stringify(todoList));
    localStorage.setItem("completedItems", JSON.stringify(completedList));

    // نمایش مجدد لیست
    renderTodoList();
  });

  // ساخت آیکون حذف
  let trashIcon = document.createElement("span");
  trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
    <path d="M5.5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V2h3a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h3V1zM3.5 4h9l-.8 10.2A1 1 0 0 1 10.7 15H5.3a1 1 0 0 1-.99-.8L3.5 4z"/>
  </svg>`;

  // حذف آیتم از لیست‌ها
  trashIcon.addEventListener("click", () => {
    let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    let completedList =
      JSON.parse(localStorage.getItem("completedItems")) || [];

    if (!isCompleted) {
      todoList.splice(index, 1);
    } else {
      completedList.splice(index, 1);
    }

    localStorage.setItem("todoItems", JSON.stringify(todoList));
    localStorage.setItem("completedItems", JSON.stringify(completedList));
    renderTodoList();
  });

  // اضافه کردن آیکون‌ها به container
  iconsContainer.appendChild(tickIcon);
  iconsContainer.appendChild(trashIcon);

  // اضافه کردن متن و آیکون‌ها به li
  li.appendChild(textSpan);
  li.appendChild(iconsContainer);

  // اضافه کردن `li` به لیست مربوطه
  let container = isCompleted ? completedContainer : todoContainer;
  container.appendChild(li);
}

// اجرای تابع هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", renderTodoList);

// اجرای تابع هنگام کلیک روی دکمه "Add"
addBtn.addEventListener("click", addItem);

// اجرای تابع هنگام فشردن "Enter"
inputValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
