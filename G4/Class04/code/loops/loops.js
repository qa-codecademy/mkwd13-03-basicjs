// WHY LOOPS?

// Imagine a client requests to log '*' in console once
// You'd write this:
console.log('*');

// If a client requests to log '*' 500 times in the console -> 🤯
// You don't want to copy-paste that 500 times


// WHILE LOOP

let x = 0;
while (x < 500) {
	console.log('*');
	x = x + 1;
}

// COMMON PROBLEM -> KEEP THIS EXAMPLE COMMENTED TO NOT BREAK THE APP
/*
	let x = 0;
	while (x < 500) {
		console.log('*');
	}

	Notice how we don't have "x = x + 1". Because we are never incrementing x, the condition in while will always be true
	This means that the codeblock will execute forever.
	This is called -> infinite loop. Try to avoid it.
*/

// ACCESSING ARRAY ELEMENTS MANUALLY (RECAP)
const numbers = [23, 11, 55, 6, 8, 90, 41];
console.log(numbers[0]);	// 23
console.log(numbers[1]);	// 11
console.log(numbers[2]);	// 2
console.log(numbers[3]);	// 3

// ACCESSING ARRAY ELEMENTS VIA LOOP
let index = 0;
while (index < numbers.length) {
	console.log(numbers[index]);

	// controlling the condition
	// Long form to increase a value by 1: 
	// 		index = index + 1; 
	// But that was too long to type for the developers, so they came up with: 
	// 		index += 1;
	// Even that was too long, so: 
	// 		index++;
	index++;
}


// EXAMPLE 1 - max number from user input:

let xCounter = 0;	// starting position for user prompt
let iCounter = 0;	// starting position for finding the max input
const userNumbers = [];	// user inputs
let result = 0;	// we assume the max number is 0. We have to have an initial value.

// First we ask the user to enter 10 numbers
while (xCounter < 10) {
	let number = Number(prompt(`Enter number at position ${xCounter}`));
	userNumbers.push(number);
	xCounter++;
}

while (iCounter < numbers.length) {
	// if the element at position iCounter is greater than what is storen in result variable
	if (numbers[iCounter] > result) {
		// the new result is that  value
		result = numbers[iCounter];
	}
	iCounter++;
}

console.log(result);


// EXAMPLE 2 - sum of powers:
let startNumber = 101;
let powerSum = 0;

// we don't have to start from 0. It all depends on the task that we are working on
while (startNumber <= 150) {
	sum += Math.pow(x, 2);	// sum = sum + Math.pow(x, 2); -> this is the same, but longer
	startNumber++;
}
console.log(powerSum);

// EXAMPLE 3 - digits: (Solution 1)
let userNumberSolution1 = prompt("Enter a number");	// userNumber is string
function digitsSolution1(num) {
	let index = 0;
	// we can also check the length of a string
	while (index < num.length) {
		// we can also access characters at position from a string (same as array elements)
		console.log(num[index]);
		index++;
	}
}
digitsSolution1(userNumberSolution1);

// EXAMPLE 3 - digits: (Solution 2)
let userNumberSolution2 = prompt("Enter a number");	// userNumber is string
function digitsSolution2(num) {
	let index = 0;

	// split() is built-in function that we can use to split string into array: 'zhanko' -> ['z', 'h', 'a', 'n', 'k', 'o']
	let inputAsArray = num.split('');
	while (index < inputAsArray.length) {
		// we access array elements as usual
		console.log(inputAsArray[index]);
		index++;
	}
}
digitsSolution2(userNumberSolution2);

