let counter = 1;

while(counter <= 5){
    console.log(counter);
    //counter = counter + 1;
    counter++;
}

console.log("After the while loop");

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let index = 0;

//while(index <= days.length - 1)
while(index < days.length){
    console.log(days[index]);  //days[0], days[1], days[2].... days[6]
    index++;
}
