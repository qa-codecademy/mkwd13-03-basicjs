// Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert 
// Celsius to Fahrenheit and display the result
// Bonus: Write another function that 
// will be able to convert Fahrenheit to Celsius and display 
// the result. Formula: (5/9) * (Fahrenheit-32);

// let input = parseInt(prompt("Vnesi broj"));

function convertToFahrenheit(degrees) {
    let result = (degrees * 1.8) + 32;
    return result; 
}

function convertToCelsius(degrees) {
    let result = (5/9) * (degrees-32);
    return result;
}

// let fahrenheit = convertToFahrenheit(input);
// console.log(fahrenheit);
// let celsius = convertToCelsius(input);
// console.log(celsius);

function convertTo(degrees, action) {
    if (action === "f") {
        let result = convertToFahrenheit(degrees);
        console.log(result);
    } else if(action === "c") {
        let result = convertToCelsius(degrees);
        console.log(result);
    }
}
// let input1 = parseInt(prompt("Vnesi broj"));
// let input2 = prompt("Vnesi F ili C za konverzija");

// convertTo(input1, input2);


// exercise 2

function calculateAge(dob, currentYear) {
    return currentYear - dob;
}

console.log(`You are ${calculateAge(1991, 2024)} years old`);

function calculateAge2(dob) {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - dob;
}

console.log(`You are ${calculateAge2(1991)} years old`);