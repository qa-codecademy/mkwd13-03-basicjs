let numbers = [2, 4, 5];
let list = document.getElementById('listOfNumbers');
let resultParagraph = document.getElementById('sum');
let equationElement = document.getElementById('equation');


function printNumbersInList(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        list.innerHTML += `<li>${numbers[i]}</li>`;
    }
}

function printSum(numbers, element) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    element.innerHTML = `The sum of the numbers from the list is: ${sum}`;
}

function printMathEquation(numbers, element) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (i === numbers.length - 1) {
            element.innerText += ` ${numbers[i]} `
        }
        else {
            element.innerText += ` ${numbers[i]} + `
        }
    }
    element.innerText += ` = ${sum}`;
}

printNumbersInList(numbers);
printSum(numbers, resultParagraph);
printMathEquation(numbers, equationElement);