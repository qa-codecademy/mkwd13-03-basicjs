function filterOddEven(array, type){
    let result = [];
    if(type === "even"){
       for (let num of array) {
           if(num % 2 === 0){
               result.push(num);
           }
       }
       return result;
    } else if(type === "odd"){
        for (let num of array) {
            if(num % 2 !== 0){
                result.push(num);
            }
        }
        return result;
    } else {
        console.log("The type was not correct. Please enter odd or even");
        return null;
    }
}

let testArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2];

let oddNumbers = filterOddEven(testArray, "odd");
let evenNumbers = filterOddEven(testArray, "even");

console.log(oddNumbers);
console.log(evenNumbers);