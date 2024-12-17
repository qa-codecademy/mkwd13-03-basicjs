# Introduction to JavaScript 👋

## Getting Started

JavaScript is a separate programming language from HTML and CSS and goes in a separate element called the script element. We can write all our JavaScript code in the Script element, but that is usually a bad practice. A good way to write JavaScript is to create a separate file with the .js extension and write the code there. That file can then be connected to the HTML file through the src attribute on the script element. Similarly, as we connect an external CSS file, we can also connect an external js file.
> Note: The script tag in most scenarios goes at the end of the body tag

### Writing code directly in the script element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <script>
        alert("Hello Qinshift!");
    </script>
  </body>
</html>
```

### Connecting an external javascript file

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
alert("Hello Qinshift!");
```

>Note: This code is in a separate file called script.js in the same folder as the index.html

## JavaScript and the Browser

We can interact with the browser through JavaScript in many ways. One of them is to pop alerts on the screen. This method stops the webpage until the popup alert is closed. Another way to interact is through the console. Every modern browser has a developer mode that enables extra tools for developers. Among these tools, is the browser console. This is a very important feature for developers that are using JavaScript because of all errors, warnings, and logs. To open the console you would need to:

1. Hit F12 or find Developer Tools in the tools menu
2. Find the Console tab

>Note: You can also type JavaScript code in the console on the spot and execute it

### Alert

```js
alert("Hello Qinshift!");
```

### Console Log

```js
console.log("Hello Qinshift!");
```

## Comments

```js
// This is a single line comment
// It will not be executed when the code runs

/*
This is a multi-line comment.
It is the same as the single line, but you can write in multiple lines :D
*/
```

## Variables

```js
// Declaration ( Older way )
var number01;

// Declaration ( Modern way )
let number02;

// Initialization
number01 = 1;
number02 = 2;

// Declaration and Initialization at the same time
let number03 = 3;

// Handling multiple variables at once
let one, two, three; // Declaration
let four = 4, five = 5, six = 6; // Declaration and initialization
```

## Data Types

```js
// Undefined
let nothing;
console.log(typeof x); // Type is undefined

// Number
let number = 5;
let decimal = 2.4;
console.log(typeof number); // Type is number
console.log(typeof decimal); // Type is number

// String
let singleQuoteString = 'Hello SEDC!';
let doubleQuoteString = "Hello SEDC!";
console.log(typeof singleQuoteString); // Type is string
console.log(typeof doubleQuoteString); // Type is string

// Boolean
let boolValue = true;
console.log(typeof boolValue); // Type is boolean

// Null ( Empty complex value )
let nullValue = null;
console.log(typeof nullValue); // Type is object
```

## Operations in JavaScript

```js
// Arithmetic operation that will execute in the console.log, and then show the result
console.log(2 + 3);

// Arithmetic operation that will execute in the variable and store the result. After that we show the result
let result = 5 - 1 * ( 2 * 5 ) / 6;
console.log(result);

// Shorthand for incrementing and decrementing
let increment = 1;
increment++;
console.log(increment); // Will show 2

// Shorthand for doing operations on the current value of a variable
let num1 = 5;
num1 = num1 + 10;
console.log(num1); // Will show 15
let num2 = 5;
num2+= 10;
console.log(num2); // Will show 15

// Comparison operators always result in a boolean value
console.log(2 > 5); // Will show false

// Result of a comparison operator can be stored
let complexLogicalOperation = (2 + 10) == (120 - 108); // Will store true
console.log(complexLogicalOperation); // Will show true
```
