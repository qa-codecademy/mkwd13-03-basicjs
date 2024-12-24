console.log("This is online");

//CONST VS LET
//const in js makes it so that a variable cannot be reassigned, everything else is still available
let firstName = "Borche";

firstName = "John";

const lastName = "Borisovski";

// lastName = "Dawson";

const fruits = ["Apples", "Oranges", "Strawberries"];

fruits.push("Lemons");

const person = {
  firstName: "John",
  lastName: "Doe",
};

person.firstName = "Jane";

//EXERCISE ONE SOLUTION

//Classic Selectors
// // Select the first div
// const firstDivEl = document.getElementById("firstDiv");
// console.log(firstDivEl);
// // Select all paragraphs
// const allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs);
// // Select the last div in the section
// const lastDivEl =
//   document.getElementsByClassName("container")[0].lastElementChild;
// console.log(lastDivEl);
// // Select the header 3 in the last div
// const headerThreeEl = lastDivEl.getElementsByTagName("h3")[0];
// console.log(headerThreeEl);
// // Select the header 1 in the last div
// const headerOneEl = lastDivEl.getElementsByTagName("h1")[0];
// console.log(headerOneEl);
//Query Selectors
// Select the first div
const firstDivEl = document.querySelector(".first-div");
console.log(firstDivEl);
// Select all paragraphs
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
// Select the last div in the section
const lastDivEl = document.querySelector(".container").lastElementChild;
console.log(lastDivEl);
// Select the header 3 in the last div
const lastDivH3El = lastDivEl.querySelector("h3");
console.log(lastDivH3El);
// Select the header 1 in the last div
const lastDivH1El = lastDivH3El.previousElementSibling;
console.log(lastDivH1El);
// Get the text from the first paragraph in the second div
const paragraphText = document.querySelector(".second").textContent;
console.log(paragraphText);
// Add the word "text" to the text element in the second div
document.querySelector(".second").textContent += ", and added some text.";
// Change the text of the header 1 in the last div
lastDivH1El.textContent = "I have been updated on 24/12/2024";
// Change the text of the header 3 in the last div
lastDivH3El.textContent = "I am also updated on the same date";
// Note:You can't change the HTML