// EXAMPLE 3 - digits: (Solution 3) - Mathematical solution
let userNumberSolution3 = prompt("Enter a number");	// userNumber is string
function digitsSolution3(num) {
	while (num > 0) {
		console.log(num % 10);
		num = parseInt(num / 10);
		console.log(`input: ${num}`);
	}
}
digitsSolution3(userNumberSolution3);
/*
	parseInt -> parses a string into a number until non-number character is found -> parseInt(12.4) -> 12
	math operators: 
		- Division: /
		- Remainder: % -> gives the remainder of a division. Ex: 10 % 3 = 1, since 10 / 3 has a remainder of 1
	
	Explanation:
	User input: '456'

	Iteration 1:
		Check condition: 456 > 0 -> true
		Log the last digit: 456 % 10 = 45 with remainder 6. Log digit 6
		num = parseInt(456 / 10) -> parseInt(45.6) -> 45
	
	Iteration 2:
		Check condition: 45 > 0 -> true
		Log the last digit: 45 % 10 = 4 with remainder 5. Log digit 5
		num = parseInt(45 / 10) -> parseInt(4.5) -> 4
	
	Iteration 3:
		Check condition: 4 > 0 -> true
		Log the last digit: 4 % 10 = 0 with remainder 4. Log digit 4
		num = parseInt(4 / 10) -> parseInt(0) -> 0

	Iteration 4:
		Check condition: 0 > 0 -> false
*/


// DO-WHILE
let doWhileIndex = 2;

do {
	// This code-block gets executed at least once
	// After this is executed, only then the condition is checked
	console.log('Inside do-while');
} while (doWhileIndex > 100);


// FOR LOOP
for (let index = 0; index < 10; index++) {
	console.log(`The index is ${index}`);
}

function logNumber(num) {
	console.log(num);
}
const forLoopNumbers = [7, 2, 4, 5, 1, 2, 9, 8, 7];
// let index -> variable within for-loop scope. Does not clash with global scope variables because of 'let'
for (let index = 0; index < forLoopNumbers.length; index++) {
	let currentNumber = numbers[index];

	if (currentNumber !== 2) {
		logNumber(currentNumber);
	}
}

// FOR-OF loop
const forOfValues = ['Zhanko', 'Kliment', 'Hristijan'];
for (let name of forOfValues) {
	// Iteration 1: name -> Zhanko
	// Iteration 2: name -> Kliment
	// Iteration 3: name -> Hristijan
	console.log(name)
}

// LOOP CONTROL - continue
const continueNames = ['Zhanko', 'Hristijan', 'Kliment', 'Jasmin'];
for (let i = 0; i < continueNames.length; i++) {
	console.log(`========= Iteration ${i + 1} =========`)
	if (continueNames[i] === 'Zhanko' || continueNames[i] === 'Kliment') {
		console.log('Trainer: ', continueNames[i]);
		continue;	// once this is called, we skip the rest of the code FOR THE CURRENT ITERATION ONLY
	} else {
		console.log('Student: ', continueNames[i]);
	}

	console.log('Hello!!!');
}
/*
	========= Iteration 1 =========
	Trainer:  Zhanko

	========= Iteration 2 =========
	Student:  Hristijan
	  Hello!!!

	========= Iteration 3 =========
	Trainer:  Kliment
	
	========= Iteration 4 =========
	Student:  Jasmin
	  Hello!!!
*/

// LOOP CONTROL - break
const breakNames = ['Zhanko', 'Hristijan', 'Kliment', 'Jasmin'];
for (let i = 0; i < breakNames.length; i++) {
	console.log(`========= Iteration ${i + 1} =========`)
	if (breakNames[i] === 'Zhanko' || breakNames[i] === 'Kliment') {
		console.log('Trainer: ', breakNames[i]);
		break;	// once this is called, we exit the loop ignoring the rest of the element and codeblock
	} else {
		console.log('Student: ', breakNames[i]);
	}

	console.log('Hello!!!');
}
/*
	========= Iteration 1 =========
	Trainer:  Zhanko
*/

// EXAMPLE: count number in array
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 2, 3, 4, 66];

function findNumber(numbers, numToFind) {
	let timesFound = 0;
	for (let num of numbers) {
		if (num === numToFind) {
			timesFound += 1;
		}
	}
	console.log(timesFound)
}

findNumber(arrayOfNumbers, 2)
findNumber(arrayOfNumbers, 66)
findNumber(arrayOfNumbers, 6)

