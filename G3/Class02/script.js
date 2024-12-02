console.log("Hello from script.js");

let x = "Hello World";

console.log(typeof x);

x = 55;

console.log(typeof x);

// Strings

console.log("Hello" + " " + "G3");

let helloGreeting = "Hello";
let qaLocation = "from Qinshift Academy";

let greeting = helloGreeting + " " + qaLocation;

console.log(greeting);

// numbers with strings

let firstNumber = 10;
let secondText = "example";

let mixedResult = firstNumber + secondText;
console.log(typeof mixedResult);
console.log(mixedResult);

let number1 = 10;
let number2 = "12";

let numberResult = number1 + number2;

console.log(typeof numberResult);
console.log(numberResult);

let academyName = "Qinshift Academy";
let groupNumber = "G3";
let fullSentence = `I'm a student in ${academyName} in group ${groupNumber}`;

console.log(fullSentence);

let greetMessage = "Hello I'm Ivan";
let badGreetMessage = "Hello I'm Ivan";

let firstName;
console.log(firstName);
let lastName = "Apostolovski";

console.log(firstName + lastName);

firstName = "Ivan";
console.log(firstName);

console.log(firstName + lastName);

console.log("====================================================");

// Special numbers

let numberOperationOne = 1 / "test";
console.log(numberOperationOne);
console.log(typeof numberOperationOne);

console.log(numberOperationOne == NaN);

let regularWord = "Working with numbers in JS lol";

console.log(isNaN(numberOperationOne));

console.log(isNaN(regularWord));

console.log(Number.isNaN(regularWord));

// working with infinity (i hope you don't have to)
console.log(Number.MAX_SAFE_INTEGER);

let infinity = Infinity;
console.log(infinity);
let maxSafeNumber = Number.MAX_SAFE_INTEGER;

console.log(infinity > maxSafeNumber);

// Logical operators

let comparator1 = 50;
let comparator2 = 80;

console.log(comparator1 === comparator2);
console.log(comparator2 > comparator1);

let comparator3 = "55";
let comparator4 = 55;

// don't do this (or atleast try not to)
console.log(comparator3 == comparator4);

// correct way
console.log(comparator3 === comparator4);

let numOne = 5;
let numTwo = 10;
let numThree = 15;
let numFour = 15;

let expressionResult = numOne + numTwo >= numThree + numFour;
console.log(expressionResult);

let expressionResult2 = numTwo + numFour >= numOne + numThree;
console.log(expressionResult2);

// AND
console.log("===================================================");
console.log("AND");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// OR
console.log("OR");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Negation (NOT)
console.log("NOT");
console.log(!true); // false
console.log(!false); // true
console.log(!""); // true
console.log(![]); // false
console.log(!{}); // false
console.log(!!{}); // true
console.log(Boolean({})); // this is extremely extra - we'll come back to this eventually

// console.log(!!"asdsabdsvsdf");

// Comparison
console.log("Comparison");
let comparisonOne = 4 < 7;
// strict INEQUALITY
let comparisonTwo = 5 !== 8; // !== works the same way as strict EQUALITY
let compNumOne = 5;
let compNumTwo = 9;

let comparisonThree = compNumOne > compNumTwo;

console.log(comparisonTwo);
console.log(comparisonThree);

let finalExpression = comparisonOne && comparisonTwo && comparisonThree;
console.log(finalExpression); // false

let orFinalExpression = comparisonOne || comparisonTwo || comparisonThree;
console.log(orFinalExpression); // true

let complexExpression = 5 < 2 && 2 >= 3;
console.log(complexExpression); // false

console.log("Dog" && "Cat"); // Cat
console.log(-0 && ""); // -0
console.log(-0 || ""); // ""
