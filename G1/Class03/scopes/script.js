let name = "Trajan";

function printMessage() {
    let message = "Hello world";
    console.log(name);
    console.log(message);
}

function sum(num, num1) {
    return num + num1;
}

printMessage();
// console.log(message);



// GLOBAL SCOPE

let globalVariable = 1;

function localScope() {
    //FUNCTION SCOPE
    let functionLocalScopeVarible1 = 2;

    if (true) {
        // FIRST IF SCOPE
        let ifVariable = 3;

        if(true) {
            // SECOND IF SCOPE
            let secondIfScopeVariable = 4;
            console.log("Global scope");
            console.log(globalVariable);
            console.log("Function scope");
            console.log(functionLocalScopeVarible1);
            console.log("First if scope");
            console.log(ifVariable);
            console.log("local if scope");
            console.log(secondIfScopeVariable);
            
        }
    }

    console.log("Global scope");
    console.log(globalVariable);
    console.log("Function scope");
    console.log(functionLocalScopeVarible1);
    // ERROR FROM HERE
    console.log("First if scope");
    console.log(ifVariable);
    console.log("local if scope");
    console.log(secondIfScopeVariable);

}


// localScope();

let message = "Welcome message";
function welcomeMessage(message) {
    // let message = ""; // we cannot do this

    function secondWelcomeMessage() {
        let message = "";
    }
}













