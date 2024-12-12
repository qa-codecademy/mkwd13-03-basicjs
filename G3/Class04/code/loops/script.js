let products = ["Laptop", "Phone", "Shoes", "Watch", "Table", "Chair"];

// looping trough products array - while
let i = 0;
while (i < products.length) {
  console.log(products[i]);
  i++;
}

// do...while
let j = 0;
do {
  console.log(products[j]);
  j++;
} while (j > products.length);

// another example
let correctPassword = "secure123";
let userInput;
// do {
//   userInput = prompt("Enter your password:");
// } while (userInput !== correctPassword);
// console.log("Access granted");

// Infinite loop - be careful!
// while (true) {
//   console.log("This will run forever.");
// }

// let k = 1;
// while (k > 0) {
//   console.log("This will run frever too");
//   k++;
// }

// For loop
for (i = 0; i < products.length; i++) {
  console.log(`${i + 1}. ${products[i]}`);
}

// For loop with reverse exapmle
for (i = products.length - 1; i >= 0; i--) {
  console.log(`From reverse for loop: ${products[i]}`);
}

// for...of
for (let element of products) {
  console.log(element);
}

// break
let numbers = [1, 3, 5, 7, 8, 9, 11, 12, 16];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`First even number is: ${numbers[i]}`);
    break; // Stop searching once an even number is found
  }
}

// continue
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    continue; // skip odd numbers
  }
  console.log(`Even number: ${numbers[i]}`);
}
