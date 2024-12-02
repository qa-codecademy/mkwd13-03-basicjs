//AND

console.log("==AND==");
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

console.log("==OR==");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//Negation
console.log("==Negation==")
console.log(!true); //false
console.log(!false); //true

//COMPARISON
console.log("==Comparison==");

let comp1 = 4 < 7; //true
let comp2 = 5 !== 8; //true
let sideA = 10;
let sideB = 11;
let comp3 = sideA > sideB; //false

let expression = comp1 && comp2 && comp3; //true && true && false --> false
console.log(expression);

let expression2 = comp1 || comp2 || comp3;//true && true && false --> true
console.log(`expression2: ${expression2}`);

let expression3 = (comp1 && comp2) || comp3;
console.log(expression3);//true
let expression4 = comp1 && (comp2 || comp3);
console.log(expression4);//true

//TRUTHY/FALSY VALUES
console.log("==TRUTHY/FALSY VALUES==");

console.log(true && false && true); //false
console.log(true && "" && false);// empty string
console.log(true && 123 && "Dog"); //Dog

console.log("Dog" && 2); //2

console.log(NaN && 0 && ""); //NaN


console.log("Dog" || 123 || ""); // Dog
console.log("" || 0 || null); //null
console.log(0 || "Dog" || null); //Dog

console.log(!""); //true

console.log(!!true); //1. !true ->false 2. !false --> true

console.log(!!"Dog");//true
console.log(!!""); //false
console.log(!!0); //false



