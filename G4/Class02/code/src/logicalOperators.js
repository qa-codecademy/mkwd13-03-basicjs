//AND
console.log("AND");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//OR
console.log('OR');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//Negation
console.log(!true); // false
console.log(!false); // true


//COMPARISON
console.log("Comparison");
let comp1 = 4 < 7;
let comp2 = 5 != 8;
let a = 5;
let b = 9;
let comp3 = a > b;
console.log(comp2);

let expression = comp1 && comp2 && comp3; // true && true && false -> false
console.log(`expression: ${expression}`);

let expression2 = comp1 || comp2 || comp3; // true || true || false -> true
console.log(`expression: ${expression2}`);

let complexExpression = ( (5 < 2) && (2 >= 3) ); // false && false
console.log(complexExpression);

//TRUTHY/FALSY values
console.log("TRUTHY/FALSY values");
console.log(true  && true);
console.log(false && (3 == 4));
console.log('Cat' && 'Dog');
console.log("false" && ""); //""
console.log('' || ""); //empty string

console.log(!""); //true
let d = true;
console.log(!!d); //1. !d -> false 2. !false -> true

let firstNum = 12;
let secondNum = "4";
console.log(secondNum < firstNum); //true

console.log("4" < "12");
console.log("5" < "Text");

console.log(5 == "5");
console.log(5 === "5");
