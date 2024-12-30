// Write a function that takes an array of numbers as input. It should divide the even and odd numbers in two arrays. Then print the arrays.

// Bonus: Instead of instantly printing them, try to think how would you return them.

function divideArray(inputArray){
    if(!validateArray(inputArray)){ //if(validateArray(inputArray) == false)
        console.log("Not all members are numbers");
        return;
    }
    let evenNumbers = [];
    let oddNumbers = [];
    for(let item of inputArray){
        if(item%2==0){
            evenNumbers.push(item);
        }
        else{
            oddNumbers.push(item);
        }
    }
   return {
       oddNums: oddNumbers,
       evenNums: evenNumbers
   };

}

function validateArray(inputArray){
    for(let item of inputArray){
        if(typeof(item) != "number"){
            return false;
        }
    }
    return true;
}

console.log(divideArray([1,2, "qinshift"])); //undefined
console.log(divideArray([1,2, 3, 4, 5]));