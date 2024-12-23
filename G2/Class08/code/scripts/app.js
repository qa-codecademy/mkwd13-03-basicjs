
// ============== Using HTML Handlers (check the HTML) ===================

function sayHello() {
    alert('Hello there!');
}

function greet(message) {
    alert(message);
}

// ============== Using Traditional DOM Event Handlers ===================

let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');
let resetBtn = document.getElementById('reset');
let resultParagraph = document.getElementById('result');

let count = 0;

increaseBtn.onclick = function () {
    count++;
    resultParagraph.innerText = count;
}

function decrease() {
    count--;
    resultParagraph.innerText = count;
}

function reset() {
    count = 0;
    resultParagraph.innerText = 'Reset!'
}

decreaseBtn.onclick = decrease;
resetBtn.onclick = reset;

// If you add more than one click event on same button
// it will always consider the lastly added one
// and override the previuos click event

// resetBtn.onclick = decrease;


// ============== Using Event listeners ===================
let fNameInput = document.getElementById('fName');
let lNameInput = document.getElementById('lName');
let saveBtn = document.getElementById('btnSave');
let saveUserParagraph = document.getElementById('saveResult');


saveBtn.addEventListener('click', function () {
    let fNameValue = fNameInput.value;
    let lNameValue = lNameInput.value;
    saveUserParagraph.innerText = `${fNameValue} ${lNameValue} saved to database!`;
    fNameInput.value = '';
    lNameInput.value = '';
    sayHello();
});







