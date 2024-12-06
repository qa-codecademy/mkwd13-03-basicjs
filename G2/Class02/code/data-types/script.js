console.log("================= STRINGS =================");
// string in a nutshell => text

let firstName; // declaring variable
firstName = "Bob"; // initializing the variable
let lastName = "Bobsky";

// Ways to create strings:
// ===> using double quotes
let doubleQuotes = "This is a string with double quotes";
// ===> using single quotes
let singleQuotes = 'This is a string with single quotes';
// ===> using backticks
let backticksString = `This is a string with backticks (template literals)`;


console.log("========== Combining strings ==========");
// ===> using the '+' operator (Concatenation)
let fullName = "First name:" + " " + firstName;
console.log(fullName);
console.log("Last name:" + " " + lastName);

console.log(firstName + " is " + 30 + " years old");
console.log(2 + 2); // 4
// when we concatenate number and string the number is automatically converted to string
console.log(2 + "2"); // 22 

// ===> using String Interpolation ***
// used when combining variables and strings
fullName = `Full name ${firstName} ${lastName}`;
console.log(fullName);


console.log("========== Quotes within strings ==========");
// let sentence = 'This isn't possible'
let sentence1 = "This isn't hard";
let sentence2 = 'He replied: "Hey there"';
let sentence3 = 'This isn\'t possible';
// we can escape character using backslash '\'
let sentence4 = '\'TO BE\' or \'NOT TO BE\'';
let sentence5 = `"${sentence4}, the question is now"`
console.log(sentence5);


console.log();
console.log("================= NON-VALUE VALUES =================");

// undefined
// Typically occures unintentionally *  
// It's the default value of uninitialized variables in JavaScript.
let undefinedVariable;
console.log(undefinedVariable);

// null
// We intentionally assign it to a variable *
// It is explicitly assigned to a variable to indicate that the variable intentionally holds no value or an empty value
let emptyVariable = null;
console.log(emptyVariable);


console.log();
console.log("================= SPECIAL NUMBER =================");

console.log("========== NaN =========="); // Not a Number
// It is a result of an operation that cannot produce a valid numerical result.
console.log(typeof NaN);
let result = 100 / "tekst";
console.log(result);

// Ways to check whether a value is NaN
console.log(isNaN(result)); // true
console.log(isNaN("tekst")); // true
console.log(Number.isNaN("tekst")); // false
// unlike Number.isNaN(), isNaN() forcefully converts the parameter to a number
// in most cases Number.isNaN() is the way to go 


console.log("========== Infinity ==========");
let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
// Don't divide by zero please...
