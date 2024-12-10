// Hello from JS Arrays
let days = ["Mon","Tue","Wed","Thu", "Fri", "Sat", "Sun"];
console.log("Array of days", days);


// We can define empty arrays
let emptyArray = [];
console.log("Empty array", emptyArray);


// JS arrays can contain different data types (items can be of different data types)
let mixedArray = ["Tanja", 7, undefined, "", null];
console.log("Mixed array", mixedArray);


// Arrays are zero-indexed, so the first item has an index 0, the second has an index 1, the third an index 2, etc.


// We access an array item with the following syntax <nameOfArray>[indexOfItemWeAreAccessing]
let thirdMemberOfDaysArr = days[2];
console.log("The value of the third member of the days array is:", thirdMemberOfDaysArr);


// We can change the value of an item array by accessing it and assigning it a new value
console.log("Before changing value", mixedArray[3]);
mixedArray[3] = "Not an empty string anymore";
console.log("After changing value", mixedArray[3]);


// JS is whitespace insensitive, which allows us to do something like this, if we it need to increase readability
let authors = [ 'Ernest Hemingway',                
	'Charlotte Bronte',                
	'Dante Alighieri',  //A single statement 
	'Emily Dickinson'   //although in multiple lines           
];
console.log("Authors array", authors);


// The length property gives us the number of array items
console.log(`There are ${days.length} days in one week!.`)
console.log(`The last member of the days array is ${days[days.length - 1]}.`);


// Between the [] where we need an index number to access some item, we can write any expression that will return a number;
// array[2] is the same item as array[5 - 3], or array[12 / 6],
// or say we have let num1 = 7 let num2 = 5, this is also valid code for getting the item at index 2 => array[num1 - num2].
console.log(`The third member of the mixed array is ${mixedArray[7 - 5]}.`);


let sedcClassG6 = ["Nenad", "Nikola", ]


//One way of adding a member in an array
sedcClassG6[sedcClassG6.length] = "Nenad"
console.log(sedcClassG6);

// ===== Some methods for working with arrays =====


// The PUSH method ADDS one or multiple items at the end of the array;
sedcClassG6.push("Petar")
console.log(sedcClassG6);

sedcClassG6.push("Stefan", "Tomislav")
console.log(sedcClassG6);


// The UNSHIFT method ADDS one or multiple items at the BEGINNING of the array;
sedcClassG6.unshift("Andrea", "Dragana");
console.log(sedcClassG6);


// The POP method REMOVES ONE ITEM FROM THE END of the array AND RETURNS IT;
let deletedMember = sedcClassG6.pop()
console.log(sedcClassG6);
console.log("DELETED MEMBER", deletedMember);


// The SHIFT method REMOVES ONE ITEM FROM THE BEGINNING of the array AND RETURNS IT;
let deletedMemberFromBeginningOfArr = sedcClassG6.shift()
console.log(sedcClassG6);
console.log("DELETED MEMBER", deletedMemberFromBeginningOfArr);