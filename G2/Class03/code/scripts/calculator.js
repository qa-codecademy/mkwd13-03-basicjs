
function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}

function diff(firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    return firstNum / secondNum;
}



console.log(sum(12, 24));
console.log(sum(1326, 2324));

console.log(diff(223, 100));
console.log(diff(1223, 100));

console.log(multiply(223, 100));
console.log(multiply(12, 12));

console.log(divide(223, 100));
console.log(divide(12, 6));


let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));

console.log(sum(num1, num2));



// Write a function that will be called calculator
// It should take 3 parameters, firstNum, secondNum, operation
// "+", "-", "*", "/"
// depending of the operator, return the appropriate result
// calculator(10, 20, "+")