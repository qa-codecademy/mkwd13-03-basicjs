# Switch Statements and Functions 🤘

## Switch statements

```js
// Switch with numbers and default statement
let number = prompt("Enter a number that represents a week day:")
switch(number) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default: 
        console.log("Wrong number! Sorry.");
        break;
}

// Switch with combined statements
let pet = prompt("What kinda pet do you want to have?")
switch(number) {
    case "dog":
    case "puppy":
        console.log("Dogs are very friendly.");
        break;
    case "cat":
    case "kitty":
        console.log("Cats are very independent.");
        break;
    case "bear":
        console.log("You should probably not domesticate a bear.Just a friendly advice.");
        break;
    default: 
        console.log("Any pet is a good pet if you take well care of it.");
        break;
}
```

## Introduction to Functions

```js
// Function without parametrers or return
// Declaration of a function ( Will not be executed unless it is called )
function sayHello(){
    console.log("Hello there!");
}

// A call to a function
sayHello(); // Will execute the line of code in the function declared above

// A call to a function and see what result is returned 
let result = sayHello(); // Will execute the line of code and will store the result of the function in the variable. Since there is no return statement in the function, the result in the variable will be undefined

// Function with parameters
function sayHello(name){
    console.log(`Hello there ${name}!`);
}

sayHello("Bob"); // Will execute the function, put "Bob" in the name parameter and use it in the function
sayHello("Jill"); // The same function executed, on the same line, but with different value

// Function with parameters and return value
function getGreeting(name){
    let result = `Hello there ${name}!`;  
    return result;
}

// Another variant
function getGreeting(name){
    return `Hello there ${name}!`;
}

getGreeting("Bob"); // The function is executed, but nothing happens because we don't store the result anywhere
let greetingResult = getGreeting("Bob"); // The function is executed, and the result is stored in the variable
console.log(greetingResult);

// A function executed in another function
console.log(`This is a generated greeting: ${getGreeting("Bob")}`);
// The execution tree goes like this:
// 1. console.log() is called
// 2. JavaScript finds a function call to getGreeting()
// 3. getGreeting() is called with name parameter being "Bob"
// 4. getGreeting() is executed and a string is returned
// 5. The resulted string is added in the string already there in the console.log() function
// 6. The combined string is written in the console -> This is a generated greeting: Hello there Bob!

// Code after return statement
function getGreeting(name){
    console.log("Function started executing...");
    return `Hello there ${name}!`;
    console.log("Function ended executing."); // This will never be executed because return ends the execution of the function and continues with the code outside of the function
}

console.log(getGreeting("Bob"));

// Function with another function in it caleld
function isNameShort(name){
    if(name.length < 2){
        return true;
    }
    return false;
}

function getGreeting(name){
    if(isNameShort(name)){
        return "Hello there person!";
    }
    return `Hello there ${name}!`;
}

console.log(getGreeting("K"));
// The execution would go like this:
// 1. console.log() is called
// 2. It finds the getGreeting() function and it is also called
// 3. The getGreetings() starts executing and finds the isNameShort() function, so now that one is called
// 4. isNameShort() executes and returns true or false
// 5. The getGreetings() function now have a result so either returns a greeting with a name or without a name
// 6. The string result from getGreetings() is provided to the console.log() and is printed in the console
```

## Function parameters

```js
// What happens when you provide less arguments
function sum(number1, number2){
    console.log(number1);
    console.log(number2);
    return number1 + number2;
}
console.log(sum(5)); // number1 wil be 5, number2 will be undefined. The result will be NaN

// What happens when you provide more arguments
function sum(number1, number2){
    console.log(number1);
    console.log(number2);
    return number1 + number2;
}
console.log(sum(5, 3, 9, 10)); // number1 will be 5, number2 will be 3 and the other numbers will be ignored. The result will be 8

// Default parameters
function sum(number1 = 0, number2 = 0){
    console.log(number1);
    console.log(number2);
    return number1 + number2;
}

console.log(sum(5)) // number1 will be 5, number 2 will be 0 by default even though it is not provided. The result will be 5
```

## Scope

### var

```js
function checkOddEven(number){
    if(number === 0){
        var result = "The number is zero.";
        console.log(result); // Result will be "The number is zero." because the result variable is in scope
    } else if(number % 2 === 0) {
        var result = "The number is even.";
        console.log(result); // Result will be "The number is even." because the result variable is in scope
    } else {
        var result = "The number is odd.";
        console.log(result); // Result will be "The number is odd." because the result variable is in scope
    }
    console.log(result); // Result will be some result from the ones above because the result variables are all in scope
}

console.log(result); // This result variable is not defined, because it is outside of the scope of the function and it does not exist here
```

### let

```js
function checkOddEven(number){
    if(number === 0){
        let result = "The number is zero.";
        console.log(result); // Result will be "The number is zero." because the result variable is in scope
    } else if(number % 2 === 0) {
        let result = "The number is even.";
        console.log(result); // Result will be "The number is even." because the result variable is in scope
    } else {
        let result = "The number is odd.";
        console.log(result); // Result will be "The number is odd." because the result variable is in scope
    }
    console.log(result); // This result variable is not defined, because it is outside of the scope of the blocks above and it does not exist here
}

console.log(result); // This result variable is not defined, because it is outside of the scope of the function block and it does not exist here
```
