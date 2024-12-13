console.log("=================== EXERCISE 01 ===================");
/*
    Write 4 functions
    All functions take 2 parameters and output a result
    Function that sums 2 numbers
    Function that subtracts 2 numbers
    Function that multiplies 2 numbers
    Function that divides 2 numbers
*/

function sum(number1, number2) {
    return number1 + number2;
}
let sumOfNumbers = sum(10, 20)
console.log(sumOfNumbers);
console.log(sum(10, 20));

function subtract(number1, number2) {
    return number1 - number2;
}
let subtractOfNumbers = subtract(-10, 50);
console.log(subtractOfNumbers);

function multiply(number1, number2) {
    return number1 * number2;
}
console.log(multiply(5, 5));

function divide(number1, number2) {
    if (number2 === 0) {
        return null;
        return "Cannot divide by zero"
    }
    return number1 / number2;
}
console.log(divide(100, 0));



console.log("");
console.log("=================== EXERCISE 02 ===================");
/*
    Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
    Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
    Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);
*/

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
console.log("The temperature in F is " + convertCelsiusToFahrenheit(5));

function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = 5 / 9 * (fahrenheit - 32);
    return celsius;
}
console.log("The temperature in C is " + convertFahrenheitToCelsius(41));

