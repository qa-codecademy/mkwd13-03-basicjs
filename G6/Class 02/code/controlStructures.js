//IF-ELSE

let condition = 5 > 2; //true

if(condition){

    //The code we write here will be executed if the condition is true
    //THIS WILL BE EXECUTED
}else{
    //The code we write here will be executed if the condition is false
     //THIS WILL NOT BE EXECUTED
}

let falseCondition = 5 < 2; //false

if(falseCondition){

    //The code we write here will be executed if the condition is true
    //THIS WILL NOT BE EXECUTED
}else{
    //The code we write here will be executed if the condition is false
     //THIS WILL BE EXECUTED
}

//Example 
let points = 51;

if(points > 60){
    console.log("Congrats, you passed!");
}else{
    console.log("Sorry, you failed :(")
}

//Example2
var scoredPoints = 89;

if (scoredPoints >= 91) {
    console.log("You got an A! Excellent!");
} 
else if (scoredPoints >= 81 && scoredPoints <= 90) {
    console.log("You got a B! Keep up the good work :)");
} 
else if (scoredPoints >= 71 && scoredPoints <= 80) {
    console.log("You got a C. It's a good effort, but study harder next time.");
} 
else if (scoredPoints >= 61 && scoredPoints <= 70) {
    console.log("You got a D! Study harder, you can do much better!");
}
else {
    console.log("You failed. You have to study harder!.");
}

//Exercise

let string = prompt("How much money do you have?"); //money is string
let money = parseInt(string);

if(money>500){
    console.log("You have plenty of money! Buy something for yourself");
}
else if(money<=500 && money >=400){
    console.log("Consider buying some food");
}else{
    console.log("Consider saving up more")
}


