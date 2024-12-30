// Original array
let fruits = ["Apple", "Banana", "Cherry", "Date", "Fig"];
console.log(fruits);

// The splice() method modifies the original array.
// Remove 2 lements starting from index 1
fruits.splice(1, 2);
console.log(fruits);

// Add elements at index 2
fruits.splice(2, 0, "Grape", "Watermelon");
console.log(fruits);

// Replace 1 element at index 3
// 1 agument - index
// 2 argument how many elements to remove starting from index
// 3+ argument new elements
let splicedElements = fruits.splice(3, 2, "Kiwi");
console.log(1, splicedElements);
console.log(fruits);

// The slice() method does not modify the original array; it returns a new array.
// Original array
let animals = ["Dog", "Cat", "Elephant", "Tiger", "Lion"];

// Extract elements from 1 to 3 index (end index is exclusive)
let selectedAnimals = animals.slice(1, 4);
console.log(selectedAnimals);
console.log(animals);

// Extract elements from index 2 to the end
let lastAnimals = animals.slice(2);
console.log(lastAnimals);

// THIS DOES NOT WORK
let myNewArray = animals;

// THIS WORKS
let myCopiedArray = animals.slice();
console.log(myCopiedArray);
