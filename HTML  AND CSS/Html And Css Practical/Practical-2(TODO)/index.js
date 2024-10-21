let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoItemContainer = document.getElementById("todoItemContainer");
let addTodoButton = document.getElementById("addTodoButton");
let sortButtonEl = document.getElementById("dropdownMenuButton");

let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1,
  },
  {
    text: "Learn CSS",
    uniqueNo: 2,
  },
  {
    text: "Pavan Sai",
    uniqueNo: 3,
  },
  {
    text: "Java Script",
    uniqueNo: 4,
  },
];

// console.log(todoList.sort());
// sortButtonEl.addEventListener("click", function () {
//   console.log(sortButtonEl.value);
// });

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId,todoId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");
  


}


function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.addEventListener("click", function (event) {
    onTodoStatusChange(checkboxId, labelId,todoId);
  });

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  // let dropdownContainer = document.createElement("div");
  // labelContainer.appendChild(dropdownContainer);
  // labelContainer.dropdownContainer.innerHTML(
  //   `<select id="dropdownMenuButton"><option value="Ascending">Ascending</option><option value="Descending">Descending</option></select>`
  // );

  //For Delete Icon
  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);

  //For Edit Icon
  let editIconContainer = document.createElement("div");
  editIconContainer.classList.add("edit-icon-container");
  labelContainer.appendChild(editIconContainer);
  let editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit", "edit-icon");

  editIcon.onclick = function () {
    let labelElement = document.getElementById(labelId);
    let currentText = labelElement.textContent;
    labelElement.innerHTML = "";

    let inputEdit = document.createElement("input");
    inputEdit.value = currentText;
    inputEdit.classList.add("form-control");
    labelElement.appendChild(inputEdit);
    inputEdit.focus();
    inputEdit.onblur = function () {
      labelElement.textContent = inputEdit.value;
      inputEdit.remove();
      updateTodoList(inputEdit.value, todo.uniqueNo);
    };
  };

  editIconContainer.appendChild(editIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };

  createAndAppendTodo(newTodo);
  userInputElement.value = "";
  todoList.push(newTodo);
}

addTodoButton.addEventListener("click", function () {
  onAddTodo();
});

//for update todo list
function updateTodoList(value, uniqueNo) {
  todoList.forEach((todo) => {
    if (todo.uniqueNo === uniqueNo) {
      todo.text = value;
    }
  });
}

//for sort
sortButtonEl.addEventListener("click", function () {
  let selectedOption = sortButtonEl.value;
  if (selectedOption === "Ascending") {
    todoList.sort((a, b) => a.text.localeCompare(b.text));
    todoItemsContainer.innerHTML = "";
    for (let todo of todoList) {
      createAndAppendTodo(todo);
    }
  } else if (selectedOption === "Descending") {
    todoList.sort((a, b) => b.text.localeCompare(a.text));
    todoItemsContainer.innerHTML = "";
    for (let todo of todoList) {
      createAndAppendTodo(todo);
    }
  }
});
