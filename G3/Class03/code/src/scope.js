function simpleFunction() {
  //lots of code

  //local varable
  let foo = 500;
  //lots of code
  console.log(foo); //500
}

// Global variable
let foo = 1000;
simpleFunction();
console.log(foo); // this will throw an error because the variable foo is defined inside the function

function outerFunction() {
  let outerVariable = "I am a variable from the outer function";
  // NEVER DO THIS ==> ONLY FOR DEMONSTRATION PURPOSES
  function innerFunction() {
    let innerVariable = "I am a variable from the inner function";
    console.log(innerVariable);
    console.log(outerVariable);
  }
  //   console.log(outerVariable);
  //   console.log(innerVariable);

  // calling the inner function
  innerFunction();
}

// innerFunction(); // this will throw an error
outerFunction();

let message = "Outside the function";
function warning(message) {
  console.log(message);
}

warning("Inside the function");
console.log(message);

// Celsius to fahrenheit
// 1. define a function
// 2. add the necessary parameters
// 3. do the calculation inside the function
// 4 return the result
