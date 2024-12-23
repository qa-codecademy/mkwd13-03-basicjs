console.log("Functions is online");

let grade = 100;

// if (grade === 1) {
// console.log("Both parents need to see the principal and the police");
// } else

switch (grade) {
  case 1:
    console.log("Both parents need to see the principal and the police");
    break;
  case 2:
    console.log("Only the mother needs to see the principal");
    break;
  case 3:
    console.log("Well done, could be better");
    break;
  case 4:
    console.log("Keep going, it is going to be better in college");
    break;
  case 5:
    console.log("You are well connected and you study hard kid");
    break;
  default:
    console.log("Stop cheating on your exams");
}

//*Bonus for the zodiac homework is to send a version with switch

//Function definition
function sayHello() {
  console.log("Hello from G7");
  console.log("I hope you learn functions easily");
}

// Calling a function / Function invocation
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

//Function arguments/parameters

function addTwoNumbers(numOne, numTwo) {
  console.log(`This is num one: ${numOne}`);
  console.log(`This is num two: ${numTwo}`);

  let result = numOne + numTwo;

  //!IMPORTANT
  //Functions that don't have a return statement always return undefined, be extremely careful when calling functions and befores saving a value from a function call, always check if the funtion has a return

  return result;
}

let numberOne = 130;
let numberTwo = 540;

let resultOne = addTwoNumbers(10, 20);
let resultTwo = addTwoNumbers(numberOne, numberTwo);
let resultThree = addTwoNumbers(650, 350);

console.log("result one", resultOne);
console.log("result two", resultTwo);
console.log("result three", resultThree);

console.log(addTwoNumbers(50, 150));

console.log(addTwoNumbers(150, 440));

//Exercise One Solution
let exerciseNumOne = 560;
let exerciseNumTwo = 120;

// Function that subtracts 2 numbers
function subtractTwoNumbers(numOne, numTwo) {
  return numOne - numTwo;
}
// Function that multiplies 2 numbers
function multiplyTwoNumbers(numOne, numTwo) {
  return numOne * numTwo;
}
// Function that divides 2 numbers
function divideTwoNumbers(numOne, numTwo) {
  return numOne / numTwo;
}

console.log(addTwoNumbers(exerciseNumOne, exerciseNumTwo));
console.log(subtractTwoNumbers(exerciseNumOne, exerciseNumTwo));
console.log(multiplyTwoNumbers(exerciseNumOne, exerciseNumTwo));
console.log(divideTwoNumbers(exerciseNumOne, exerciseNumTwo));

//Default params should always be at the end of the paramater list in the definition of the function
function printPersonInfo(firstName, lastName, country = "Macedonia") {
  console.log(`Hello to ${firstName} ${lastName} from ${country}`);
}

printPersonInfo("John", "Doe", "USA");
printPersonInfo("Jane", "Doe", "Germany");

//Scope

let firstName = "John";

function sayMyName() {
  let firstName = "Jane";
  console.log(firstName);
}

console.log(firstName);

sayMyName();
console.log(firstName);

let playerHealth = 1000;

function boostPlayerHealth() {
  playerHealth = playerHealth + 500;
  console.log("Inside function", playerHealth);
}

console.log("Outside Function", playerHealth);
boostPlayerHealth();

function generateEnergy() {
  //!AVOID DECLARING VARIABLES LIKE THIS AS THIS IS GOING TO CREATE AN UNINTENTED GLOBAL VARIABLE AND THAT CAN BE VERY NASTY TO DEBUG
  energy = 1000;
}

generateEnergy();
console.log(energy);

let message = "Outside the function";
//Parameters only belong to their function and they are function scoped
function warning(message) {
  console.log(message);
}

warning("Inside the function"); //Inside the function
console.log(message); //Outside the function

//Exercise 2 solution

// Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Fahrenheit to Celsius formula: (5/9) * (Fahrenheit-32);

function celsiusToFahrenheit(tempInCelsius) {
  let result = tempInCelsius * 1.8 + 32;

  return result;
}

function fahrenheitToCelsius(tempInFahrenheit) {
  let result = (5 / 9) * (tempInFahrenheit - 32);

  return result;
}

console.log(celsiusToFahrenheit(32));
console.log(fahrenheitToCelsius(89.6));
