function calculateAge(birthYear, birthdayHasPassed){
    let currentYear = new Date().getFullYear();
    if(birthdayHasPassed === "Y"){
        return currentYear - birthYear;
    }
    return currentYear - birthYear - 1;
}

let userInput = prompt("Did your birthday pass? Enter Y or N");



console.log(calculateAge(1993, userInput));
console.log(calculateAge(1990, userInput));
console.log(calculateAge(2007, userInput));
