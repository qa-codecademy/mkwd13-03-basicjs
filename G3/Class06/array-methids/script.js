// join()
// The .join() method joins all elements of an array into a string.
const fruits = ["apple", "banana", "orange"];
// console.log(fruits);
console.log(`My favorite fruits are ${fruits[0]}, ${fruits[1]}, ${fruits[2]}`);
// Joins array elements with ' and '
const joinedFruits = fruits.join(" and "); // the separator is optional
console.log(joinedFruits);
console.log(`My favorite fruits are: ${joinedFruits}.`);
