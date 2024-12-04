let wholeNumberInput = prompt("Enter a whole number");
console.log("wholeNumberInput:");
console.log(wholeNumberInput);
console.log(typeof(wholeNumberInput));

let parsedInput = parseInt(prompt("Enter numeric input"));

// var wholeNumber = parseInt(wholeNumberInput);
// console.log("wholeNumber:");
// console.log(wholeNumber);
// console.log(typeof(wholeNumber));

let wholeNumber = +wholeNumberInput;
console.log("wholeNumber:");
console.log(wholeNumber);
console.log(typeof(wholeNumber));



let decimalNumberString = "13.4";
console.log(parseInt(decimalNumberString));

// var a = parseInt(decimalNumberString);
// console.log(a);

console.log(parseFloat(decimalNumberString));
// var b = parseFloat(decimalNumberString);
// console.log(b);

let decimalNumber = +decimalNumberString;
console.log("decimalNumber:");
console.log(decimalNumber);
console.log(typeof(decimalNumber));

let num = Number("12.5");
console.log(num);


