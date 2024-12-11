console.log("======First example - function scope=====");

function printMessage(){
    let message = "Hello world";
    console.log(message);
}
printMessage();
//console.log(message); //message lives in the function scope ERROR!!!

console.log("====Function vs global scope======");
let greeting = "Hello SEDC"; //global scope

function printGreeting(){
    let greeting = "Happy holidays!"; //function scope
    console.log(greeting);
}
printGreeting();

//.....
console.log(greeting); //Hello SEDC

console.log("====Global scope=====");


function printText(){
    console.log(text);
}
let text = "This is a text in the global scope";
printText();

console.log("===Overwriting values from global scope====");
let num = 30;

function exampleOverwriting(){
      num = 50; //changing the value of the global variable num
     console.log(num); //50
}
console.log("===Before overwriting====");
console.log(num); //30

//.....
exampleOverwriting();

//....
console.log(num);


console.log("===bad example====");

function badExample(){
    a = 2;
    console.log(a);
}
badExample();
console.log(a);