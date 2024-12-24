const calcBtn = document.getElementById('calcBtn');
const resultParag = document.getElementById('result');

const firstNumber = document.getElementById("numberOne")
const secondNumber = document.getElementById("numberTwo")


function sumNumbers(numberOne, numberTwo){
    return numberOne + numberTwo
};

function isButtonNotDisabled(){
    // TRUE only if there is value in the BOTH inputs
    return firstNumber.value && secondNumber.value 
};

firstNumber.addEventListener('keyup', function(){
    const isNotDisabled = isButtonNotDisabled()

    if(isNotDisabled) {
        calcBtn.disabled = false
    }
    
});

secondNumber.addEventListener('keyup', function(){
    const isNotDisabled = isButtonNotDisabled()

    // SAME AS firstNumber but shorter
    calcBtn.disabled = !isNotDisabled
});

calcBtn.addEventListener("click", function(){
    // const firstNumber = document.getElementById("numberOne")
    // const secondNumber = document.getElementById("numberTwo")

    // with selectedElement.value will return the VALUE inside the input
    const parsedFirstNumber = parseFloat(firstNumber.value);
    const parsedSecondNumber = parseFloat(secondNumber.value);

    
    const result = sumNumbers(parsedFirstNumber, parsedSecondNumber);

    console.log(result);
    // do what I want with result

    resultParag.innerText = `Result is: ${result}.`;


})


// COLOR CHANGE EXAMPLE
const colorInput = document.getElementById('colorInput');

colorInput.addEventListener("change", function(){
    console.log("CHANGE DETECTED")
    let color = colorInput.value

    let text = document.getElementById('helloWorld');

    text.style.color = color
})