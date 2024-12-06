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


console.log();
console.log("====== Greeting Students ======");
// console.log("Hello Aleksandra, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Bojan, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Daniel, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Dario, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Ivan, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Ivan, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Kostadin, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Kristijan, Qinshift Academy wishes you happy holidays!")
// console.log("Hello Ljubisha, Qinshift Academy wishes you happy holidays!")

// function with one parameter
// studentName is a placeholder for a value that will be passed when the function greetStudent is called
function greetStudent(studentName) {
    // using the parameter in the function logic
    console.log(`Hello ${studentName}, Qinshift Academy wishes you happy holidays!`);
}

greetStudent("Bob Bobsky");
greetStudent("Aleksandra");
greetStudent("Bojan");
greetStudent(); // will get undefined for the studentName variable if we don't send name as an argument(parameter)


console.log("");
console.log("========= Function that returns a value =========");
// using the keyword 'return'
// NOTE: the execution of the code ends with the return (the code after that doesn't execute)

function sum(number1, number2) {
    let result = number1 + number2;
    return result;
    // UNREACHABLE CODE !!!
    console.log(`The result is ${result}`);
}


sum(10, 20) // Nothing happens (the code is executed but we do nothing with the result)
// when we return a value we can assign it to a variable ***
let result = sum(10, 20);
console.log("The result is " + result);
console.log("The result is " + sum(30, 20));


// Example : Function for getting number statistics

function getNumberStats(number) {
    // inside the body of a function we can write any JavaScript code we want
    if (number === 0) {
        return "Zero";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Positive";
    }
    return "Invalid number!"
}

let inputNumber = 123;
let numberStats = getNumberStats(inputNumber);
console.log(`The number ${inputNumber} is ${numberStats}`);


console.log("");
console.log("========= Function Parameters =========");
// *Parameters* => the variables used in the function declaration (num1, num2, num3 )
function logNumbers(num1, num2, num3) {
    console.log(num1, num2, num3);
}

// *Arguments* => the variables used when the function is executed (2, 5 ,6)
logNumbers(1, 2, 3)
logNumbers(); // num1 = undefined, num2= undefined, num3 = undefined
logNumbers(10, 20); // num1 = 10, num2 = 20, num3 = undefined
// logNumbers(3, , 5) // ERROR
logNumbers(30, 50, "tekst")
logNumbers(324, 34, 343, 3434, 33434);
// THE EXTRAS ARE IGNORED !

// Default Parameters
function logData(data1, data2, data3 = "TEST DEFAULT") {
    console.log(data1, data2, data3);
}
logData("test 1", "test 2")


console.log("");
console.log("============== JavaScript Built-in Functions ==============");

// # console.log()
// # prompt()
// # alert()
// # parseInt(string) => parses a string and returns an integer
// # parseFloat(string) => parses a string and returns a floating-point number.
// # Number(value) => converts a value into a number ***
// # Boolean(value) =>  converts a value to a boolean
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
// # String(value) => converts a value to a string;
let numberToString = String(13412);
console.log(numberToString);
// # ... many more ...


console.log("");
console.log("============== Ways of parsing strings into numbers ==============");

// 1) parseInt(value)
console.log(parseInt("3.55")); // 3
// 2) parseFloat(value)
console.log(parseFloat("3.55")); // 3.55
// 3) Number(value)
console.log(Number("3.55"));  // 3.55
// 4) Using the plus '+' operator
let numberToParse = "3.55"; // 3.55
let parsedNumber = +numberToParse;
console.log(parsedNumber);