let anotherArray = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77, 14, 15];
let numbers = [34, 5, 9, 7, 45, 12, 89, 2, 33, 77];

function findLargestValue(inputArray){

    let counter = 0;
    let max = -Infinity;
    //let max = inputArray[0];

    while(counter < inputArray.length){
        console.log(`counter: ${counter}`);
        console.log(`member: ${inputArray[counter]}`);

        if(inputArray[counter] > max){
            max = inputArray[counter];
        }

        console.log(`max: ${max}`);
        counter++;
    }

    console.log("The max value is: "+max);
}

findLargestValue([5,3,7]);
findLargestValue(anotherArray);
findLargestValue([2,3,4]);
findLargestValue(numbers);