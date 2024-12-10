console.log("It is working!");

//Functions Recap

//Definition
function createFullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  //Returning without a variable
  //   return `${firstName} ${lastName}`;
  return fullName;
}

//Execution - Calling
let fullNameOne = createFullName("Borche", "Borisovski");

console.log(fullNameOne);

//Default params
function calculateTax(income, taxRate = 18) {
  console.log("This is the tax rate", taxRate);
  return income * (taxRate / 100);
}

console.log(calculateTax(10000));
console.log(calculateTax(10000, 20));

/*
 Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.
 */

let result = 30 * (119.95 + 119.95 * (5 / 100));

function calculatePhoneTax(numberOfPhones, phonePrice, taxRatePercent) {
  return numberOfPhones * (phonePrice + phonePrice * (taxRatePercent / 100));
}

console.log(calculatePhoneTax(30, 119.95, 5));
console.log(calculatePhoneTax(100, 1000, 20));

/*
Write a function named calculateAge that: ✔️
takes 2 arguments: birth year, current year.✔️
calculates the age based on those years. ✔️
outputs the result to the screen like so: "You are NN years old"✔️
Call the function three times with different sets of values.✔️
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.✔️
*/

let currentYear = new Date().getFullYear();

function calculateAge(birthYear, currentYear) {
  let age = currentYear - birthYear;

  return `You are ${age} years old`;
}

console.log(calculateAge(1992, currentYear));
console.log(calculateAge(2000, currentYear));
console.log(calculateAge(2004, currentYear));

function calculateAgeBonus(birthYear) {
  if (Number.isNaN(Number(birthYear))) {
    return `Invalid Input`;
  }

  let currentYear = new Date().getFullYear();

  let age = currentYear - birthYear;

  return `You are ${age} years old`;
}

console.log(calculateAgeBonus(1992));
console.log(calculateAgeBonus(2000));
console.log(calculateAgeBonus(2004));
console.log(calculateAgeBonus("asdasd"));

//Advanced and short way to write this
const calcAge = birthYear =>
  `You are ${new Date().getFullYear() - birthYear} years old`;

console.log(calcAge(1992));
