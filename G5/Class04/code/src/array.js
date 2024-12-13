let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(days);

let emptyArray = [];
console.log(emptyArray);

let mixedArray = ["Stevan", 5, true, null, "SEDC"];
console.log(mixedArray);

let arrayInArray = ["Football", [5, true], 1998];
console.log(arrayInArray);


let firstElementOfDaysArray = days[0];
console.log(firstElementOfDaysArray);

console.log(days[1]);

console.log(mixedArray[4]);
mixedArray[4] = "Qinshift";
console.log("=======Changing value of mixedArray[4]=====");
console.log(mixedArray[4]);
console.log(mixedArray);

console.log(arrayInArray[1][0]);

console.log(`The length of the arrays days is: ${days.length}`);
//days[days.length - 1] ==> days[7-1] ==> days[6]
console.log(`The last element of the array days is: ${days[days.length - 1]}`);

// ADDING ITEMS in ARRAY

let market = ["potatoes", "milk", "eggs"];
console.log(market);

market[market.length] = "bread";
console.log("After adding element in array ");
console.log(market);

console.log("======= push =====");
market.push("cheese", 123, true);//adding members at the end of the array
console.log(market);
market.push("chocolate");//adding one member at the end of the array
console.log(market);

// market.push([]);
// console.log(market);
// market[market.length-1].push("white bread");
// console.log(market);


market.unshift("orange"); //adding one member at the beginning of the array
console.log(market);
market.unshift("banana", "coca cola");//adding members at the beginning of the array
console.log(market);
console.log("====================");
market.splice(1,0,"apple");
console.log(market);
console.log("====================");

// DELETING ITEMS in ARRAY

let chocolate = market.pop();
console.log(chocolate);
console.log(market);

market.pop();
console.log(market);

market.shift();
console.log(market);

market.splice(2,1); //delete one member starting from index 2
console.log(market);

market.splice(5,2); //delete two members starting from index 5
console.log(market);
