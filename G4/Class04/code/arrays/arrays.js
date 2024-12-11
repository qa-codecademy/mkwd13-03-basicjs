// EMPTY ARRAY

const myArray = [];
console.log(myArray);

// ARRAY OF STRINGS

// Index is automatically assigned, starting from 0
// Elements can be split in new lines for readability.
const daysOfWeek = [
	'Mon', 	// index 0 
	'Tue', 	// index 1
	'Wed', 	// index 2
	'Thu', 	// index 3
	'Fri', 	// index 4
	'Sat',	// index 5
	'Sun'	// index 6
];
console.log(daysOfWeek);

// MIXED ARRAY

// We can declare arrays with mixed types (numbers, strings...)
// We can even add arrays, functions, objects, etc...
// It's better if we avoid this
// Try to keep data clean and organized. Arrays are collections of things with same characteristics!
const mixedArray = [1, 'Zhanko', [], function () { }, {}];
console.log(mixedArray);

// ACCESSING ARRAY ITEMS

const days = [
	'Mon', 	// index 0 
	'Tue', 	// index 1
	'Wed', 	// index 2
	'Thu', 	// index 3
	'Fri', 	// index 4
	'Sat',	// index 5
	'Sun'	// index 6
];
console.log(days[0]);	// Mon -> we access the element at position 0
days[0] = 'Monday';		// We set a new value in the array at position 0
console.log(days);		// ['Monday', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] -> Notice how it logs 'Monday' instead of 'Mon'

// 'length' is built-in property that gives the number of elements in the array
console.log(days.length);	// 7

let index = 4;
console.log(days[index]);		// We can access elements by index even through variables. Variables must be valid numbers as indexes are numbers
console.log(days[index + 1]);	// We can even use expressions to evaluate the index
console.log(days[100]);			// If we access an index that is out of range, we get 'undefined' as such value does not exist

// MANIPULATING ARRAY ELEMENTS

const products = [
	'Milk',		// index 0
	'Cookies'	// index 1
]

products[2] = 'Bread';	// Add an element in the array at index 2
// JavaScript automatically inserts the element even though the array is initialized with index 0 and 1 only.

products.push('Beer', 'Wine');	// Add elements at the end of the array 		-> ['Milk', 'Cookies', 'Bread', 'Beer', 'Wine']
products.pop();		// Remove the last element. This removes 'Wine' 			-> ['Milk', 'Cookies', 'Bread', 'Beer']
products.pop();		// Remove the last element. This removes 'Beer' 			-> ['Milk', 'Cookies', 'Bread']
products.pop();		// Remove the last element. This removes 'Bread' 			-> ['Milk', 'Cookies']

products.unshift('Peanuts');	// Add elements at the start of the array 		-> ['Peanuts', 'Milk', 'Cookies']
products.shift();				// Remove elements from the start of the array 	-> ['Milk', 'Cookies']

console.log(products);