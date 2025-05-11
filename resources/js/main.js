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
function renderTodolist() {
  let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];
  let todoContainer = document.querySelector("#todo");

  //پاک کردن لیست قبلی
  todoContainer.innerHTML = "";

  // افزودن آیتم‌ها به لیست
  todoList.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    todoContainer.appendChild(li);
  });
}
/////////////////////////////////////استفاده از توابع قبلی برای اجرا شدن ////////////////////////////////////
// اجرای تابع برای نمایش لیست هنگام بارگذاری صفحه
document.addEventListener("DOMContentLoaded", renderTodolist);
addBtn.addEventListener("click", () => {
  addItem();
  renderTodolist();
});
inputValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
    renderTodolist();
  }
});
/////////////////////////////////////////////////////////////////////////
// tickBtn
// trashBtn
