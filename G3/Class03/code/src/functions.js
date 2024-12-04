// Function declaration without parameters
function greeting() {
  console.log("Hello, welcome back!");
}
// code
// code
// I want to greet the user
// Function execution
greeting();

// Function declaration with parameters
function greetUser(firstName, lastName) {
  console.log(`Hello, welcome back ${firstName} ${lastName}!`);
}

greetUser("Aneta", "Stankovska");
greetUser("Ivan", "Apostolovski");

// Make coffee example
// With default parameter
// Default parameters always come last in the list of parameters
function makeCoffee(cofeePowder, liquid = "water") {
  let coffee = `Here is your coffee made with ${cofeePowder} and ${liquid}`;
  console.log(coffee);
}
// console.log(coffee); // This will throw an error

makeCoffee("arabica", "water");
makeCoffee("robusta");

// Parameters are placeholders in the function definition
// Arguments are actual values that we pass to the function when we inttend to call it

console.log("======================");
// Function that returns a value
function greetUserReturn(firstName, lastName) {
  let message = `Hello, welcome back ${firstName} ${lastName}!`;
  // Return stops the execution of the code inside the function
  return message;
  console.log("Text after return");
}

let greetingMsg = greetUserReturn("Aneta", "Stankovska");
console.log(greetingMsg);
console.log("Hiiii"); // This code will be executed

// Sum of numbers
function sumOfNumbers(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  console.log(`The result is ${result}`);
  return result;
}

let varOfTypeNumber = Number("15.5");
console.log(varOfTypeNumber);
console.log(typeof varOfTypeNumber);

let varOfTypeString = String(100);
console.log(varOfTypeString);
console.log(typeof varOfTypeString);

let decimalNumber = "25.5";
let wholeNumber = "30";
let parsedDecimalNumber = parseFloat(decimalNumber);
console.log(parsedDecimalNumber);
let parsedWholeNumber = parseInt(decimalNumber);
console.log(parsedWholeNumber);
let parsedNuberWhole = parseFloat(wholeNumber);
console.log(parsedNuberWhole);
