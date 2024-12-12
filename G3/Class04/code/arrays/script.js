// Declaring and creating array
let products = ["Laptop", "Phone", "Shoes", "Watch", "Table", "Chair"];
console.log(products);
console.log(`The type of the array is ${typeof products}.`);
// Empty array is always truthy
let emptyArray = [];
console.log(!!emptyArray); // true

// Array that contains elements of different type
let mixedValuesArray = [
  1,
  "Hello World!",
  false,
  "",
  null,
  7.5,
  "Bob",
  undefined,
];
console.log(mixedValuesArray);
console.log(
  `Array that contains elements of different type: ${mixedValuesArray}`
);

// Accessing element of the array - via the index
// Each array element has its own index and they start from 0 incrementing by one
console.log(products[3]);
let shoes = products[2];
console.log(shoes);

// Changing a value to a specific element in the array
products[3] = "Backpack";
console.log(products);

// Getting the length of an array
let lengthOfProducts = products.length;
console.log(`The length of the producta array is ${lengthOfProducts}`);
let lastItem = products[products.length - 1];
console.log(lastItem);
console.log(products[products.length - 3]);

// Adding elements in array
// Adding new element as last in the array cen be done by using the "length"
products[products.length] = "Haedphones";
// Adding elements at the end of the array - PUSH
products.push("Desk");
// We can add more than one element at once
products.push("Keyboard", "Printer");

// Adding element at the beginning of the array - UNSHIFT
products.unshift("Monitor");
console.log(products);

// Removing elements in array
// Removing last element of the array - POP
// Pop always returns the removed element
let lastProduct = products.pop();
console.log(lastProduct);

// Removing first element of the array - SHIFT
// Shift always returns the removed element
let firstProduct = products.shift();
console.log(firstProduct);
console.log(products);
