console.log("=================== LOGICAL OPERATORS ===================");
// Used with Boolean values or expressions ***
// Purpose: to control the flow of code execution

// OPERAND(30) OPERATOR(>) OPERAND(50) *
console.log(30 > 50); // false
console.log(30 < 50); // true

console.log();
console.log("========== Logical AND && ==========");
// && returns true if both operands are true, otherwise false
console.log(true && true);
console.log(true && false);

let num1 = 50;
let num2 = 100;
console.log(num1 < num2 && num2 === 150); // true && false => false

console.log(num1 < num2 && num2 + 50 === 150); // true

let expression = num1 < num2 && num2 <= 100 && num1 + 10 !== 60;
console.log(expression); // false


console.log();
console.log("========== Logical OR || ==========");
// || returns true if at least one of the operands is true, otherwise false
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let number1 = 3;
let number2 = 13;

console.log(number1 > number2 || number2 >= 10); // true

console.log(5 > 0 && (5 + 6 < 10) || 10 > 5);
// breakdown:
// 5 > 0 => true
// 11 < 10 => false
// 10 > 5 => true
// true && false || true
// false || true => true


console.log();
console.log("========== Logical NOT ! ==========");
// ! is an operator that negates the value of its operand

console.log(!true); // false
console.log(!false); // true

let isValid = false;
console.log(isValid); // false
console.log(!isValid); // true

let numOne = 100;
let numTwo = 1000;
console.log(!(numOne > numTwo) && "Bob" == "Bob"); // true
// 1) !(100 > 1000) => !(false) => true
// 2) Bob == Bob => true
// 3) true && true => true


console.log();
console.log("=================== EQUALITIES ===================");

// = assignment operator 
// == equality => evaluates only value*
// === strict equality => evaluates value* and type* => USED IN MOST CASES

// console.log(3 = "3"); // error
console.log(3 == "3"); // true
console.log(3 === "3"); // false => even though the values are same, the type of 3 (number) is not the same as the type of "3" (string)


console.log();
console.log("=================== TRUTHY/FALSY VALUES ===================");
// => how JavaScript interprets single values in a boolean context
/* 
    ***** FALSY VALUES *****
    - false
    - 0, -0
    - "" (empty string)
    - null
    - undefined
    - NaN (invalid number)

    ***** TRUTHY VALUES *****
    - true
    - "hello", "0", " "
    - 25
    - [ ], [ 1, "2", 3 ] (arrays)
    - { }, { a: 42 } (objects)
    - ...
*/

let numberOne = -1000;
let numberTwo = 0;

// ways to check if a single value is truthy or falsy
console.log(Boolean(numberOne)); // true
// console.log(!!numberOne); // true (fancier syntax with !! instead of Boolean()...)
console.log(Boolean(numberTwo)); // false

console.log(Boolean("")); // false
console.log(Boolean(" ")); // true

console.log(Boolean(null)); // false
console.log(Boolean(!null)); // true

// Understanding truthy and falsy values is crucial when writing conditional statements *