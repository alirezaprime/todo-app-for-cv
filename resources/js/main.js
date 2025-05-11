//roles button To exist in this app
var addBtn = document.querySelector("#add");
var inputValue = document.querySelector("#item");
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

// اجرای تابع با کلیک روی دکمه
addBtn.addEventListener("click", addItem);

// اجرای تابع با فشردن Enter در input
inputValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

// tickBtn
// trashBtn
