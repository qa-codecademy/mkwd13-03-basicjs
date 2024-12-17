// Object literal
// let book = {
//     title: '',
//     author: '',
//     readingStatus: '',
//     displayReadingStatus: function () {
//         if (this.readingStatus.toLocaleLowerCase() === 'yes') {
//             console.log(`You already read ${this.title} by ${this.author}!`);
//         } else if (this.readingStatus.toLocaleLowerCase() === 'no') {
//             console.log(`You still need to read ${this.title} by ${this.author}!`);
//         }
//         else {
//             console.log('Wrong input, try again.')
//         }
//     }
// };

// let bookTitle = prompt('Please enter book title');
// let bookAuthor = prompt('Please enter book Author');
// let readingStatus = prompt('Have you read this book already?');

// book.title = bookTitle;
// book.author = bookAuthor;
// book.readingStatus = readingStatus;

// book.displayReadingStatus();


// ========== Exercises ===============

// Exercise 1

let number = 10;
let fName = 'Frose';
let isCold = true;
let notDefined = undefined;
let notANumber = NaN;
let nullValue = null;
let book = {};
let arr = [1, 2, 3];

console.log(number);
console.log(fName);
console.log(isCold);
console.log(notDefined);
console.log(nullValue);
console.log(book);
console.log(arr);
console.log(notANumber);


// Exercise 2

// let firstInput = prompt('Enter name:');
// let secondInput = Number(prompt('Enter number:'));
// let thirdInput = Boolean(prompt('Enter true or false:'));
// let fourthInput = prompt('Enter name of your pet');
// let fifthInput = prompt('Enter something that is text');

// console.log(typeof firstInput);
// console.log(typeof secondInput);
// console.log(typeof thirdInput);

// let cat = {}
// cat.name = fourthInput;
// console.log(typeof cat);

// console.log(secondInput * fifthInput);
// console.log(typeof (secondInput * fifthInput));


// Exercise 3

// function calculateDifference(number) {
//     let checkValue = 13;
//     let diff = number - checkValue;
//     if (number > checkValue) {
//         return diff * 2;
//     } else if (number < checkValue) {
//         return diff;
//     }
//     else {
//         return 'They are equal. Try again!';
//     }
// }

// console.log(calculateDifference(10));
// console.log(calculateDifference(20));
// console.log(calculateDifference(1));
// console.log(calculateDifference(13));


// Exercise 4

// function closerToHundred(firstNum, secondNum) {
//     let controlValue = 100;
//     if (firstNum < 0 || secondNum < 0) {
//         console.log('Cannot insert a negtive number! Try again!')
//     }
//     else {
//         let firstDiff = Math.abs(controlValue - firstNum);
//         let secondDiff = Math.abs(controlValue - secondNum);

//         if (firstDiff > secondDiff) {
//             console.log(`${secondNum} is closer to ${controlValue}`);
//         } else if(firstDiff < secondDiff) {
//             console.log(`${firstNum} is closer to ${controlValue}`);
//         }
//         else{
//             console.log(`${firstNum} and ${secondNum} are equally  closer to ${controlValue}`);
//         }
//     }
// }

// closerToHundred(20, 80);
// closerToHundred(90, 20);
// closerToHundred(-10, 20);
// closerToHundred(120, 20);
// closerToHundred(120, 80);



// Exercise 5

function calculateBobExpenses(salary, rent, bills) {
    if (salary <= 0 || rent <= 0 || bills < 0) {
        console.log('Wrong input. Error occured!');
    } else {
        let salaryLeft = salary - (rent + bills);
        let totalExpenses = rent + bills;
        if (totalExpenses > salary) {
            console.log('Get another job!');
        }
        else{
            console.log(`You have ${salaryLeft} EUR for the rest of the month.`);
            console.log(`You have total expenses of ${totalExpenses} EUR this month.`);
        }
    }
}

calculateBobExpenses(1000, 375, 250);
calculateBobExpenses(1000, 400, 250);
calculateBobExpenses(1500, 400, 250);
calculateBobExpenses(0, 400, 250);
calculateBobExpenses(1500, 1000, 700);
