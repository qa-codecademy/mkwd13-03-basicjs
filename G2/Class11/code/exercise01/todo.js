// ============== VARIABLES ==============

const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list");
const todoItems = [];


// ============== FUNCTIONS ==============

// Constructor function for creating Todo objects
function Todo(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
}

// Function to add new Todo
function addNewTodo() {
    const todoInputValue = todoInput.value;
    // console.log(todoInputValue);
    // if (todoInputValue === "") { 
    if (!todoInputValue) {
        alert("Please enter value")
        return;
    }

    const newTodo = new Todo(todoInputValue, false);
    todoItems.push(newTodo);
    todoInput.value = "";
}

// Function to render todos in the UI (using innerHTML)
function renderTodos() {
    todoList.innerHTML = "";
    let htmlBuilder = "";
    for (let i = 0; i < todoItems.length; i++) {
        let todo = todoItems[i];
        // todoList.innerHTML += `<li>`
        htmlBuilder += `<li>`
        if (todo.isCompleted) {
            htmlBuilder += `
                <input type="checkbox" data-todoindex="${i}" checked>
                <span><del>${todo.name}</del></span>
            `
        } else {
            htmlBuilder += `
                <input data-todoindex="${i}" type="checkbox">
                <span>${todo.name}</span>
            `
        }
        htmlBuilder += `</li>`
    }

    todoList.innerHTML = htmlBuilder;
}

// Function to render todos in the UI (using document.createElement)
function renderTodosUsingCreateElement() {
    todoList.innerHTML = "";

    for (let i = 0; i < todoItems.length; i++) {
        const todo = todoItems[i];

        // Create the list item
        const listItem = document.createElement("li");

        // Create the checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.todoindex = i; // Attach the index as a dataset item
        checkbox.checked = todo.isCompleted; // Mark it as checked if completed

        const textSpan = document.createElement("span");
        textSpan.textContent = todo.name;

        if (todo.isCompleted) {
            textSpan.style.textDecoration = "line-through";
        }

        // Append the checkbox and text span to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(textSpan);

        // Append the list item to the todoList
        todoList.appendChild(listItem);
    }
}

// Function to toggle the completion status of a todo
function toggleTodoStatus(index) {
    const todo = todoItems[index];
    todo.isCompleted = !todo.isCompleted;
}


// ============== EVENTS ==============

addTodoBtn.addEventListener("click", function (event) {
    // event.preventDefault(); // prevents the default behaviour of the form => making http request
    console.log(event);

    // ===> Logic for adding new Todo
    // const todoInputValue = todoInput.value;
    // // console.log(todoInputValue);
    // // if (todoInputValue === "") { 
    // if (!todoInputValue) {
    //     alert("Please enter value")
    //     return;
    // }

    // const newTodo = new Todo(todoInputValue, false);
    // todoItems.push(newTodo);
    // todoInput.value = "";
    // ===> Why not separate this logic into a function for better readability and code quality...
    addNewTodo();

    // ===> Logic for displaying Todos
    if (todoItems.length > 0) {
        renderTodos();
        // renderTodosUsingCreateElement();
    }
})

todoList.addEventListener("change", function (e) {
    console.log(e.target);
    console.log(e.target.dataset);
    // 'e.target.dataset' gives access to all data-* attributes of the target element

    // 'e.target.dataset.todoindex' retrieves the value of the custom 'data-todoindex' attribute which holds the index of the corresponding todo item in the 'todoItems' array.
    // We use it to identify which todo item to update or manipulate.

    const todoIndex = e.target.dataset.todoindex;
    toggleTodoStatus(todoIndex);
    renderTodos();
    // renderTodosUsingCreateElement();
})