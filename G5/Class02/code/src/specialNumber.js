let sideA = 10 / "ten";
console.log(sideA); //NaN
console.log(typeof sideA); //number

console.log("one" * 1); //NaN

console.log(sideA == NaN); //false
console.log(sideA === NaN); //false


console.log(isNaN(12)); //false
console.log(isNaN(sideA)); //true
console.log(isNaN("123")); //false
console.log(isNaN("Text")); //true

console.log(Number.isNaN(sideA)); //true
console.log(Number.isNaN("123")); //false
console.log(Number.isNaN("Text")); //false
console.log(Number.isNaN(NaN)); //true

let sideB = 0;
let sideC = 10;
let result = sideC / sideB;
console.log(result);
console.log(typeof result); //number

let sideD = -Infinity;
console.log(sideD);

