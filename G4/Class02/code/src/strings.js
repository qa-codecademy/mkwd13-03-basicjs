console.log("Hello" + " " +"SEDC");

let helloGreeting = "Hello";
let loc = "from SEDC";
let greeting = helloGreeting + " " + loc;
console.log(greeting);

let first = 10;
let second = "example";
let result = first + second;
console.log("result:");
console.log(typeof(result));
console.log(result);

let num1 = 10;
let num2 = "12";
let res = num1 + num2;
console.log("res:");
console.log(typeof(res));
console.log(res);

//Interpolation

let academyName = "SEDC";
let sentence = `I am a student in ${academyName}`;
console.log(sentence);

let firstName = "Tanja";
let lastName = "Stojanovska";
let text = `${firstName} ${lastName} is a trainer in ${academyName}`;
console.log(text);

//Quotes
let message = "It's really nice to be a programmer";
console.log(message);

let secondMessage = "It's really \"nice\" to be a programmer";
console.log(secondMessage);

let fName = null;
let lName = "Petrovska";
console.log(fName + lName);

fName = "Ana";
console.log(fName + lName);
