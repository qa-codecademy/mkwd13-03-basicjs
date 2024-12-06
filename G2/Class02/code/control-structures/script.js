console.log("================== CONTROL STRUCTURES ==================");
// 1) Conditional Statements
// 2) Switch Statement
// 3) Looping Structures

// Purpose: Control the flow of a program *

console.log();
console.log("============ CONDITIONAL STATEMENTS ============");

let num = -5;

// Example: Program to check wether a given number is positive, negative or zero

console.log("====== IF statement ======");
// Base Syntax
//if (boolean statement) {
// code ...
// this code is executed only if the boolean statement is true !
//}

if (num > 0) {
    console.log(`The number ${num} is positive`)
}


console.log("====== ELSE statement ======");
// must come after if or else if statements
// else {   won't work like this

// }

// num = 12421;
if (num > 0) {
    console.log(`The number ${num} is positive`)
} else {
    console.log(`The number ${num} is NOT positive`)
}


console.log("====== ELSE IF statement ======");
num = -10;
if (num > 0) {
    console.log(`The number ${num} is positive`);
} else if (num < 0) {
    console.log(`The number ${num} is negative`);
} else {
    console.log("The number is zero");
}

if (num < -5) {
    console.log("Number is smaller than -5");
}

num = 101;
if (num > 100) {
    console.log("The number is larger than 100");
} else if (num > 0) {
    console.log(`The number ${num} is positive`);
} else if (num < 0) {
    console.log(`The number ${num} is negative`);
} else {
    console.log("The number is zero");
}

// the order of the if-else statements matters !!! You should go from more specific to less specific cases
if (num > 0) {
    console.log(`The number ${num} is positive`);
} else if (num > 100) {
    // this code will never be executed since any number that is > 100 is also > 0 (the previous if-statement)
    console.log("The number is larger than 100");
} else if (num < 0) {
    console.log(`The number ${num} is negative`);
} else {
    console.log("The number is zero");
}


console.log();
console.log("============ GETTING AN INPUT ============");
// Everything you get from the screen is of type STRING !!!!!
// The prompt() function can be used to ask the user for input

let input = prompt("Enter a number:");
// if we click Cancel the value of the input is null
console.log(input);
console.log(typeof input);

// we use parseInt() function to convert something into a number
console.log("After parsing the input into integer");
let parsedNumber = parseInt(input);
console.log(parsedNumber);
console.log(typeof parsedNumber);

if (Number.isNaN(parsedNumber)) {
    alert("You've entered an invalid number!");
} else {
    alert(`The parsed number value is ${parsedNumber}`)
}