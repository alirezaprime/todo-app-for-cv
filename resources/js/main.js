//roles button To exist in this app
var inputBtn = document.querySelector("#add");
var inputValue = document.querySelector("#item");

inputBtn.addEventListener("click", () => {
  let itemText = inputValue.value;

  if (itemText) {
    // دریافت لیست فعلی از localStorage (اگر چیزی ذخیره شده)
    let todoList = JSON.parse(localStorage.getItem("todoItems")) || [];

    // افزودن آیتم جدید به آرایه
    todoList.push(itemText);

    // ذخیره‌ی آرایه‌ی جدید در localStorage
    localStorage.setItem("todoItems", JSON.stringify(todoList));

    console.log("لیست جدید ذخیره شد:", todoList);
  }
});
// tickBtn
// trashBtn
