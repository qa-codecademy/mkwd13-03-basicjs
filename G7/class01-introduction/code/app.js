console.log("Hello from Javascript updated");

//Declaring a variable
let studentName;

//Initialization
studentName = "Viktor";

console.log(studentName);

studentName = "Ron";

console.log(studentName);

// Declaration and Initialization
let studentLastName = "Rustemi";

console.log(studentLastName);

console.log(studentName, studentLastName);

let studentAge = 31;

//Primitive data types

//Strings

let fruit = "Apple";

let fruits = "Apples\nOranges\nPears";

console.log(fruit);
console.log(fruits);

console.log(typeof fruit);

//Numbers

let numberOne = 300;
let numberTwo = 600;

console.log(numberOne, numberTwo);

console.log(typeof numberOne);

//Boolean

let isAcademyAvailable = true;
let isDiscountAvailable = false;

console.log(isAcademyAvailable, isDiscountAvailable);

//Undefined

let className;

console.log(className);

console.log(typeof className);

//NULL

let academyName = "Academy for Programming";

academyName = null;

console.log(academyName);

console.log(typeof academyName);

//Single line comment

/*
    And 
    this 
    is 
    a 
    multiline
    comment
*/

//Arithmetic operators

let numOne = 300;
let numTwo = 230;

let addResult = numOne + numTwo;

let subtractResult = numOne - numTwo;

console.log(addResult, subtractResult);

//You don't have to always create a result variable if you just need to see it in the console , just adding the math expression is enough
console.log(numOne * numTwo);
console.log(numOne / numTwo);

console.log(20 % 3);

let counter = 0;

counter++;
counter++;
counter++;
counter--;
counter--;

console.log("Counter value", counter);

//Comparison

console.log(numOne < numTwo);

console.log(numOne === numTwo);

console.log(numOne !== numTwo);

//Assignment operators

let addNumOne = 10;

// addNumOne = addNumOne + 10;

addNumOne += 10;

addNumOne *= 2;

console.log(addNumOne);
