let a = 5 - "abc";
console.log("Value of a: ");
console.log(a);
console.log("Type of a: ");
console.log(typeof(a));

console.log(a == NaN);
console.log(a === NaN);

console.log("-------");
let isValidNumber = isNaN(a);
console.log(isValidNumber);

let text = "test";
let isValidNan = isNaN(text);
console.log(isValidNan);

console.log("-------");

console.log(Number.isNaN(a));
console.log(Number.isNaN(text));


let maxNumber = Infinity;
let minNumber = -Infinity;
console.log("---------------------------------------")
console.log(maxNumber);
console.log(minNumber);
console.log(typeof(maxNumber));