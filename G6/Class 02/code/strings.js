let helloGreeting = "Hello"; //double quotes
let academy = 'Qinshift'; //single quotes

console.log("Hello" + " " + "Qinshift"); //concatenation

console.log(helloGreeting + " " + academy);

let greeting =  helloGreeting + " " + academy;
console.log(greeting);
console.log(typeof(greeting));

let num = 20;
let message = "test";
let result = num + message; // 20 + "test" -> concatenation, one of the operands is a string - automatic type converstion for the number
console.log("Result: " +result);

let firstNum = 10;
let secondNum = "25";
let thirdNum = firstNum + secondNum; //concatenation beacuse "25" is a string
console.log(thirdNum)

//Interpolation
let academyName = 'Qinshift';
let sentence = `Jana is a student of academyName`;
console.log(sentence)

let interpolationSentence = `Jana is a student of ${academyName}`;
console.log(interpolationSentence);

let concatenationSentence = "Jana is a student of " + academyName;
console.log(concatenationSentence);

let firstName = "Marko";
let age = 25;
let text = `${firstName} is ${age} years old`;
console.log(text);

//Quotes 

let secondMessage = "It's really nice to be a web developer";
console.log(secondMessage)

let thirdMessage = 'It is really "nice" to be a web developer';
console.log(thirdMessage);

let anotherMessage = "It's really \"nice\" to be a web developer";
console.log(anotherMessage);


let twoLinesMessage = "This is the first line. \nThis should be in a second line";
console.log(twoLinesMessage);

//Non-value values

let a; //undefined
let b = null; //has value null
b = 10;
b = null;
