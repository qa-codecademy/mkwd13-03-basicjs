let input = parseInt(prompt("Enter day of week (1-7)"));

switch(input){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        //break;
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
        console.log("Invalid value");
        break;
}

switch(input){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Work day");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid value");
        break;
}
