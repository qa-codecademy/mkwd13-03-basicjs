
// ===== Function declaration =====

function sayHello() {
    console.log("Hello there!");
}

// ===== Calling a function to be executed =====
sayHello();
sayHello();
sayHello();


function sayGoodBye() {
    console.log("Goodbye! See you next week!");
}
sayGoodBye();



function addTwoNumbers() {
    let firstNum = 22;
    let secondNum = 324;
    let result = firstNum + secondNum;
    console.log(`The sum of the two numbers is ${result}`);
}
addTwoNumbers();
addTwoNumbers();
addTwoNumbers();

function sumTwoNumbers() {
    let firstNum = parseInt(prompt("Please enter first number:"));
    let secondNum = parseInt(prompt("Please enter second number:"));
    let result = firstNum + secondNum;
    console.log(`The sum of the two numbers is ${result}`);
}
// sumTwoNumbers();



// ===== Functions with input parameters (arguments) =====
function sayMyFullName(firstName, lastName) {
    document.write(`${firstName} ${lastName}`);
}
sayMyFullName('Martin', 'Panovski');
sayMyFullName('Slave', 'Ivanovski');

// Write a function called greetPerson
// It should take 1 parameter called personName
// It should print in the console Hello there 'personName'

function greetPerson(personName) {
    console.log(`Hello there ${personName}`);
}
// greetPerson(10);
// greetPerson('Slave');
// greetPerson(true);

// ===== Functions that returns values =====

function returnValue(value){
    return value;
}

console.log(returnValue("This will be returned!"));


function greetSomeone(personName){
    let greeting = `Hello there ${personName}`;
    return greeting;
}
console.log(greetSomeone('Slave'));
console.log(greetSomeone('Simona'));

let greetMessage = greetSomeone('Angel');
console.log(greetMessage);
alert(greetMessage);



// ===== Parameter missmatch =====

function sayMyNameAndYears(firstName = 'Martin', lastName = 'Panovski', years = 31){
    console.log(`${firstName} ${lastName} is ${years} years old!`)
}

sayMyNameAndYears('Martin', 'Panovski', 31);
sayMyNameAndYears(31, 'Martin', 'Panovski');
sayMyNameAndYears('Slave', 'Ivanovski', 21, true, "something else", 100);
sayMyNameAndYears('Angel', 'Ivanovski');
sayMyNameAndYears('Filip');

alert("test")

function myCustomAlert(message){
    alert(message);
}
myCustomAlert("Hello there!");
let myNum = Number("22");
console.log(typeof(myNum));
let myString = String(22);
console.log(typeof(myString));


let car = 'Ford Mustang';

function drive(myCar){
    console.log(`I am driving ${car}`);

    console.log(`I am driving ${myCar}`);
}

drive('Opel Astra');
drive();