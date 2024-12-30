// Write a function that takes an array as input and cleans it from the falsy values.
// Example: if the array is [NaN, 3, 2, 0, undefined, "sedc", true, false] it should return [3, 2, "sedc", true]. 
// Note: You shouldn't change the existing array.

function cleanFalsyValuesFromArray(inputArray){
    let result = [];
    for(let item of inputArray){
        if(item){ //checks if item is true (not falsy)
          result.push(item);
        }
    }
    return result; //return the new result array
}


console.log(cleanFalsyValuesFromArray([2, 5, ['a', 'b'], NaN, undefined]))