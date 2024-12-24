console.log("Events working");

//Traditional DOM Event Binding

const clickMeBtn = document.querySelector("#clickMeBtn");
console.log(clickMeBtn);

function sayHello() {
  console.log("Hello World!");
}

function printWin() {
  console.log("You are the winner");
}

//Passing a function reference as event listener function
clickMeBtn.onclick = sayHello;

clickMeBtn.onclick = printWin;

//Defining a function as a value directly ( anonymous function )
clickMeBtn.onclick = function () {
  console.log("I am not a named function and i still work properly");
};

//Modern Event Listners
const listnerBtn = document.querySelector("#listenerBtn");
console.log(listnerBtn);

function sayGreeting() {
  console.log("Hello from G7 English Group!");
}

listnerBtn.addEventListener("click", sayGreeting);

listnerBtn.addEventListener("click", function () {
  console.log("I am in the add event listener and im also anonymous");
});

//Inputs example

//SELECTORS
const inputEl = document.querySelector("#nameInput");
const nameBtn = document.querySelector("#nameBtn");
const errorMsgEl = document.querySelector(".error-msg");
const displayEl = document.querySelector(".display");

console.log(inputEl, nameBtn, errorMsgEl, displayEl);

errorMsgEl.style.color = "red";

//background-color // backgroundColor

//FUNCTIONS
function printFullName() {
  console.log("User's full name:", inputEl.value);

  if (!inputEl.value) {
    displayEl.textContent = "";
    return;
  }

  displayEl.textContent = `User's full name: ${inputEl.value}`;
}

function validateNameLength(minLength) {
  if (minLength > inputEl.value.length) {
    errorMsgEl.textContent = `Minimum characters is ${minLength}`;
  } else {
    errorMsgEl.textContent = "";
  }
}

//LISTENERS
nameBtn.addEventListener("click", printFullName);

inputEl.addEventListener("blur", function () {
  console.log("blur fired, not focused on input anymore");
  validateNameLength(10);
});
