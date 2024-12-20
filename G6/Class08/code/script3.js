// 3. Write a JavaScript program that will find out which of two inserted numbers is closer to 100.
//  Make sure to alert the user if a negative number is inserted! Make sure you use a function! Ex. Input1: 20, Input2: 80 Output: 80 is closer to 100

// create a function that will accept 2 input numbers
// check if the number is negative
// check which number is closer to 100
// 1. Subtract the number from 100
// Smaller difference is the one that is closer to 100
// return the result

function determineGreaterNumber(first, second) {
  if (first < 0 || second < 0) {
    alert("Negative numbers are not allowed!");
    return;
  }

  const diffFirst = Math.abs(100 - first);
  const diffSecond = Math.abs(100 - second);

  if (diffFirst < diffSecond) {
    console.log(`${first} is closer.`);
  } else if (diffSecond < diffFirst) {
    console.log(`${second} is closer.`);
  } else {
    console.log("Both numbers are eqally close.");
  }
}

determineGreaterNumber(20, 80);
determineGreaterNumber(90, 110);
determineGreaterNumber(-10, 50);
