
//prompt will open as a pop up
let a = prompt("Enter a value for side a"); //a is of type string
console.log(a);
console.log(typeof(a));

let b = prompt("Enter a value for side b"); //b is of type string
console.log(b);
console.log(typeof(b));

let sideA = parseInt(a); //sideA is of type number
let sideB = parseInt(b); //sideB is of type number
console.log(typeof(sideA));
console.log(typeof(sideB));

let area = sideA * sideB;
console.log(area);