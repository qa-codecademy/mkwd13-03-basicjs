let a = 1;

while(a <= 5){
    console.log(`The value of a is: ${a}`);
    a = a + 1;
    console.log(`a after increment in while loop: ${a}`);
}


console.log(`a after while loop ${a}`);

let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
let index = 0;

while(index < days.length)  //index < 7
{
    console.log(`days[${index}] : ${days[index]}`);
    index++; //index = index + 1
}


let num = 1;
do{
    console.log(num);
    num++;
}while(num <= 2)