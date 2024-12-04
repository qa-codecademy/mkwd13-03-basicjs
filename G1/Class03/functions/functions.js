
function greeting(message){
    console.log("Greetings" + message+ " from function");
}

// greeting("Trajan");
// greeting("Filip");
// greeting("Dragan");
// greeting("Bob");




function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName}`);
}

let name = "Jane";
let surname = "Doe";

welcomeMessage(name, surname);
welcomeMessage("Bob", "Bobski");
// welcomeMessage("Trajan", "Stevkovski");


// Exercise
// Create a function that takes 3 arguments name, age, message 
// and displays the message with name and age in the console

// Im name and im age old, message;




function sum(num, num1) {
    let result = num + num1;
    return result;
}

let sumOfTwoNumbers = sum(2, 3);
console.log(sumOfTwoNumbers);

function divide(num, num1) {
    if (num !== 0 && num1 !== 0) {
        return num / num1;
    } else {
        return -1;
    }
    
    // USING FALSY VALUES
    // if (num && num1) {
    //     return num / num1;
    // } else {
    //     return -1;
    // }
}





function calculateLoan(amount, months, interest, name) {
    console.log(amount);
    console.log(months);
    console.log(interest);
    console.log(name);
}

// calculateLoan();
// calculateLoan(1, 12);
// calculateLoan(1, 12, 10, "Trajan", "Filip", 14);


function calculator(num, num1, operation = "+", test = 3) {
    switch(operation) {
        case "+":
            return num + num1;
        case "-":
            return num - num1;
        default:
            return null;
    }
}

// console.log(calculator(1, 2));
// console.log(calculator(12, 2, "-"));


// create a function that parses an input from screen to number
// function should have one argument message that needs to be shown
// as message on input
// function should return the parsed number
// try habndling the bad scenario and if not valid input is entered 
// return NaN

function parseInputToInteger(message) {
    let input = prompt(message);
    let parsedInput = parseInt(input);
    
    if (typeof(parsedInput) === 'number' && !Number.isNaN(parsedInput)) {
        return parsedInput;
    } else {
        return NaN;
    }
}

let input1 = parseInputToInteger("Please enter number: ");
let input2 = parseInputToInteger("Vnesete Broj: ");
let input3 = parseInputToInteger("Vnesete Ime: ");
console.log(input1);
console.log(input2);
console.log(input3);


function substract(num, num1) {
    return num - num1;
}

function multiply(num, num1) {
    let result = num * num1;
    return result;
}

function advCalculator(num, num1, operation) {
    if(operation === "+") {
        let suma = sum(num, num1);
        return suma;    
    } else if (operation === "-") {
        let subs = substract(num, num1);
        return subs;
    } else if (operation === "*") {
        let mlp = multiply(num, num1);
        return mlp;
    } else if (operation === "/") {
        let div = divide(num1, num);
        return div;
    } else {
        return null;
    }
}

// advCalculator(5, 10, "+");
// advCalculator(5, 10, "-");
// advCalculator(5, 10, "*");
// advCalculator(5, 10, "/");