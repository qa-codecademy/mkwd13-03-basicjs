console.log("Hello" + " " + "Qinshift");
console.log("Hello " + "Qinshift");

let helloGreeting = "Hello";
let academyName = "Qinshift";
let greeting = helloGreeting + " " + academyName;
console.log(greeting);

let firstNumber = 1;
let secondNumber = "one";
let result = firstNumber + secondNumber;
console.log(result);
console.log(typeof(result)); //string

let first = 1;
let second = "2";
let result1 = first + second;
console.log(result1);
console.log(typeof(result1));


//Interpolation

let academyNames = "Qinshift";

let sentence = `I am student in ${academyNames}.`;
console.log(sentence);

let firstName = "Gjorge";
let lastName = "Dimitrov";
let text = `${firstName} ${lastName} is a trainer in ${academyNames}.`;
console.log(text);

//Quotes

let message = "It's really nice to be a programmer";
console.log(message);

// let secondMessage = 'It's really nice to be a programmer'; wrong

let secondMessage = "It's really \"nice\" to be a programmer";
console.log(secondMessage);

let thirdMessage = 'It\'s really nice to be a programmer';
console.log(thirdMessage);


let test;
console.log(test);
console.log(typeof test);

let fName = null;
console.log(typeof fName); //object
let lName = "Krstevski";

let fullName = fName + lName; 
console.log(fullName);//nullKrstevski

fName = "David";
console.log(fName + lName);//DavidKrstevski

fName = "Zoran";
console.log(fName + lName);//ZoranKrstevski