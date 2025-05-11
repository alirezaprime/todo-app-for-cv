//roles button To exist in this app
var addBtn = document.querySelector("#add");
var inputValue = document.querySelector("#item");
//define element related to html
let container = document.querySelector(".container");
let todo = document.querySelector(".todo");

let completed = document.querySelector("#completed");

/////////////////////////////تعریف تابع برای  اضافه کردن ایتم ها///////////////////////////////////////
function addItem() {
  let itemText = inputValue.value;

  if (itemText) {
    let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
    todoList.push(itemText);
    localStorage.setItem("todoItems", JSON.stringify(todoList));

    console.log("لیست جدید ذخیره شد:", todoList);

    // پاک کردن مقدار input
    inputValue.value = "";
  }
}
/////////////////////////////////////تعریف تابع برای اجرای عناصر لیست در صفحه///////////////////////////
function renderTodoList() {
  let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
  let completedList = JSON.parse(localStorage.getItem("completedItems")) || [];
  let todoContainer = document.querySelector("#todo");
  let completedContainer = document.querySelector("#completed");

  // پاک کردن لیست قبلی
  todoContainer.innerHTML = "";
  completedContainer.innerHTML = "";

  // افزودن آیتم‌ها به لیست وظایف
  todoList.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;

    // ساخت آیکون‌های SVG
    let tickIcon = document.createElement("span");
    tickIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 16 16">
      <path d="M13.485 1.93a.5.5 0 0 1 .707.707l-8.485 8.485a.5.5 0 0 1-.707 0L2.07 8.485a.5.5 0 1 1 .707-.707L5.5 10.5l7.985-7.985z"/>
    </svg>`;
    tickIcon.style.cursor = "pointer";

    let trashIcon = document.createElement("span");
    trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
      <path d="M5.5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V2h3a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h3V1zM3.5 4h9l-.8 10.2A1 1 0 0 1 10.7 15H5.3a1 1 0 0 1-.99-.8L3.5 4z"/>
    </svg>`;
    trashIcon.style.cursor = "pointer";

    // رویداد برای آیکون "تیک" (انتقال آیتم به لیست تکمیل‌شده)
    tickIcon.addEventListener("click", () => {
      completedList.push(item);
      localStorage.setItem("completedItems", JSON.stringify(completedList)); // ذخیره در localStorage
      todoList.splice(index, 1); // حذف از لیست وظایف
      localStorage.setItem("todoItems", JSON.stringify(todoList)); // بروزرسانی localStorage
      renderTodoList(); // نمایش مجدد لیست‌ها
    });

    // رویداد برای آیکون "زباله" (حذف آیتم از لیست)
    trashIcon.addEventListener("click", () => {
      todoList.splice(index, 1); // حذف آیتم از آرایه
      localStorage.setItem("todoItems", JSON.stringify(todoList)); // ذخیره تغییرات در localStorage
      renderTodoList(); // نمایش مجدد لیست‌ها
    });

    // اضافه کردن آیکون‌ها به `li`
    li.appendChild(tickIcon);
    li.appendChild(trashIcon);

    // اضافه کردن `li` به `ul`
    todoContainer.appendChild(li);
  });

  // نمایش آیتم‌های تکمیل‌شده در `#completed`
  completedList.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;
    li.style.textDecoration = "line-through";
    li.style.color = "gray";

    let trashIcon = document.createElement("span");
    trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16">
      <path d="M5.5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V2h3a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h3V1zM3.5 4h9l-.8 10.2A1 1 0 0 1 10.7 15H5.3a1 1 0 0 1-.99-.8L3.5 4z"/>
    </svg>`;
    trashIcon.style.cursor = "pointer";

    // حذف آیتم از لیست تکمیل‌شده
    trashIcon.addEventListener("click", () => {
      completedList.splice(index, 1);
      localStorage.setItem("completedItems", JSON.stringify(completedList));
      renderTodoList();
    });

    li.appendChild(trashIcon);
    completedContainer.appendChild(li);
  });
}

// اجرای تابع هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", renderTodoList);

/////////////////////////////////////استفاده از توابع قبلی برای اجرا شدن ////////////////////////////////////
// اجرای تابع برای نمایش لیست هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", renderTodoList);

addBtn.addEventListener("click", () => {
  addItem();
  renderTodoList(); // فراخوانی تابع صحیح
});

inputValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
    renderTodoList(); // فراخوانی تابع صحیح
  }
});
/////////////////////////////////////////////////////////////////////////
// tickBtn
// trashBtn
//////////////////////////////////////////////////////////////////////////////////////
