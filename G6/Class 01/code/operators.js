let a = 2;
let b = 5;

let sum = a + b;
console.log("sum:");
console.log(sum);
console.log("a:");
console.log(a);
console.log("b:");
console.log(b);
console.log(a+b);

console.log("The value of a is " + a); //concatenation

let resultDivision = b / a;
let resultModule = b % a;

console.log("B divided with a " + resultDivision);
console.log("B module a " + resultModule);

let c = 8;
console.log("c before:")
console.log(c);
c--; //this changes the value of c, as if we wrote c = c - 1
console.log("c after:");
console.log(c);

let num = 5;
console.log("num before:")
console.log(num);
num += 2; //this changes the value of num, as if we wrote num = num + 2
console.log("num after:");
console.log(num);

let result = a == b;
console.log("result");
console.log(result);
console.log("Type of result");
console.log(typeof(result));

let number = 95; //this is of type number
let stringNumber  = "95"; //this is of type string
console.log("Type of number " + typeof(number));
console.log("Type of stringNumber " +typeof(stringNumber));

// =  is used to assign a value to a variable
// == compares the values of the variables
// === compares the value and the type of the variable
console.log(number);
console.log(stringNumber);

let firstComparison = number == stringNumber; // by value -> true
console.log(firstComparison); 

let secondComparison = number === stringNumber; // by value and type -> false
console.log(secondComparison); 