// ========= VARIABLES =========
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list");
const todoItems = [];

// ========= FUNCTIONS =========
function Todo(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
}

function addNewTodo() {
    const todoInputValue = todoInput.value;
    console.log(todoInputValue);
    // if (todoInputValue === "") {
    if (!todoInputValue) {
        alert("Please enter value")
        return;
    }

    const newTodo = new Todo(todoInputValue, false);

    todoItems.push(newTodo);
    todoInput.value = "";
}

function renderTodos() {
    todoList.innerHTML = "";
    let htmlBuilder = "";
    for (let i = 0; i < todoItems.length; i++) {
        let todo = todoItems[i];
        // todoList.innerHTML += `<li>`
        htmlBuilder += `<li>`
        if (todo.isCompleted) {
            htmlBuilder += `
                <input type="checkbox" checked>
                <span><del>${todo.name}</del></span>
            `
        } else {
            htmlBuilder += `
                <input type="checkbox">
                <span>${todo.name}</span>
            `
        }
        htmlBuilder += `</li>`
    }

    todoList.innerHTML = htmlBuilder;

}


// ========= EVENTS =========
addTodoBtn.addEventListener("click", function (event) {
    console.log(event);
    // event.preventDefault();
    // Logic for adding new Todo
    addNewTodo();

    // Logic for displaying Todos
    renderTodos();
})