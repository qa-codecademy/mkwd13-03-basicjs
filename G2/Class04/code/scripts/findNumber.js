function findNumber(number, numberArr) {
    let counter = 0;
    for (let i = 0; i < numberArr.length; i++) {
        if (number === numberArr[i]) {
            counter++;
        }
    }
    console.log(`There is ${counter} occurrences of number ${number} in the array`)
}

let numbers = [1, 2, 3, 4, 4, 3, 3, 6, 6, 6, 5, 4, 3, 7, 8, 9];
findNumber(10, numbers);



// Even / Odd

function findEvenOrOdd(array, type) {
    let resultArray = [];
    if (type.toLowerCase() === "even") {
        for (let item of array) {
            if (item % 2 === 0) {
                resultArray.push(item);
            }
        }
    } else if (type === "odd") {
        for (let item of array) {
            if (item % 2 !== 0) {
                resultArray.push(item);
            }
        }
    } else {
        console.log("No such type of number that I know of.");
        return [];
    }
    return resultArray;
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findEvenOrOdd(numbersArray, 'Even'));
// console.log(findEvenOrOdd(numbersArray, 'odd'));
// console.log(findEvenOrOdd(numbersArray, 'martin'));
// console.log(findEvenOrOdd(numbers, 'even'));
