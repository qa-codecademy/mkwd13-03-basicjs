// if statements
let score = 75;
if (score > 100) {
  // This block will not get executed because the condition inside the "if" statement is not met
  console.log("Score is greater than 100");
}

// Else statements
let points = 51;
if (points > 60) {
  console.log("The student has passed the exam");
  console.log(`The score is ${points}`);
} else {
  console.log("The student failed the exam");
  console.log("This message will also be printed in cosole.");
  let myNumber = 10;
  console.log("My number is", myNumber);
}

// Nested if statements
let age = 20;
let hasId = true;

if (age >= 18) {
  // if (hasId === true) {
  if (hasId) {
    console.log("You can enter the club.");
  } else {
    console.log("You need an ID to enter the club.");
  }
} else {
  console.log("You are not old enough to enter the club.");
}

console.log("=============Nested if statement with prompt=============");

// Nested if statement but with taking values from prompt
let myAge = prompt("Enter your age.");
console.log(myAge);
console.log("Type of myAge", typeof myAge);
let paresedAge = parseInt(myAge);
console.log("Type of paresedAge", typeof paresedAge);
let haveIId = prompt("Do you have an ID? (yes/no)");
console.log(haveIId);
if (myAge >= 18) {
  if (haveIId === "yes") {
    console.log("You can enter the club.");
  } else {
    console.log("You need an ID to enter the club.");
  }
} else {
  console.log("You are not old enough to enter the club.");
}
