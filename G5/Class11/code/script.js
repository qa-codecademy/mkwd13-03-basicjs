const todoForm = document.getElementById("todo-form");
const addTodoBtn = document.getElementById('add-todo');

const TODOS_URL = "https://gist.githubusercontent.com/dzocespd/2d9c12433efe52b91a3b426677027377/raw/8dd9c27cf42fe5a7641dc8c2a4757f2486baaeb6/todos.json";

// AJAX
// function getTodosAJAX(){
//     $.ajax({
//         url: TODOS_URL,
//         // WILL EXECUTE ONLY IF THE REQUEST WILL SUCCEED
//         success: function(result){
//             // result => will contain the data returned from the accessing of exernal resourse (API REQUEST)
//             console.log("Success accessed external resource");

//             console.log(result) // STRINGIFIED JSON
//             console.log(typeof result) // STRING

//             const parsedResult = JSON.parse(result);
//             console.log(parsedResult) // OBJECT

//             let todos = parsedResult.todos
//             console.log(todos)

//             // CALL A FUNCTION THAT WILL PRINT THE RESULT

//             displayTodos(todos)
//         },
//         error: function (){
//             console.error('ERROR HAPPENED')
//             // HANDLE ERROR HERE
//             // MAYBE SHOW THE USER SOME USER-FRIENDLY MESSAGE
//             // THAT SOMETHING WENT WRONG
//         }
//     })
// }

// getTodosAJAX()

// FETCH

let todosStore;

function getTodosFETCH() {
    let response = fetch(TODOS_URL)
    response
        .then(function (result) {
            console.log(result) // RAW RESULT
            let text = result.text()
            console.log(text)
            return text
        })
        .then(function (jsonResult) { // THIS RESULT HERE IS THE VALUE RETURNED FROM THE 1ST *THEN*
            console.log(jsonResult)
            let parsedResult = JSON.parse(jsonResult);
            console.log(parsedResult)
            let todos = parsedResult.todos;
            todosStore = todos;
            displayTodos(todos)
        })

}

getTodosFETCH();

function addClass(element, className) {
    element.classList.add(className)
};

function displayTodos(listOfTodos) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ''; // WILL CLEAN THE HTML ON EACH DISPLAY TODO CALL

    for (let i = 0; i < listOfTodos.length; i++) {
        let todo = listOfTodos[i]
        console.log(todo)
        let listItem = document.createElement('li');
        addClass(listItem, 'todo-item')
        let todoText = document.createElement('span');

        // SAME AS ABOVE BUT SHORTER
        if (todo.completed) {
            addClass(listItem, 'completed')
        }

        let completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        addClass(completeButton, 'complete-btn')

        completeButton.onclick = function () {
            if (!todo.completed) {
                todo.completed = true;
                addClass(listItem, 'completed')
            } else {
                todo.completed = false
                listItem.classList.remove('completed')
            }

        }


        todoText.textContent = todo.title;
        listItem.appendChild(todoText)
        listItem.appendChild(completeButton)

        todoList.appendChild(listItem)
    }
}


function Todo(id, title){
    this.id = id
    this.title = title
    this.completed = false
}

// CREATE TODO FUNCTIONALITY

// addTodoBtn.addEventListener("click", function(event){
//     event.preventDefault()
//     console.log('click')
// })


todoForm.addEventListener("submit", function(event){
    event.preventDefault() // PREVENTS THE DEFAULT BEHAVIOUR ON THE FORM
    

    const todoTitleInput = document.getElementById('new-todo');
    const todoTitle = todoTitleInput.value.trim();

    if(todoTitle === ""){
        alert('Invalid input')
        return
    }

    // Create a new object of the Todo constructor function
    const todo = new Todo(todosStore.length + 1, todoTitle)
    console.log(todo)
    todosStore.push(todo)
    displayTodos(todosStore)
    todoTitleInput.value = ''
    
})