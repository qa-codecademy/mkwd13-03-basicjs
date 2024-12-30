// Write a function that takes an array of strings as an argument. It should return the first string larger than 10 characters.

// Think about the other scenarios.

function findString(inputArray, len){
    for(let item of inputArray){
        if(item.length > len){
           return item;
        }
    }
    return null;
}

console.log(findString(["test", "no", "10", "chars"], 10)); //null
console.log(findString(["test", "javascript basic"], 10)); //javascript basic