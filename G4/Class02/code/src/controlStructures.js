let score = 75;
if(score > 100){

    //This block will not get executed because the condition after if is not met
    //console.log(score > 100);
    console.log('Score is greater than 100');
}

//This console log will execute anyway because it is not a part of an if-else structure.
console.log(score> 100);

let score2 = 102;
if(score2 > 100){

    //This block will get executed because the condition after if is met
    //console.log(score > 100);
    console.log('Score2 is greater than 100');
}

//let points = 61;

let points = 51;
if(points > 60){
    console.log("The student passed the exam");
    console.log(`The score is ${points}`);
}
else{
    console.log("The student failed!");
    var sum = 4 + 34;
    console.log(sum);
}

console.log("Grades - if-else")
let scoredPoints = 43;
if(scoredPoints >= 91){
    console.log("Grade A");
}
else if(scoredPoints >= 81 && scoredPoints <= 90){
    console.log('Grade B');
}
else if(scoredPoints >= 71 && scoredPoints <= 80){
    console.log('Grade C');
}
else if(scoredPoints >= 61 && scoredPoints <= 70){
    console.log('Grade D');
}
else{
    console.log("you failed!");
}
