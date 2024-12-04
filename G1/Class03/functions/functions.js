
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