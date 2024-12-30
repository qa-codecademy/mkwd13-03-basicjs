// Write a function that takes a number as input. Write the following checks for the number:

// Is it positive?
// Number of digits
// Is it even/odd

function getNumberStats(inputNumber) {
    //validation
    if (isNaN(inputNumber)) {
        console.log(`${inputNumber} is not a number`);
        return; //the function will exit here (we can use this instead of writing the rest of the code in else block)
    }
    checkPositiveNegativeNumber(inputNumber);
    console.log(getNumberOfDigits(inputNumber));
    checkOddEvenNumber(inputNumber);
}

function checkPositiveNegativeNumber(inputNumber) {
    if (inputNumber > 0) {
        console.log(`${inputNumber} is positive`);
    } else if (inputNumber < 0) {
        console.log(`${inputNumber} is negative`);
    } else {
        console.log(`${inputNumber} is zero`);
    }
}

function getNumberOfDigits(inputNumber) {
    let counter = 0;
    if (inputNumber == 0) {
        counter = 1;
        return counter;
        //return 1;
    }
    while (inputNumber != 0) {
        counter++;
        inputNumber = parseInt(inputNumber / 10); //get the whole part of dividing by 10
    }
    return counter;
}

function checkOddEvenNumber(inputNumber) {
    if (inputNumber % 2 == 0) {
        console.log(`${inputNumber} is even`);
    } else {
        console.log(`${inputNumber} is odd`);
    }
}


getNumberStats(10);
getNumberStats(-123);
getNumberStats("qinshift");