// 3
// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.//

function getDifference(inputNumber) {
  let difference = inputNumber - 13;
  if (inputNumber > 13) {
    console.log(difference * 2);
    return difference * 2; // if there is a return at the last line in the if case, we don't need else, we can immediately return that value
  }
  return difference;
}

// 4
// Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!Make sure you use a function!Ex. Input1: 20Input2: 80Output: 80 is closer to 100,
// Steps
// Declare a function
// Add two parameters in the function
// Check if some of the input numbers is negative
// Check which one  of them is closer to 100

// Steps
// Create a function that will accept one positive number
// Check if that number is divisible by 3 and 7
// If the number is divisible by 3. Writ3 "Fizz" in the console
// If the number is divisible by 7. Writ3 "Buzz" in the console
// If the number is divisible by both. Write "FizzBuzz" in the console
// Use modulus operator to check if a given number is divisible - %

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 7 === 0) {
    console.log("Buzz");
  }
}

fizzBuzz(21);
