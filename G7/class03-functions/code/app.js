console.log("Functions is online");

let grade = 100;

// if (grade === 1) {
// console.log("Both parents need to see the principal and the police");
// } else

switch (grade) {
  case 1:
    console.log("Both parents need to see the principal and the police");
    break;
  case 2:
    console.log("Only the mother needs to see the principal");
    break;
  case 3:
    console.log("Well done, could be better");
    break;
  case 4:
    console.log("Keep going, it is going to be better in college");
    break;
  case 5:
    console.log("You are well connected and you study hard kid");
    break;
  default:
    console.log("Stop cheating on your exams");
}

//*Bonus for the zodiac homework is to send a version with switch

//Function definition
function sayHello() {
  console.log("Hello from G7");
  console.log("I hope you learn functions easily");
}

// Calling a function / Function invocation
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

//Function arguments/parameters

function addTwoNumbers(numOne, numTwo) {
  console.log(`This is num one: ${numOne}`);
  console.log(`This is num two: ${numTwo}`);

  let result = numOne + numTwo;

  //!IMPORTANT
  //Functions that don't have a return statement always return undefined, be extremely careful when calling functions and befores saving a value from a function call, always check if the funtion has a return

  return result;
}

let numberOne = 130;
let numberTwo = 540;

let resultOne = addTwoNumbers(10, 20);
let resultTwo = addTwoNumbers(numberOne, numberTwo);
let resultThree = addTwoNumbers(650, 350);

console.log("result one", resultOne);
console.log("result two", resultTwo);
console.log("result three", resultThree);

console.log(addTwoNumbers(50, 150));

console.log(addTwoNumbers(150, 440));
