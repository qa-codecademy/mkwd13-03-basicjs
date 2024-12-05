# Strings, Functions, and Control Structures ✌

## Working with Strings

```js
// Strings can be combined with the + sign
let myName = "Bob" + " " + "Bobsky";
let greetings = "Hello. My name is " + myName + " and I greet you!";
console.log(greetings); // Will show "Hello. My name is Bob Bobsky and I greet you!"

// Strings can be combined using the `` quotes for easier concatenation
let myName = `Bob Bobsky`;
let greetings = `Hello. My name is ${myName} and I greet you!`;
console.log(greetings);

// Escaping special characters
let sentence = 'It\'s a good day to start programming!';
let anotherSentence = "Programming is very \"easy\"!";
console.log(sentence);
console.log(anotherSentence);
```

## Logical Operators

### Truth table

| X | Y | && | \|\| | !X |
|---|---|----|----|----|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

```js
// Logical operators always result in a boolean value
console.log(true && false); // Will show false 

// Logical operators results can be stored in a variable
let result = (2 > 5) || (7 == 7) // Will execute the logical expression and store true in the variable
console.log(result)
```

## Control Structures

### If without else

```js
let number1 = 5;
let number2 = 10;

// Statement directly in if
if(number1 != number2){
    console.log("The numbers are different!");
}

// Statement in a variable used in if
let isDifferent = number1 != number2;
if(isDifferent){
    console.log("The numbers are different!");
}

// One line if ( Only works for single line statements )
if(number1 != number2) console.log("The numbers are different!");
```

### If and else variants

```js
let number1 = 5;
let number2 = 10;

// If and else case
if(number1 != number2){
    console.log("The numbers are different!");
} else {
    console.log("The numbers are the same!");
}

// Multiple cases if and else
// The first case that is true, will be executed. If all are false, else is executed
if(number1 === 0 && number2 === 0){
    console.log("Both numbers are zero!");
} else if(number1 != number2){
    console.log("The numbers are different!");
} else {
    console.log("The numbers are the same!");
}

// Two separate if statements
// Both might be true and both might write something in the console, since they are separate
if(number1 === 0 && number2 === 0){
    console.log("Both numbers are zero!");
}

if(number1 != number2){
    console.log("The numbers are different!");
} else {
    console.log("The numbers are the same!");
}

// Nested if statements
// If the first if is true, then the second nested one can be executed. Otherwise the nested if is skipped and the second else is executed
if(typeof(number1) === "number" && typeof(number2) === "number"){
    if(number1 != number2){
        console.log("The numbers are different!");
    } else {
        console.log("The numbers are the same!");
    }
} else {
    console.log("Error. Wrong format. Please enter numbers.");
}
```

## Inputs and converting

### Converting types

```js
// Parse a string to number ( integer )
let intNumber = "5";
console.log(typeof(intNumber)); // Will print string
let parsedNumber = parseInt(intNumber);
console.log(typeof(parsedNumber)); // Will print number
console.log(intNumber);

// Parse a string to a number ( decimal )

let floatNumber = "5.3";
console.log(typeof(floatNumber)); // Will print string
let parsedFloat = parseInt(floatNumber);
console.log(typeof(parsedFloat)); // Will print number
console.log(floatNumber);
```

### Getting input from a keyboard

```js
// prompt without description text
let result = prompt();
console.log(result); // Will print out whatever the user entered

// prompt with description text
let result = prompt("Please enter some stuff here so we can read it in JavaScript!");
console.log(result);

// prompt with description and a placeholder text
let result = prompt("Please enter some name:", "Bob Bobsky");
console.log(result);

// prompt with numbers
// Note that prompt always returns a string, even if the user enters a number. It will return it as string
let result = prompt("Please enter a number:");
console.log(typeof(result)); // Will be a string even if the user entered the number 2
let convertedResult = parseInt(result);
console.log(typeof(convertedResult)); // We must convert it to number in order to use it as a number
```
