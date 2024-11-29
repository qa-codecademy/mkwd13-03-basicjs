// Write a JavaScript program to convert a length 
// given in feet to meters.
// TIP: 1 feet = 0.3048 meters

let conversionFactor = 0.3048;

// 10, 20, 50;

let meters10 = 10;
let meters20 = 20;
let meters50 = 50;

let feetToMeters10 = meters10 * conversionFactor;
console.log("10 feeets = ");
console.log(feetToMeters10);

let feetToMeters20 = meters20 * conversionFactor;
console.log("20 feeets = ");
console.log(feetToMeters20);

let feetToMeter50 = meters50 * conversionFactor;
console.log("50 feeets = ");
console.log(feetToMeter50);


// console.log(10 * 0.3048); // bad way



// Write a JavaScript program that will read the 
// two sides of a rectangle and calculate its area
// TIP: area = a * b

let a = 15;
let b = 10;

let area = a * b;
console.log(area);

// Write a JavaScript program that will calculate area of Circle
// TIP: area = π * r2

let pi = 3.14;

let radius = 4; // this is the variable that the user should enter

let areaOfCircle = pi * (radius * radius); // p * r2
console.log("areaOfCircle");
console.log(areaOfCircle);