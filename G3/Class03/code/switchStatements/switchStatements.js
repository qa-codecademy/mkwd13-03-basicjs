let input = parseInt(prompt("Enter a number from 1 to 7"));
// let paresdInput = parseInt(input);

switch (input) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thirsday");
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
    console.log("You entered invalid value");
    break;
}

// Grouping cases
switch (input) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Working day");
    break;
    3;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("You entered invalid value");
    break;
}
