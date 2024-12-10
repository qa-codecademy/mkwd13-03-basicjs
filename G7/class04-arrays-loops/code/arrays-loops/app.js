console.log("This is the start of something great");

//Creating an array
let fruits = ["apples", "oranges", "pears", "lemons", "mangoes"];

let lemonsIndex = 3;
//Accessing elements in array
// console.log(fruits[2]);
// console.log(fruits[lemonsIndex]);

let apples = fruits[0];

//Changing values of array elements
fruits[2] = "cherries";

// console.log(fruits[2]);

let students = [];

students[0] = "John Doe";
students[1] = "Jane Doe";

// console.log(students);

//Reading the length of an array
// console.log(fruits);
// console.log(fruits.length);
// console.log(students.length);

//Accessing the last element of an array

let lastElement = fruits[fruits.length - 1];
// 0, 1, 2, 3, 4, 5 -- INDEXES
let numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers[numbers.length - 1]);

// console.log(lastElement);

//Adding elements to the end of an array
// console.log(fruits);

// console.log(fruits[fruits.length]);

fruits[fruits.length] = "kiwis"; //A rare way of adding to end of an array

// console.log(fruits);

//.push adds to the end of an array
fruits.push("bananas", "pears");

// console.log(fruits);

//Adding elements to the start of an array
fruits.unshift("coconuts");

// console.log(fruits);

//Deleting elements from the end of an array
let popResult = fruits.pop();

// console.log(popResult);

// console.log(fruits);

//Deleting elements from the start of an array
fruits.shift();
fruits.shift();
fruits.shift();

// console.log(fruits);

//LOOPING STRUCTURES

let counter = 0;

//Counter must end at 15

while (counter < 15) {
  console.log(counter);
  counter++;
}
//Code will not continue until loop is running

console.log("The main console.log", counter);

let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

let daysIndex = 0;

while (daysIndex < days.length) {
  console.log(days[daysIndex]); //1
  daysIndex++;
}

let sum = 0;

sum += 101;
sum += 102;
sum += 103;
sum += 104;

console.log(sum);

//1. Try to count with a while loop from 101-150, log each number to the console
//2. Use a sum variable to add all numbers from 101-150
//3. Use the Math.pow to add the squares of all numbers in a sum
