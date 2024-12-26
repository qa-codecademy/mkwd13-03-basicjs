// 6. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
//    If the number is divisible by 3, then write 'Fizz' in the console, if the number is divisible by 7, then write 'Buzz' in the console, and if the number is divisible by 3 and 7, write 'FizzBuzz' in the console.

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 7 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 7 === 0) {
    console.log("Buzz");
  }
}

fizzBuzz(21);
