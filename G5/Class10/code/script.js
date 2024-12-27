console.log('Connected');

let person = {
    firstName: 'Bob',
    lastName: 'Bobski',
    age: 29
};

console.log(person);
console.log(person.firstName);

console.log('--- JSON ---')
let stingifiedPerson = JSON.stringify(person);
console.log(stingifiedPerson);
console.log(typeof stingifiedPerson);
console.log(stingifiedPerson.firstName); // undefined, this is string, we cannot access the properties of the stringified JSON


let parsedPerson = JSON.parse(stingifiedPerson);
console.log(parsedPerson);
console.log(typeof parsedPerson);
console.log(parsedPerson.firstName);

const TODOS_URL = "https://gist.githubusercontent.com/dzocespd/2d9c12433efe52b91a3b426677027377/raw/8dd9c27cf42fe5a7641dc8c2a4757f2486baaeb6/todos.json";

// AJAX
function getTodosAJAX(){
    $.ajax({
        url: TODOS_URL,
        // WILL EXECUTE ONLY IF THE REQUEST WILL SUCCEED
        success: function(result){
            // result => will contain the data returned from the accessing of exernal resourse (API REQUEST)
            console.log("Success accessed external resource");

            console.log(result) // STRINGIFIED JSON
            console.log(typeof result) // STRING

            const parsedResult = JSON.parse(result);
            console.log(parsedResult) // OBJECT

            let todos = parsedResult.todos
            console.log(todos)

            // CALL A FUNCTION THAT WILL PRINT THE RESULT

            displayTodos(todos)
        },
        error: function (){
            console.error('ERROR HAPPENED')
            // HANDLE ERROR HERE
            // MAYBE SHOW THE USER SOME USER-FRIENDLY MESSAGE
            // THAT SOMETHING WENT WRONG
        }
    })
}

getTodosAJAX()

// FETCH


/**
 * 1. CREATE A FUNCTION NAMED displayTodos; => DONE
 * 2. THIS FUNCTION SHOULD ACCEPT ONE PARAMETER THAT IS LIST OF TODOS; => DONE
 * 3. ITERATE THROUGH THE ARRAY OF TODOS AND EACH TODO CREATE A LIST ITEM (li) => DONE
 * 4. ADD EACH TODO (li) IN THE UNORDERED LIST => DONE
 */

function displayTodos(listOfTodos){
    const todoList = document.getElementById("todo-list");


    for(let i = 0; i < listOfTodos.length; i++){
        let todo = listOfTodos[i]
        console.log(todo)
        let listItem = document.createElement('li');
        
        // APPROACH #1
        let todoText = document.createElement('span');
        todoText.textContent = todo.title;
        listItem.appendChild(todoText)


        // APPROACH #2
        // APPEND TEXT INTO LIST-ITEM
        // listItem.innerText = todo.title


        // APPEND LIST-ITEM INTO UNORDERED LIST
        todoList.appendChild(listItem)
    }
}