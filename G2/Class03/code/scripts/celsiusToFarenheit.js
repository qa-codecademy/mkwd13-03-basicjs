function celsiusToFarenheit(celsiusInput) {
    return celsiusInput * 1.8 + 32;
}

function farenheitToCelsius(farenheitInput){
    return (5 / 9) * (farenheitInput - 32);
}


let userInput = parseInt(prompt("Please enter a number"));
let userChoice = prompt("What is the value you entered?\n1.Enter C for celsius\n2.Enter F for farenheits");


if(userChoice === "C"){
    console.log(`${userInput} Celsius to Farenheit => ${celsiusToFarenheit(userInput)}F.`);
}
else if(userChoice === "F"){
    console.log(`${userInput} Farenheits to Celsius => ${farenheitToCelsius(userInput)}C.`);
} else{
    console.log("Please try again by inserting C or F!");
}
