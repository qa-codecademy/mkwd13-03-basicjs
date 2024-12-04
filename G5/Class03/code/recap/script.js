console.log("Connected");

// console.log(isNaN(123)); // DALI NE E BROJ

// let someValue = "good day";
// let convertedSomeValue = parseInt(someValue);
// console.log(convertedSomeValue) // NaN

// under the hood it tried to parse 'hello' and while parsing it returned NaN and that's why it returned true
console.log(isNaN('hello')) // NaN true
// console.log(isNaN('123')); // false

// console.log('NUMBER.isNaN') 
// console.log(Number.isNaN(123)) // false
// console.log(Number.isNaN('hello')) // false
// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN(convertedSomeValue)) // convertedSomeValue = NaN => true

// // NaN => not a number
// // Number.IsNaN => TRUE => NaN

// // NUMBER === NaN

// // NaN

let userInput = prompt('How old are you?');
console.log(typeof userInput); // string
let parsedUserInput = parseInt(userInput) // parsing from string to number
console.log(typeof parsedUserInput); // number
console.log('parrsed user input', parsedUserInput)

// Number.isNaN will return true ONLY IF as value gets NaN
if(Number.isNaN(parsedUserInput)){
    console.log('Please enter a number value')
}
if(parsedUserInput >= 18){
    console.log('You may enter disco')
}else {
    console.log('Call you big sister or brother to smuggle you in')
}