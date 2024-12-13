// Write a JavaScript program to read ten array values, determine the largest value, and print it
let tenValues = [2, 5, 10, 77, 56, 8, 15, 89, 53, 23];
let i = 0;
let maxValue = 0;
while (i < tenValues.length) {
  if (tenValues[i] > maxValue) {
    maxValue = tenValues[i];
  }
  i++;
}

console.log(Math.max(...tenValues));
console.log(maxValue);

console.log(Math.pow(2, 3));

// Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
function sumOfSquaresInRange(start, end) {
  let sumOfSquares = 0;
  for (let i = start; i < end; i++) {
    let powerOfNum = Math.pow(i, 2);
    sumOfSquares += powerOfNum;
  }
  return sumOfSquares;
}

let sum = sumOfSquaresInRange(101, 150);
console.log(sum);
