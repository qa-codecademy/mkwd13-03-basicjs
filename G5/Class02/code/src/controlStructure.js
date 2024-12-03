let score = 72;

if(score > 100){
    alert('You won!!!');
    console.log('You won!!!');
}


console.log(score > 100); //false

let score2 = 101;
if(score2 > 100){
    // alert('You won!!!');
    console.log('You won!!!');
}

console.log(score2 > 100);

let points = 51;

if(points > 60 && points < 100){
    console.log('The student passed the exam!');
    console.log(`The score is ${points}`)
}else{
    console.log("The student failed!!")
}


console.log("If-else Grades");

let scoredPoints = 40;

if(scoredPoints <= 100 && scoredPoints >= 91){
    console.log('Grade A');
}
else if(scoredPoints >= 81 && scoredPoints <= 90){
    console.log("Grade B");
}
else if(scoredPoints >= 71 && scoredPoints <= 80){
    console.log("Grade C");
}
else if(scoredPoints >=61 && scoredPoints <= 70){
    console.log("Grade D");
}
else{
    if(scoredPoints >= 50 && scoredPoints <= 60){
        console.log(`You failed and your score is ${scoredPoints}`);
    }else{
        console.log(`You failed!`);
    }
}


let input = prompt("Enter a number:");
console.log(input);
let numberInput = parseInt(input);
console.log(numberInput);