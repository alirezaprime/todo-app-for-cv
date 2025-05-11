// //roles button To exist in this app
// var addBtn = document.querySelector("#add");
// var inputValue = document.querySelector("#item");
// //define element related to html
// let container = document.querySelector(".container");
// let todo = document.querySelector(".todo");

// let completed = document.querySelector("#completed");

// /////////////////////////////تعریف تابع برای  اضافه کردن ایتم ها///////////////////////////////////////
// function addItem() {
//   let itemText = inputValue.value;

//   if (itemText) {
//     let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
//     todoList.push(itemText);
//     localStorage.setItem("todoItems", JSON.stringify(todoList));

//     console.log("لیست جدید ذخیره شد:", todoList);

//     // پاک کردن مقدار input
//     inputValue.value = "";
//   }
// }
// let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
// let completedList = JSON.parse(localStorage.getItem("completedItems")) || [];
// let todoContainer = document.querySelector("#todo");
// let completedContainer = document.querySelector("#completed");
// function renderTodoList() {
//   // پاک کردن لیست قبلی
//   todoContainer.innerHTML = "";
//   completedContainer.innerHTML = "";

//   // ترکیب لیست وظایف و تکمیل‌شده‌ها برای حفظ وضعیت هر آیتم
//   todoList.forEach((item, index) => createTodoItem(item, index, false));
//   completedList.forEach((item, index) => createTodoItem(item, index, true));
// }

// function createTodoItem(item, index, isCompleted) {
//   let li = document.createElement("li");
//   li.textContent = item;

//   // تغییر استایل بر اساس وضعیت انجام‌شده
//   if (isCompleted) {
//     li.style.textDecoration = "line-through";
//     li.style.color = "gray";
//   }

//   // ساخت آیکون تیک
//   let tickIcon = document.createElement("span");
//   tickIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${
//     isCompleted ? "gray" : "green"
//   }" viewBox="0 0 16 16">
//     <path d="M13.485 1.93a.5.5 0 0 1 .707.707l-8.485 8.485a.5.5 0 0 1-.707 0L2.07 8.485a.5.5 0 1 1 .707-.707L5.5 10.5l7.985-7.985z"/>
//   </svg>`;
//   tickIcon.style.cursor = "pointer";

//   // رویداد برای تغییر وضعیت آیتم (بدون حذف دکمه تیک)
//   tickIcon.addEventListener("click", () => {
//     if (!isCompleted) {
//       completedList.push(item);
//       todoList.splice(index, 1);
//     } else {
//       todoList.push(item);
//       completedList.splice(index, 1);
//     }

//     // ذخیره تغییرات در localStorage
//     localStorage.setItem("todoItems", JSON.stringify(todoList));
//     localStorage.setItem("completedItems", JSON.stringify(completedList));

//     // نمایش مجدد لیست
//     renderTodoList();
//   });

//   // ساخت آیکون حذف
//   let trashIcon = document.createElement("span");
//   trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
//     <path d="M5.5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V2h3a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h3V1zM3.5 4h9l-.8 10.2A1 1 0 0 1 10.7 15H5.3a1 1 0 0 1-.99-.8L3.5 4z"/>
//   </svg>`;
//   trashIcon.style.cursor = "pointer";

//   // حذف آیتم از لیست‌ها
//   trashIcon.addEventListener("click", () => {
//     if (!isCompleted) {
//       todoList.splice(index, 1);
//     } else {
//       completedList.splice(index, 1);
//     }

//     localStorage.setItem("todoItems", JSON.stringify(todoList));
//     localStorage.setItem("completedItems", JSON.stringify(completedList));
//     renderTodoList();
//   });

//   // اضافه کردن آیکون‌ها به `li`
//   li.appendChild(tickIcon);
//   li.appendChild(trashIcon);

//   // اضافه کردن `li` به لیست مربوطه
//   let container = isCompleted
//     ? document.querySelector("#completed")
//     : document.querySelector("#todo");
//   container.appendChild(li);
// }

// // اجرای تابع هنگام بارگذاری صفحه
// document.addEventListener("DOMContentLoaded", renderTodoList);

// /////////////////////////////////////استفاده از توابع قبلی برای اجرا شدن ////////////////////////////////////
// // اجرای تابع برای نمایش لیست هنگام بارگذاری صفحه
// document.addEventListener("DOMContentLoaded", renderTodoList);

// addBtn.addEventListener("click", () => {
//   addItem();
//   renderTodoList(); // فراخوانی تابع صحیح
// });

// inputValue.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addItem();
//     renderTodoList(); // فراخوانی تابع صحیح
//   }
// });
// /////////////////////////////////////////////////////////////////////////
// // tickBtn
// // trashBtn
// //////////////////////////////////////////////////////////////////////////////////////
// تعریف عناصر مرتبط با HTML
var addBtn = document.querySelector("#add");
var inputValue = document.querySelector("#item");
let todoContainer = document.querySelector("#todo");
let completedContainer = document.querySelector("#completed");

// تابع برای افزودن آیتم جدید
function addItem() {
  let itemText = inputValue.value;

  if (itemText) {
    let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    todoList.push(itemText);
    localStorage.setItem("todoItems", JSON.stringify(todoList));

    console.log("لیست جدید ذخیره شد:", todoList);

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

  // ترکیب لیست وظایف و تکمیل‌شده‌ها
  todoList.forEach((item, index) => createTodoItem(item, index, false));
  completedList.forEach((item, index) => createTodoItem(item, index, true));
}

// تابع ساخت آیتم‌های لیست وظایف
function createTodoItem(item, index, isCompleted) {
  let li = document.createElement("li");
  li.textContent = item;

  // تغییر استایل بر اساس وضعیت انجام‌شده
  if (isCompleted) {
    li.style.textDecoration = "line-through";
    li.style.color = "gray";
  }

  // ساخت آیکون تیک
  let tickIcon = document.createElement("span");
  tickIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${
    isCompleted ? "gray" : "green"
  }" viewBox="0 0 16 16">
    <path d="M13.485 1.93a.5.5 0 0 1 .707.707l-8.485 8.485a.5.5 0 0 1-.707 0L2.07 8.485a.5.5 0 1 1 .707-.707L5.5 10.5l7.985-7.985z"/>
  </svg>`;
  tickIcon.style.cursor = "pointer";

  // رویداد برای تغییر وضعیت آیتم (بدون حذف دکمه تیک)
  tickIcon.addEventListener("click", () => {
    let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    let completedList =
      JSON.parse(localStorage.getItem("completedItems")) || [];

    if (!isCompleted) {
      completedList.push(item);
      todoList.splice(index, 1);
    } else {
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
  trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
    <path d="M5.5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V2h3a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h3V1zM3.5 4h9l-.8 10.2A1 1 0 0 1 10.7 15H5.3a1 1 0 0 1-.99-.8L3.5 4z"/>
  </svg>`;
  trashIcon.style.cursor = "pointer";

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

  // اضافه کردن آیکون‌ها به `li`
  li.appendChild(tickIcon);
  li.appendChild(trashIcon);

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
