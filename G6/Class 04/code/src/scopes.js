function printMessage(){
    //function scope
    let message = "Hello World!";
    console.log(message);
}

printMessage();
//console.log(message); //ERROR! message is scoped to the function printMessage

console.log("=====Global vs function scope====");

let greeting = "Hello SEDC!"; //global scope

function printGreeting(){
    let greeting = "Hello SEDC from printGreeting!";
    console.log(greeting); //greeting is taken from function scope
}

//OUTSIDE of any function, in the global scope
console.log(greeting); //Hello SEDC

printGreeting();


console.log("==Using variables from global scope===");

let text = "We are learning scopes!";
function printText(){
    console.log(text);
}
printText();

console.log("====Overwriting values====");

let num = 30;

function myFunction(){
    num = 50; //there is no let or var, we do not redecalre a variable, we try to use a variable called num
    let num2 = 10;
    console.log(num);
}

function myFunction2(){
    console.log(num2); //ERROR - num2 is local for myFunction
}

console.log("before myFunction call");
console.log(num);
myFunction();
console.log("after myFunction call");
console.log(num);



//myFunction2();

//!!!EACH FUNCTION defines its own scope between {}


let message = "Outside the function"; //global scope						
function warning(message){ //let message = 
    //meesage is param (local variable), variable with function scope
	console.log(message);	
}


warning("Inside the function");
console.log(message);

