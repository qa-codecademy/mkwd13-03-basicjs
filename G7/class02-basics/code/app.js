console.log("It is alive!!!");

let groupNumber = "G7";

let year = 2024;

let groupName = "Qinshift Academy" + " - " + groupNumber;

console.log(`Qinshift Academy - ${groupNumber}`);

console.log(groupName);

let groupYear = groupName + " - " + year;

console.log(groupYear);

console.log(4 + "2");

let groupYearUpdated = `${groupName} - ${year}, this is all one string`;

console.log(groupYearUpdated);

let quotesText = `It's a very foggy evening in Skopje`;

console.log(quotesText);

//NAN

let whatIsThis = "John" * 320;

console.log(whatIsThis);

console.log(typeof whatIsThis);

// console.log(isNaN(whatIsThis));

//If you want to check if a value is NaN you use this
console.log(Number.isNaN(whatIsThis));

//Operators
console.log(true && true);
console.log(false || false);
console.log(!false);

const testExpression = 10 + 20 > 40 + 10 || 100 > 50;

//In expression the priority of execution is as follows:
//1. Math operators
//2. Comparison operators
//3. Logical operators

console.log("Test expression value:", testExpression);

//When logical operators use values that are not booleans

// false
// 0, -0
// "" (empty string)
// null
// undefined
// NaN (invalid number)

// If all values on the left side are true returns the right side or returns the first falsey valuex
let andExampleOne = 120 && true && "Test" && "Viktor";

let andExampleTwo = false && "Edmond";

console.log(andExampleOne, andExampleTwo);

let orExampleOne = false || "Borche";

console.log(orExampleOne);

let firstName = "John";

//One of the most common and easiest way to turn a value into a boolean in JS
console.log(!!firstName);

let numOne = 100;
let numTwo = 120;
let invalidNum = "100";

//Avoid double equals going forward
console.log(0 == "0");
console.log(0 === "0");

//Control Structures

let score = 80;

if (score > 80) {
  console.log("You won, congratulations");
} else {
  console.log("Go to vacation, and try again later");
}

//Friday cash program

let fridayCash = 15;

if (fridayCash >= 50) {
  console.log("Go out and drink!");
} else if (fridayCash >= 35) {
  console.log("Go out to a nice restaurant!");
} else if (fridayCash >= 12) {
  console.log("Grab a bus and go to City Mall!");
} else {
  console.log("Piracy is your friend!");
}

//If conditions will always be converted to booleans based on the value's truthiness
if ("Borche") {
  console.log("Borisovski");
}

//Getting user input with prompt
// let userInput = prompt("Please enter your age");

//Everthing written below a prompt will only be executed once the user submits the prompt window

// let parsedIntResult = parseInt(userInput);

// let numberResult = Number(userInput);

// console.log("This is the parse int result:", parsedIntResult);
// console.log("This is the Number result:", numberResult);

// if (Number.isNaN(parsedIntResult)) {
//   console.log("Invalid input, please enter a valid number");
// }

// console.log("This is the user input:", userInput);

//Exercise solution

let userInput = prompt("How much money do you have?");

let userMoney = Number(userInput);

if (Number.isNaN(userMoney)) {
  console.log("Invalid input, dont act smart!");
} else if (userMoney >= 50) {
  console.log("Go out and drink!");
} else if (userMoney >= 35) {
  console.log("Go out to a nice restaurant!");
} else if (userMoney >= 12) {
  console.log("Grab a bus and go to City Mall!");
} else {
  console.log("Piracy is your friend!");
}
