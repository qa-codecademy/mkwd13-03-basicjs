let number = prompt("Please enter a number:");
// let number = parseInt(prompt("Please enter a number:"));
let parsedNumber = parseInt(number);

if(!isNaN(parsedNumber)){
    switch (parsedNumber) {
        case 1:
            alert("Monday")
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("There is no such day of the week!");
            break;  
    }
}
else{
 console.log("Please enter a valid number!");
}

switch(parsedNumber){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Work day!");
        break;
    case 6:
    case 7:
        console.log("Weekend!");
        break;
    default:
        console.log("There is no such a day!");
}
