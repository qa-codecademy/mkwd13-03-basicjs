console.log("Hey, I'm here!!");

const button = document.getElementById("myButton");

function clickMe() {
  alert("You clicked me!");
}

// wrong - this is gonna execute immediately, which we dont want - instead, it should wait for a button click
// button.onclick = clickMe();

// right way to do it
button.onclick = clickMe;

const myDiv = document.getElementById("myDiv");

function greeting() {
  alert("Happy New Year!");
}

function goodbyeGreeting() {
  alert("It was nice to meet you");
}

// myDiv.onmouseover = greeting;

// myDiv.onmouseout = goodbyeGreeting;

const buttonEvent = document.querySelector("#buttonEvent");

// function eventListenerClick() {
//   console.log("You clicked me through the event listener");
// }

// buttonEvent.addEventListener("click", eventListenerClick, false);

buttonEvent.addEventListener("click", function () {
  console.log("You clicked me through the event listener");
});

const nameInput = document.getElementById("nameInput");

// nameInput.addEventListener("blur", function () {
//   console.log(`Hello ${nameInput.value}`);
// });

nameInput.addEventListener("input", function (event) {
  //   console.log(event);

  console.log(`Hello ${event.target.value}`);
});

const excerciseOne = document.getElementById("exerciseOne");

excerciseOne.addEventListener("click", function () {
  alert("Hello Ivan");
});

const redDiv = document.getElementById("redDiv");

function setColorToDiv(event) {
  console.log(event.target.style);
  event.target.style.backgroundColor = "red"; // background-color
  event.target.style.width = "600px";
}

redDiv.addEventListener("mousemove", setColorToDiv);
// redDiv.removeEventListener("mousemove", setColorToDiv); // this will completely remove the function associated to the event listener provided as the first parameter of "removeEventListener"

const username = document.getElementById("username");
const feedback = document.getElementById("feedback");

function checkUsername(minLength) {
  if (username.value.length < minLength) {
    feedback.textContent = `Username must be atleast ${minLength} characters`;
  } else {
    feedback.textContent = "";
  }
}

username.addEventListener("blur", function () {
  checkUsername(5);
});

document.getElementById("parent").addEventListener("click", function () {
  alert("Parent div clicked!");
});

document.getElementById("child").addEventListener("click", function (event) {
  alert("Child div clicked!");
  event.stopPropagation();
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submission prevented");
});
