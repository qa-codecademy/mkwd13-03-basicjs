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

//Exercise one solution

function sumSquares(start, end) {
  if (start >= end) return 0;

  let sum = 0;
  let num = start;

  while (num <= end) {
    // console.log(num);

    sum += Math.pow(num, 2);

    num++;
  }

  return sum;
}

console.log("The result is:", sumSquares(101, 150));
console.log("The result is:", sumSquares(100, 50));

// Action: Write a JavaScript program to read ten array values, determine the largest value, and print it

let randomNumbers = [1, 23, 544, 243, 43, 190, 78, 2000, 240000, 15];

function calculateMax(numArray) {
  let i = 0;

  let max = randomNumbers[0];

  while (i < numArray.length) {
    let currentNumber = numArray[i];

    if (currentNumber > max) max = currentNumber;

    console.log(currentNumber);

    i++;
  }

  return max;
}

// let maxResult = console.log("Max result", calculateMax(randomNumbers));

//For loop

function countToTwenty() {
  //   let counter = 0;

  //   while (counter <= 20) {
  //     console.log(counter);
  //     counter++;
  //   }

  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
}

// countToTwenty();

let randomNums = [1, 2, 42, 3, 2, 4, 33, 2, 2];

function multiplyNumArray(numArray, num) {
  console.log(numArray);

  let resultArr = [];

  //Looping in reverse order
  // for (let i = numArray.length - 1; i >= 0; i--) {
  //   console.log(numArray[i]);
  //   resultArr.push(numArray[i] * num);
  // }

  for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
    resultArr.push(numArray[i] * num);
  }

  return resultArr;
}

// console.log(multiplyNumArray(randomNums, 10));
// console.log(multiplyNumArray(randomNums, 2));

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for (let student of students) {
//   console.log(student);
// }

fruits.push("pears", "apples", "bananas", "pineapples", "pumpkins");

//Break
function findFavouriteFruit(favFruit, fruitArr) {
  console.log(fruitArr);
  let foundFruit = null;

  for (let fruit of fruitArr) {
    console.log(fruit);
    if (fruit === favFruit) {
      foundFruit = fruit;
      break;
    }
  }

  return foundFruit;
}

// let foundFruitResult = findFavouriteFruit("bananas", fruits);

// console.log("The fav fruit is found:", foundFruitResult);

//Continue

function filterLargeNumbers(numArray, minNumber) {
  console.log(numArray);

  let resultArr = [];

  for (let num of numArray) {
    if (num < minNumber) continue;

    resultArr.push(num);
  }

  return resultArr;
}

// console.log(filterLargeNumbers(randomNumbers, 500));
// console.log(filterLargeNumbers([55, 42, 212, 334, 32, 12, 100], 50));

//GROCERIES APP EXAMPLE
let groceries = ["Bread", "Milk", "Butter"];

//1. Add to grocery list
function addToGroceryList(item) {
  if (typeof item !== "string") {
    console.log(`The item ${item} was not added to the list, sorry`);
    return;
  }
  groceries.push(item);
  console.log(`You have added ${item} to the list!`);
}
addToGroceryList("Eggs");
addToGroceryList("Cake");
addToGroceryList("Carrots");
addToGroceryList("Apples");
//2. Read groceries
function showGroceryList() {
  console.log("The Grocery List:");

  for (let i = 0; i < groceries.length; i++) {
    if (!groceries[i]) continue;

    console.log(`${i + 1}. ${groceries[i]}`);
  }
}
showGroceryList();

//3. Find a grocery item in the list
function checkForItemInGroceryList(item) {
  for (let listItem of groceries) {
    console.log(listItem);
    if (listItem === item) return `The item ${item} was found!`;
  }

  return `There was no ${item} item in the list`;
}

console.log(checkForItemInGroceryList("Milk"));
console.log(checkForItemInGroceryList("Detergent"));

//4. Delete a grocery from the list
function deleteItemFromGroceryList(item) {
  console.log(groceries);
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`The item ${item} has been deleted`);
      groceries[i] = null;
      return;
    }
  }
}

deleteItemFromGroceryList("Butter");
deleteItemFromGroceryList("Cake");
console.log(groceries);

showGroceryList();

//Exercise One
let numArrayTest = [1, 6, 6, 6, 2, 3, 3, 3, 3, 4, 5, 6, 7];
/*
Write a function named findNumber that:
Takes 2 arguments: number, array
Calculates how many times the number is contained in an array with numbers
Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
Call the function three times with different arrays.
*/
function countNumberInArray(number, array) {
  let count = 0;

  for (let num of array) {
    if (num === number) count++;
  }

  return `The number ${number} appears ${count} times in the array`;
}

console.log(countNumberInArray(3, numArrayTest));
console.log(countNumberInArray(33, [1, 2, 22, 33, 33, 33]));
console.log(countNumberInArray(2, [1, 1, 1, 1, 1, 1, 1, 1, 2]));

/*
Write a function named findNumber that:
Takes 2 arguments: array, type
The person that calls the function should provide an array of numbers and string odd / even
If the type is even the function should find all the even numbers and return them as result
If the type is odd the function should find all the odd numbers and return them as result
*/

function findNumber(numArray, type) {
  let resultArr = [];

  if (type !== "even" && type !== "odd")
    return "Invalid type, accepted values are: odd,even";

  for (let num of numArray) {
    if (type === "even" && num % 2 === 0) resultArr.push(num);
    if (type === "odd" && num % 2 !== 0) resultArr.push(num);
  }

  return resultArr;

  // let resultArr = [];
  // if (type === "even") {
  //   for (let num of numArray) {
  //     if (num % 2 === 0) resultArr.push(num);
  //   }
  // } else if (type === "odd") {
  //   for (let num of numArray) {
  //     if (num % 2 === 1) resultArr.push(num);
  //   }
  // } else {
  //   return "Invalid type, accepted values are: odd,even";
  // }
  // return resultArr;
}

console.log("Even numbers", findNumber(numArrayTest, "even"));
console.log("Odd numbers", findNumber(numArrayTest, "odd"));
console.log(findNumber(numArrayTest, "random"));
