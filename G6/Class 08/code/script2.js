// 2. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.
//    Make sure you use a function! Ex. Input: 20 ==> Output: 14

// get a number
// check if the number is greater than 13
// if the number is greater than 13, double the difference and return the result back
// if the number is not greater than 13, just return the difference
// wrap all this logic in a function
function getDifference(num) {
  let difference = 0;
  if (num > 13) {
    difference = (num - 13) * 2;
  } else {
    difference = num - 13;
  }
  return difference;
}

console.log(getDifference(20));
console.log(getDifference(10));
