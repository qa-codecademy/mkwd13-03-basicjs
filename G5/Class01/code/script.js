console.log("Connected");
console.log('Hello from javascript!');

// VARIABLES IN JAVASCRIPT
// **** DECLARATION OF VARIABLE ****

let firstname;
let lastname;

// **** INICIALIZATION OF VARIABLE ****
firstname = "John";
lastname = "Doe";

console.log(firstname);
console.log(lastname);

// **** DECLARATION AND INICIALIZATION OF VARIABLE ****
// camelCase
let fullName = "Bob Bobski";
console.log(fullName);
// snake_case (kebap_case)

// VARIABLES OF THIS NAME IS UNACCEPTABLE!!!
// zzzz;
// a;
// b;
// qweqwe;

let favourite_movie = "Breaking Bad";
console.log(favourite_movie);

console.log("**** PRIMITIVE DATA TYPES ****");

// STRINGS
let favouriteFruit = "watermelon"; // string
let favouriteDrink = 'black coffee'; // string

let priceOfTv = "540"; // string;

// NUMBERS
let priceOfLaptop = 650; // number;
let personAge = 29; // number
let personWeight = 85.5; // number


// CHECKING THE TYPE OF THE VALUE;
// typeof
console.log(typeof favouriteFruit);

let typeOfPersonAge = typeof personAge;
console.log(typeOfPersonAge)

console.log(priceOfTv); // 540

console.log(typeof priceOfTv); // string

// BOOLEAN (true / false);
let isPersonAdult = true;
console.log(isPersonAdult)

let isChelseaStrong = false;
console.log(isChelseaStrong);

console.log(typeof isPersonAdult) // boolean

console.log(typeof "hey mate") // string

// UNDEFINED
let bookName = undefined;
console.log(bookName);
console.log(typeof bookName);

let redColor;
console.log(typeof redColor)

// NULL
let planetName = null;
console.log(planetName);
console.log(typeof planetName);

console.log("**** OVERWRITING VARIABLES ****");
// with 1 equals sign (=) we apply  values to the variables
let movieOne = "Lord of the Rings the return of the King";
console.log(movieOne);

// AFTER OVERWRITE
movieOne = "Avengers: Infinity War";
console.log(movieOne);

movieOne = 7;
console.log(movieOne);
console.log(movieOne);
console.log(movieOne);
console.log(movieOne);


console.log("**** ARITHMETIC OPERATORS ****");

// ADDITION
console.log(5 + 6);

let numberOne = 43;
let numberTwo = 66;
// 43 + 66;
console.log(numberOne + numberTwo)

// SUBSCRTRICTION
let substractionResult = numberTwo - numberOne;
console.log(substractionResult);

// MULTIPLICATION
let numberThree = 2;
console.log(numberOne * numberThree);

// DIVISION

let resultDivision = 100 / numberThree;
console.log(resultDivision);
console.log(100 / 33.2);

// MODULOS %
console.log(10 % 2);
console.log(15 % 4);
console.log(16 % 5);

// EXPONENTION
console.log(2 ** 3); // 2 * 2 * 2;

// INCREMENT
let numberFour = 4;
console.log(numberFour);


numberFour++ 
console.log("after increment __")
// after the incremention
console.log(numberFour);
numberFour++;
console.log(numberFour);

numberFour++;
// after decremention
numberFour--;
console.log(numberFour);


console.log('**** COMPARISON ****');
let numOne = 10;
let numTwo = 5;

console.log(10 > 5);

console.log(numOne > numTwo);

console.log(numOne < numTwo);

console.log(10 >= 10); // true
console.log(24 <= 24); // true

// EQUALITY

let areNumbersEqual = numOne == 10;
console.log(areNumbersEqual) // true

// THIS IS WRONG, HERE WE DO NOT CHECK EQUILITY
// console.log(24 = 24);

// TO CHECK EQUILITY WE USE == or ===
//WITH TWO EQUALS == WE CHECK AND COMPARE JUST THE VALUES AND NOT THE PRIMITIVE DATA TYPE OF THE VALUE
console.log("10" == 10); // true
console.log("10" == 12); // false

// WITH THREE EQUALS === WE CHECK THE VALUE + THE PRIMITIVE DATA TYPE OF THE VALUE
console.log("10" === 10); // false

// NOT EQUAL !==
console.log(12 !== 13) // true
