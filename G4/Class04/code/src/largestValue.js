let numbers = [34, 5, 9, 7, 45, 12, 89, 2, 33, 77];
let anotherArray = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77, 14, 15];

function findLargestValue(inputArray){ 
      let counter =0;
      let max = -Infinity;

      while(counter < inputArray.length){
          console.log(`counter ${counter}`);
          console.log(`inputArray[${counter}]: ${inputArray[counter]}`);
          if(inputArray[counter] > max){
              max = inputArray[counter];
          }
          console.log("max "+ max);
          counter++;
      }

      return max;
}

let maxOfNumbers = findLargestValue(numbers); //inputArray = [34, 5, 9, 7, 45, 12, 89, 2, 33, 77]
console.log(maxOfNumbers);
let maxOfAnotherArray = findLargestValue(anotherArray); //inputArray = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77]
console.log(maxOfAnotherArray);