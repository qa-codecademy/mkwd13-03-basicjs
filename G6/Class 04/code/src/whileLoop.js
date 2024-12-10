let counter = 1;

while (counter <= 5) {
    console.log(counter);
    counter = counter + 1;
    //counter++;
}

let workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
let index = 0;

while (index < workingDays.length) { //index < 5
    console.log(workingDays[index]);
    index++;
}


//Sum of squares
function sumPow(num1, num2) {
    let result = 0;
    let i = num1;
    while (i <= num2) {
        result += Math.pow(i, 2);
        i++;
    }
    return result;
}

console.log(sumPow(1, 4)); // 1 + 4 + 9 + 16 = 30
console.log(sumPow(101, 150)); // 797925