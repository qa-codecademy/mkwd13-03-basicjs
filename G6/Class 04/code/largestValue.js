let numbers = [35, 1, 15, 34, 22, 11, 7, 6, 45, 11];
let anotherArray = [36, 1, 12, 34, 22, 11, 7, 6, 45, 11, 12, 67];
let negativeArray = [-1, -22, -35, -65, -78];

function findLargestValue(inputArray){
    let index = 0;
    let maxValue = inputArray[0];
    //let maxValue = -Infinity;

    while(index < inputArray.length){
        console.log(`index: ${index}`);
        console.log(`member: ${inputArray[index]}`);
        //if (inputArray[index] > maxValue)
        if(maxValue < inputArray[index]){
            maxValue = inputArray[index];
        }

        console.log(`current max: ${maxValue}`);
        index++;
    }

    console.log(`The official max is: ${maxValue}`);
}


findLargestValue(numbers);
findLargestValue([5, 15, 35]);