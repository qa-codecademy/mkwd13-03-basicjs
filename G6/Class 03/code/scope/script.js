console.log("=============== SCOPES ===============");

// GLOBAL SCOPE
// => variables and functions declared outside of any function or block have global scope
// => they can be accessed from anywhere within the scriptlet globalNumber = 2000;

function printGlobalNumber() {
    // globalNumber = 1000;
    console.log(globalNumber);
}
printGlobalNumber();


// LOCAL SCOPE (Function Scope)
// => variables/functions declared within a function have local scope, meaning they can only be accessed within that function

// Example 1
function localScope(number) {
    let localNumber = 100;
    let result = localNumber + number;
    console.log(result);
}
// console.log(localNumber); // error => not defined
localScope(200);

// Example 2
let greeting = "Hello Qinshift Academy"
function printGreeting() {
    let greeting = "Happy Holidays!"
    console.log(greeting);
}
printGreeting();

// Example 3
function outerFunction() {
    let outerVariable = "I'm from the outer function";
    // for demonstration purposes* => avoid declaring function inside other function !!!
    function innerFunction() {
        let innerVariable = "I'm from the inner function"
        console.log(outerVariable);
        console.log(innerVariable);
    }
    // console.log(innerVariable);  // error => not defined
    innerFunction();
}

outerFunction();
// innerFunction();  // error => not defined


// BLOCK SCOPE
// => variables declared with let or const within a block (inside {}) are only accessible within that block

if (50 < 100) {
    let blockNumber = 50 + 100;
    // var blockNumber = 50 + 100; 
    // 'var' behaves differently... don't use it :)
    console.log(blockNumber);
}

// console.log(blockNumber); // error => not defined