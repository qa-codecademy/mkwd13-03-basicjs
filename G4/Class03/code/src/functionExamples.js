//No return
function greeting(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
}

greeting("Stefan","Stojanovski"); //firstName = Stefan, lastName = Stojanovski
greeting("Bojan","Bojanovski"); //firstName = Bojan, lastName = Bojanovski


//return
function sum(num1, num2){
     var result = num1+ num2;
     return result;
    // console.log("something..");
}

console.log("Request 1:");
let res = sum(5, 2);
console.log(res);
if(res % 2 == 0){
    console.log('The sum of 5 and 2 is even number');
}
else{
    console.log('The sum of 5 and 2 is odd number');
}

let anotherResult = sum(16, 5);
console.log(anotherResult);

alert(sum(4,5)); // sum(4,5) -> 9

//EXERCISE
function multiplyNumbers(num1, num2){
    // let result = num1 * num2;
    // return result;
    return num1 * num2;
}

function subtractNumbers(num1, num2){
    let result = num1 - num2;
    return result;
}

let mul = multiplyNumbers(5,6);
console.log("mul:");
console.log(mul);
let sub = subtractNumbers(7,5);
let anotherSub = subtractNumbers(9,8);
console.log("sub:");
console.log(sub);
console.log("anotherSub:");
console.log(anotherSub);
