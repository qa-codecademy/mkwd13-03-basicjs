console.log('connected');

let myNeighbourPet = 'kitty';

// if(myNeibghourPet === 'dog'){
//     console.log('Dogs are really friendly')
// }else {
//     console.log('Pets are awesome get a pet =)')
// }

// SWITCH
switch(myNeighbourPet){
    case 'dog':
    case 'puppy':
        console.log('Dogs are really friendly');
        break;
    case 'cat':
    case 'kitty':
        console.log('Cats are awesome!');
        break;
    default:
        console.log('Pets are awesome get a pet =)')
}

console.log('*** FUNCTIONS ***');

let greetStudentOne = "Hello Bob";
console.log(greetStudentOne);
let greetStudentTwo = "Hello John";
let greetStudentThree = "Hello Cell";
console.log(greetStudentThree, greetStudentTwo);

// !IMPORANT => Calling the function before it's declaring for now is possible, but it is bad practice
sayHello() 

// DECLARATION OF FUNCTIONS
function sayHello(){
    // Body of the function
    // Inside we write the code to be executed by the function
    console.log('Hello from function! =)');
}


// FUNCTION INVOKATION (CALLING OF THE FUNCTION)
sayHello()
sayHello()
sayHello()
sayHello // This won't call the function 


console.log('*** PARAMETERS AND ARGUMENTS ***')
// PARAMETERS AND ARGUMENTS
function greetStudent(nameParameter){
    console.log('Hello', nameParameter)
};

// ARGUMENTS
greetStudent("Bob");
let studentName = 'John';
greetStudent(studentName); // John
greetStudent('Cell');

// EXAMPLE #2
function multiplyNumbers(numberOne, numberTwo, numberThree){
    console.log(numberThree)

    let areAllParametersNumber = typeof numberOne === "number" && typeof numberTwo === "number" && typeof numberThree === "number" 
    
    if(areAllParametersNumber){
        let result = numberOne * numberTwo * numberThree;

        console.log('result is:', result)
    } else {
        console.log('Some of the values were not number')
    }
   
};

multiplyNumbers(5,2,3);

// The names of the variables should not be as the names of the parameters
let numberTwo = 5;
let numberThree = 6;
let numberOne = 10;

multiplyNumbers(numberThree, numberOne, numberTwo)

let firstNum = 4;
let secondNum = 5
multiplyNumbers(firstNum, secondNum, "6")

// If we do not provide arguments for the rest of the parameters, thos parameters will be UNDEFINED
multiplyNumbers(2);

console.log("*** RETURN KEYWORD ***")
// *** RETURN KEYWORD ***

//  studentName = "student" means that the second parameter studentName has DEFAULT value "student", meaning if value is not passed, the function will use the default value
function studentPassed(studentScore, studentName = "student"){
    let passingScore = 70;

    if(Number.isNaN(studentScore)){
        return 'STUDENT SCORE WAS NOT A NUMBER!!!'
    }

    if(studentScore >= passingScore){
        return `Yes, the ${studentName} has passed.`;
    }else {
        return `No, the ${studentName} has failed.`;
    }
};

// the variable hasStudentPassed contains the VALUE RETURNED from the function
let hasStudentPassed = studentPassed(89);
console.log(hasStudentPassed);
console.log(studentPassed(55));


let studentScoreInput = prompt('What is your score?');
let studentNameInput = prompt('What is your name?');

// Number(someValue), parseInt(someValue), parseFloat(someValue) will convert string to number
let studentSecondPassed = studentPassed(Number(studentScoreInput), studentNameInput);

console.log(studentSecondPassed);

console.log('*** SCOPE ***')
// SCOPE 

// THIS VARIABLE IS IN GLOBAL SCOPE
let globalVar = "I'm a global variable.";
let globalMessage = 'Message in global scope';

function exampleFunction(){
    // BODY OF FUNCTION

    // FUNCTIONAL SCOPE
    let functionVar = "I'm a function variable."
    let globalMessage = 'Message in functional scope'

    if(true){
        // BLOCK SCOPE 
        let blockVar = "Block variable in function";

        // THIS VARIABLE CAN BE USED AND READ IN THIS SCOPE ONLY
        console.log(blockVar)
    }

    console.log(globalMessage)
    console.log(globalVar)
    console.log(functionVar)

    // THE FUNCTION CANNOT ACCESS THE VARIABLE IN THE BLOCK SCOPE
    console.log(blockVar) // undefined
};


exampleFunction()

console.log(globalVar); // yes we can do this

// IN THE GLOBAL SCOPE WE CANNOT ACCESS VARIABLES DECLARED IN THE FUNCTIONAL SCOPE
console.log(functionVar) 