let score = 59;
let scoreToPass = 60;

// if (conditon) {
//     ..code
// }

// if (score > scoreToPass) {
//     alert("Pass");
// }


// if (score > scoreToPass) {
//     alert("Pass");
// } else {
//     alert("Failed");
// }

// THIS WILL NOT WORK
// if (score > scoreToPass) {
//     alert("Pass");
// } else (conditon) { // ELSE NEVER TAKES CONDITON
//     //ELSE IS ALWAYS EVERYTHING ELSE
    
// }


let fridayCash = 11;

// if (fridayCash >= 50) {
//     alert("You should go out to a dinner and a movie");
// } else if (fridayCash >= 35) {
//     alert("You should go out to a fine meal");
// } else if (fridayCash >= 12) {
//     alert("You should go and see a movie");
// } else {
//     alert("Looks like you will be watching TV");
// }




// GETING VALUE FROM SCREEN


// let input = prompt("Enter your name");

// console.log(input);
// console.log(typeof(input));

// let message = `Hello ${input}, how are you?`;
// alert(message);

let input = prompt("Enter number");

let number = parseInt(input);

if (Number.isNaN(number)) {
    alert("Please enter a valid number");
} else {
    alert("Good you have successfuly entered an number from screen");
}

console.log(number);
console.log(typeof(number));


if (5 < 10) {
    if (5 < 10) {

    } else {
        
    }
}