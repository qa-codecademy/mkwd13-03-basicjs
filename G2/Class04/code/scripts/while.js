
let a = 1;

// While loop and how it works

while (a <= 10) {
    console.log(a);
    a++; // a = a + 1;
}

let fruits = ['apple', 'banana', 'orange', 'grapes'];
let count = 0;
console.log(fruits);
while (count < fruits.length) {
    console.log(`${count}: ` + fruits[count]);
    count++;
}


// do/while, another looping structure
let b = 5;
let c = 5;
console.log("===== Using while() =====")
while(b < 5){
    console.log("Hello " + b);
    b++;
}

console.log("===== Using do/while() =====")

do {
    console.log("Hello " + c);
    c++;
} while (c < 5)


// Student Exercise 1

let start = 101;
let end = 150;
let squareSum = 0;

while(start <= end){
    //squareSum += Math.pow(start, 2);
    squareSum = squareSum + Math.pow(start, 2);
    start++;
}
console.log(squareSum);



