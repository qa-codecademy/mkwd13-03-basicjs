let counter = 1;

while(counter <= 12){
    console.log(`The value of counter is: ${counter}`);
    // counter = counter + 1;
    // counter+=1;
    counter++;
}

console.log(`Counter after while loop is ${counter}`);


let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let index = 0;

while(index < days.length){
    console.log(`days[${index}]: ${days[index]}`);
    index++;
}


console.log("=============Do While=============");

let number = 3;

do{
    console.log(number);
    number++;
}while(number <= 2)