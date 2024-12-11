let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
console.log(days);

let emptyArray = [];
console.log(emptyArray);

let mixedArray = ["Ana", 23, true, "SEDC", "", null];
console.log(mixedArray);

let secondMember = mixedArray[1];
console.log(`The value of secondMember is: ${secondMember}`);
console.log(mixedArray);

console.log("mixedArray[3]");
console.log(mixedArray[3]);

console.log("==changing value of mixedArray[3]");
mixedArray[3] = "academy";

console.log("mixedArray[3]");
console.log(mixedArray[3]);
console.log(mixedArray);

console.log(`The length of the arrays days is: ${days.length}`);
//days[days.length - 1] == days[7 - 1] == days[6]
console.log(`The last member of the array days is: ${days[days.length - 1]}`);

//ADDING ITEMS

console.log(mixedArray[mixedArray.length]);
//mixedArray[6]
mixedArray[mixedArray.length]  = 100
console.log(mixedArray);

console.log("====push===");
mixedArray.push("new member"); //adding one member at the end of the array
console.log(mixedArray);

mixedArray.push(8, false, false); //adding members at the end of the array
console.log(mixedArray);

mixedArray.unshift("beginning"); //adding one member at the beginning of the array
console.log(mixedArray);

let days2 = ["Mon","Tue","Wed",
"Thu","Fri","Sat","Sun"];

mixedArray.unshift("test", true, null);//adding members at the beginning of the array
console.log(mixedArray);

//DELETING ITEMS
let lastMemberOfDays = days.pop();
console.log(days);
console.log(`lastMemberOfDays: ${lastMemberOfDays}`);

days.pop();
console.log(days);

let firstMemberOfDays = days.shift();
console.log(days);
console.log(`firstMemberOfDays: ${firstMemberOfDays}`);

days.shift();
console.log(days);

//Wed, Thu, Fri
days.splice(1,1); //delete one member starting from index 1
console.log(days);

mixedArray.splice(3, 2); //delete two members starting from index 3
console.log(mixedArray);