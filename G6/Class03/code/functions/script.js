console.log("==================== FUNCTIONS ====================");
// Benefits of using functions:
// 1) Reusability
// 2) Modularity (break larger code into smaller manageable parts)
// 3) Readability

console.log();
console.log("========= Function Declaration =========");

// function DECLARATION base syntax
function name(parameter1, parameter2) {
    // function body => the code that will be executed when the function name is called
}
// function => keyword for declaring functions
// name => the name of the function (what that particular function does)
// parameters => values that are used within the function (in the function body)

// function without parameters
function greet() {
    console.log("Hello from Qinshift Academy !");
}

console.log();
console.log("========= Function Execution =========");
// calling the previously declared function
// syntax for execution:
// functionName() or if it has parameters functionName(parameter1, parameter2...)

greet();
greet();
greet();
// can be called as many times as you need
