# Arrays and Loops 🖖

## Arrays

```js
// Declaring an empty array
let emptyArray = [];

// Declaring an array with items in it
let numbersArray = [54, 1, 33, 7, 12];
let stringsArray = ["Bob", "Jill", "Greg"];
let jaggedArray = [12, "Stuff", true, 1.4];
let arrayOfArrays = [[1, "Bob"], [2, "jill"], [9, "Greg"]];
let multiLineArray = [
    "Stuff",
    "Other stuff",
    "Stuff on many lines"
];
// Getting the amount of items there are in an array
console.log(numbersArray.length); // Will show 5, because there are 5 items in the array

// Getting an item by index from an array
console.log(numbersArray[0]); // First item from numbersArray -> 54
console.log(numbersArray[2]); // Third item from numbersArray -> 33
console.log(numbersArray[numbersArray.length - 1]); // Last item from numbersArray -> 12
console.log(arrayOfArrays[0][1]) // Frst item ( the array [1, "Bob"]) and then the second item form that array which is "Bob" -> Bob

// Changing an item in an array
numbersArray[0] = 100; // Changing existing item
console.log(numbersArray); // Will show [100, 1, 33, 7, 12]
numbersArray[10] = 99; // Changing a non-existing item
console.log(numbersArray); // Will show [100, 1, 33, 7, 12, undefined, undefined, undefined, undefined, undefined, 99]
// Google chrome combines empty spaces in this notation: [100, 1, 33, 7, 12, empty × 5, 99]
numbersArray[0] = undefined; // setting an item to undefined wont remove it from the array, just change it to undefined
console.log(numbersArray);
```

## Array methods

```js
let numbers = [1, 2, 3, 4, 5, 6];

// adding an item at the end of the array
numbers.push(7); // Result: [1, 2, 3, 4, 5, 6, 7]

// removing an item from the end of the array
numbers.pop(); // Result: [1, 2, 3, 4, 5, 6]

// adding an item at the front of the array
numbers.unshift(0); // Result: [0, 1, 2, 3, 4, 5, 6]

// removing an item at the front of the array
numbers.shift(); // Result: [1, 2, 3, 4, 5, 6]

// Find what is the index of an item in the array
let indexOfThree = numbers.indexOf(3); // Returns the index where the item was found -> Result: 2
let notExistingIndex = numbers.indexOf(88); // The item was not found so it returns -1 as indicator of that

// Cut a part of the array
// slice does not change the array it is called on, but creates a new one and returns it. The original stays the same
let newSlicedArray = numbers.slice(2); // Will cut out all items from index 0 to 2 (not including 2)
console.log(newSlicedArray); // Result: [3, 4, 5, 6]
let anotherSlicedArray = numbers.slice(2, 4); // Will cut out all items from index 2 to 4 (including 2, but not including 4)
console.log(anotherSlicedArray); // Result: [3, 4]

// Combining arrays together
// concat does not change the array it is called on, but creates a new one and returns it. The original stays the same
let moreNumbers = [7, 8, 9, 10];
let combinedArray = numbers.concat(moreNumbers);
console.log(combinedArray);

// Reverse an array
// reverse does not change the array it is called on, but creates a new one and returns it. The original stays the same
let reversedArray = numbers.reverse();
console.log(reversedArray); // Result: [6, 5, 4, 3, 2, 1]
```

## Looping Structures

### While

```js
// While loop that counts
let i = 1;
let countingNumber = 10;
while(i <= countingNumber){
    console.log(i);
    i++;
}

// While loop with user input
// Gives the prompt popup until the user enters X in the input
while(prompt("Press X to continue").toLowerCase() !== "x"){
    alert("Nope, that is not X.");
}
alert("Great, you found the X.");

// While loop, going through an array 
let names = ["Bob", "Jill", "Greg"];
let i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}

// While loop, going through a string
let name = "Bob Bobsky";
let i = 0;

while(i < name.length){
    console.log(name[i]);
    i++;
}
```

### For

```js
// For loop that counts
let countingNumber = 10;
for(let i = 1; i <= countingNumber; i++){
    console.log(i);
}

// For loop, going through an array 
let names = ["Bob", "Jill", "Greg"];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// For loop, going through a string
let name = "Bob Bobsky";
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}
```

### For Of

```js
// For of loop, going through an array 
let names = ["Bob", "Jill", "Greg"];
for(let name of names){
    console.log(name);
}

// For of loop, going through a string
let name = "Bob Bobsky";
for(let letter of name){
    console.log(letter);
}
```

### Examples with loops

```js
// Using break to cancel a loop from looping
// break works in any loop
let names = ["Bob", "Jill", " ", "Greg"];
for(let name of names){
    if(name === " ") {
        console.log("Empty names are not allowed. Loop stopped!");
        break;
    }
    console.log(name);
}

// Using continue to cancel an iteration of a loop
// continue works in any loop
let names = ["Bob", "Jill", " ", "Greg"];
for(let name of names){
    if(name === " ") {
        console.log("Empty names are skipped. Loop continues!");
        continue;
    }
    console.log(name);
}

// Using return from a function to stop a loop along with the whole function
let names = ["Bob", "Jill", "Greg"];
function findItemInArray(array, itemToFind){
    for(let item of array){
        console.log(`Checking item: ${item}`);
        if(item === itemToFind) {
            return "Item is found"; // This will exit of the function and with that, not continue with the loop
        }
    }
    return "Item is not found"; // If the loop finished, it means that the return in the loop was never executed and with that, we can conclude that it never found the item
}
console.log(findItemInArray(names, "Jill"));

// Using a loop that loops from back to front
let names = ["Bob", "Jill", "Greg"];
for(let i = names.length; i >= 0; i--){
    console.log(names[i]);
}

// Loop inside of another loop
let arrayOfArrays = [[1, "Bob"], [2, "jill"], [9, "Greg"]];
for(let i = 0; i < arrayOfArrays.length; i++){
    console.log(`Array no. ${i} is being processed...`);
    array = arrayOfArrays[i];
    for(let j = 0; j < array.length; j++ ){
        console.log(`Info about person: ${array[j]}`)
    }
}
```