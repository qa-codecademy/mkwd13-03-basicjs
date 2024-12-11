let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let day = "Monday";

console.log("Array of days ", days);

console.log(days[4]); //Fri

//We can define an empty array
let emptyArray = [];
console.log("Empty array", emptyArray);


//Our array in JS can contain different data types
let mixedArray = ["Marko", 7, undefined, true, 65, null];
console.log("Mixed array", mixedArray);

//We can change the value of an item array by accessing it in a new value
console.log("Before changing the value of the item", mixedArray[2]);
mixedArray[2] = "Not undefined anymore";
console.log("After changing the value of the item", mixedArray[2]);
console.log("Mixed array", mixedArray);

console.log(`There are ${days.length} days in a week`);

//The last element in an array is always array.length - 1 (because arrays are zero index based)
console.log(days[days.length - 1]); //The last element of days
days[days.length - 1] = "Sunday";
console.log(days[days.length - 1]);
console.log(days[5-2]);

//One way of adding new items to an array
let studentsG6 = ["Aleksandra", "Ivan", "Martin"];
studentsG6[studentsG6.length] = ["Bojan", "Tijana"];
console.log(studentsG6);
console.log(studentsG6[3]);

let smallerArray = studentsG6[3];
console.log(smallerArray[0]);

//Some methods we can use for working with arrays

//push -> ADDS one or multiple items at the END of the array
studentsG6.push("Viktor");
console.log(studentsG6);

studentsG6.push("Dario", "Spase");
console.log(studentsG6);

//unshift -> ADDS one or multiple items at the BEGINNING of the array
studentsG6.unshift("Sanja");
console.log(studentsG6);

//pop -> REMOVES one item from the END of the array and RETURNS the element
let deletedMember = studentsG6.pop();
console.log(studentsG6);
console.log(deletedMember);

//shift -> REMOVES one item from the BEGINNING of the array and RETURNS the element
let deletedMemberFromBeginning = studentsG6.shift();
console.log(studentsG6);
console.log(deletedMemberFromBeginning);