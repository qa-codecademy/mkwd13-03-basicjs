console.log("working");

console.log(document);

//Get element by id
// let mainHeadingEl = document.getElementById("mainTitle");

//!ABSOLUTELY ALWAYS CONSOLE LOG YOUR SELECTED ELEMENTS TO AVOID FUTURE BUGS
// console.log(mainHeadingEl);

// console.log(mainHeadingEl);
// console.log(mainHeadingEl.textContent);

//Get elementS by class name
// let paragraphs = document.getElementsByClassName("paragraph");

//!ABSOLUTELY ALWAYS CONSOLE LOG YOUR SELECTED ELEMENTS TO AVOID FUTURE BUGS
// console.log(paragraphs);

// console.log(paragraphs[0]);

// for (let el of paragraphs) {
//   console.log("This is a paragraph el", el);
// }

// let paragrahSecondEl = document.getElementsByClassName("second")[0];

// console.log(paragrahSecondEl);

//Get elementS by tag name

// let paragraphsTag = document.getElementsByTagName("p");

// console.log("Paragraphs Tag", paragraphsTag);

// let textEl = document.getElementsByTagName("text")[0];

// console.log(textEl);

//Query selector

let secondParagraphEl = document.querySelector(".second");

console.log(secondParagraphEl);

let paragraphs = document.querySelectorAll(".paragraph");

console.log(paragraphs);

let mainHeadingEl = document.querySelector("#mainTitle");

console.log(mainHeadingEl);

let firstDivEl = document.querySelector("div");

console.log(firstDivEl);

let allDivs = document.querySelectorAll("div");

console.log(allDivs);

//Siblings

console.log("First div next sibling", firstDivEl.nextElementSibling);

//Parent

console.log("Parent of the second paragraph", secondParagraphEl.parentElement);

//Children

console.log("First div children", firstDivEl.children);

console.log("First div first child", firstDivEl.firstElementChild);
console.log("First div last child", firstDivEl.lastElementChild);

//Getting text of an html element through js

console.log("Text in main heading");
console.log(mainHeadingEl.textContent);
console.log(mainHeadingEl.innerText);

mainHeadingEl.textContent = "This is now updated";
mainHeadingEl.textContent += ", and i've added this too!";
mainHeadingEl.textContent += 1234;

//Changing the inner html of an element
firstDivEl.innerHTML = "<h1>I have been added through javascript</h1>";

firstDivEl.innerHTML += `
  <p>This was added from javascript</p>
  <ul class="main-list">
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>
`;
