

let expr1 = 4 < 7; // true
let expr2 = 5 != 8; // true
console.log(expr1);
console.log(expr2);

let a = 10;
let b = 12;
let expr3 = a > b; // false

let expressionAnd = expr1 && expr2 && expr3; // true && true && false - false

let expressionOr = expr1 || expr2 || expr3; // true || true || false -> true

let complexExpr = (5 > 2) && (3 <= 7) && (5 != 6); // true && true && true => true

let sumCheck = ((5 + 2) >= (10 - 7)) && (5 > 5); // (7 >= 3) && false => true && false => false








// Truthy and Falsy

let adcd = 1;
let s = 3;

// let test = (5 = 7);
                        // true  && 1 => 1 => truthy
let notValidExpression = (5 > 3) && (s = adcd); // true
let validExpression = (5 > 3) && (s === adcd); // false
console.log(notValidExpression);
console.log(validExpression);



let expression1 = "Trajan" || "Filip" || "Martin" && 0;
let expression2 = 10 && [] && "Trajan" && {} && true;

let broj;
let nullValue = null;
        // undefined && null => undefined
console.log(broj && nullValue);


let num = 5;
let num2 = "5";

console.log(num == num2);
console.log(num === num2);

console.log(num != num2);
console.log(num !== num2);