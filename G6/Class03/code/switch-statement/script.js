console.log("================ CONTROL STRUCTURES ================");
// 1) Conditional Statements (if, else if, else)
// 2) Switch Statements
// 3) Looping structures
// Purpose: Control the flow of the program ***

console.log();
console.log("================ Switch Statements ================");
// useful when you have multiple conditions to check against a single variable

let switchVariable = "value 3";

if (switchVariable === "value 1") {
    console.log("Value 1");
} else if (switchVariable === "value 2") {
    console.log("Value 2");
} else if (switchVariable === "value 3") {
    console.log("Value 3");
} else {
    console.log("None of the above");
}

switch (switchVariable) {
    case "value 1":
        // Code to be executed if switchVariable === "value 1"
        console.log("Value 1");
        break;
    case "value 2":
        // Code to be executed if switchVariable === "value 2"
        console.log("Value 2");
        break;
    case "value 3":
        // Code to be executed if switchVariable === "value 3"
        console.log("Value 3");
        break;
    // more cases...
    default:
        // Code to be executed if the switchVariable doesn't match any case
        console.log("None of the above");
        break;
}


// Example: Program to get the day of the week
let inputDay = prompt("Enter day of week (1-7)");
let parsedDayInput = parseInt(inputDay);

switch (parsedDayInput) {
    case 1:
        console.log("Ponedelnik")
        break;
    case 2:
        console.log("Vtornik");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtok");
        break;
    case 5:
        console.log("Petok");
        break;
    case 6:
        console.log("Sabota");
        break;
    case 7:
        console.log("Nedela");
        break;
    default:
        console.log("Vnesovte nevaliden broj :)");
        break;
}

// Example: Check if it is a work day or weekend
// "fall through" scenario => rarely used
switch (parsedDayInput) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Work day");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Vnesovte nevaliden broj :)");
        break;
}

// Switch vs Ifs ?
// => can achive the same thing with both types of control structures
// => switch provides better code-structure and readability when dealing with multiple conditions for single variable ***

