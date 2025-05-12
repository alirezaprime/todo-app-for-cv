// // تعریف عناصر مرتبط با HTML
// var addBtn = document.querySelector("#add");
// var inputValue = document.querySelector("#item");
// let todoContainer = document.querySelector("#todo");
// let completedContainer = document.querySelector("#completed");

// // تابع برای افزودن آیتم جدید
// function addItem() {
//   let itemText = inputValue.value.trim();

//   if (itemText) {
//     let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
//     todoList.push(itemText);
//     localStorage.setItem("todoItems", JSON.stringify(todoList));

//     // پاک کردن مقدار input
//     inputValue.value = "";

//     // خواندن مجدد لیست و نمایش آن
//     renderTodoList();
//   }
// }

// // تابع برای رندر کردن لیست وظایف و لیست تکمیل‌شده‌ها
// function renderTodoList() {
//   let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
//   let completedList = JSON.parse(localStorage.getItem("completedItems")) || [];

//   // پاک کردن لیست قبلی
//   todoContainer.innerHTML = "";
//   completedContainer.innerHTML = "";

//   // نمایش آیتم‌های todo
//   todoList.forEach((item, index) => createTodoItem(item, index, false));

//   // نمایش آیتم‌های completed
//   completedList.forEach((item, index) => createTodoItem(item, index, true));
// }

// // تابع ساخت آیتم‌های لیست وظایف
// function createTodoItem(item, index, isCompleted) {
//   let li = document.createElement("li");
//   if (isCompleted) {
//     li.classList.add("completed");
//   }

//   let textSpan = document.createElement("span");
//   textSpan.textContent = item;
//   textSpan.className = "item-text";

//   let iconsContainer = document.createElement("div");
//   iconsContainer.className = "icons-container";

//   // ساخت آیکون تیک
//   let tickIcon = document.createElement("span");
//   tickIcon.className = "tick-icon"; // اضافه کردن کلاس برای استایل دهی
//   tickIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
//     <path d="M13.485 1.93a.5.5 0 0 1 .707.707l-8.485 8.485a.5.5 0 0 1-.707 0L2.07 8.485a.5.5 0 1 1 .707-.707L5.5 10.5l7.985-7.985z"/>
//   </svg>`;

//   // تنظیم رنگ اولیه بر اساس وضعیت
//   updateTickIconColor(tickIcon, isCompleted);

//   // ... بقیه کدها
// }

// // تابع کمکی برای به‌روزرسانی رنگ آیکون
// function updateTickIconColor(icon, isCompleted) {
//   const path = icon.querySelector("path");
//   if (path) {
//     path.setAttribute("fill", isCompleted ? "gray" : "green");
//   }
// }

// // اجرای تابع هنگام بارگذاری صفحه
// document.addEventListener("DOMContentLoaded", renderTodoList);

// // اجرای تابع هنگام کلیک روی دکمه "Add"
// addBtn.addEventListener("click", addItem);

// // اجرای تابع هنگام فشردن "Enter"
// inputValue.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addItem();
//   }
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

  // // ساخت آیکون تیک
  // let tickIcon = document.createElement("span");
  // tickIcon.className = "tick-icon";
  // tickIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
  //   <path d="M13.485 1.93a.5.5 0 0 1 .707.707l-8.485 8.485a.5.5 0 0 1-.707 0L2.07 8.485a.5.5 0 1 1 .707-.707L5.5 10.5l7.985-7.985z"/>
  // </svg>`;

  // ساخت آیکون تیک
  let tickIcon = document.createElement("span");
  tickIcon.className = "tick-icon"; // اضافه کردن کلاس برای استایل دهی
  tickIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>`;

  // تنظیم رنگ اولیه بر اساس وضعیت
  updateTickIconColor(tickIcon, isCompleted);

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

    // ذخیره تغییرات در localStorage
    localStorage.setItem("todoItems", JSON.stringify(todoList));
    localStorage.setItem("completedItems", JSON.stringify(completedList));

    // نمایش مجدد لیست
    renderTodoList();
  });

  // ساخت آیکون حذف
  let trashIcon = document.createElement("span");
  trashIcon.className = "trash-icon";
  trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>`;

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

// تابع کمکی برای به‌روزرسانی رنگ آیکون
function updateTickIconColor(icon, isCompleted) {
  const path = icon.querySelector("path");
  if (path) {
    path.setAttribute("fill", isCompleted ? "green" : "gray");
  }
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
