console.log(document); // logs the entire document (the html)

// we can access everything we keep in the document (html via the document object)
console.log(document.head);
console.log(document.URL);

// Accessing elements by ID
const firstParagraph = document.getElementById("first-paragraph");
console.log("First paragraph:", firstParagraph);

// Accessing elements by class name
// It always returns an array of elements
// So if we want to access a specific element we need to access it via its index
const explanationDivs = document.getElementsByClassName("dom-explanation");
console.log("Divs with dom-explanation class:", explanationDivs);
const firstExplanationDiv = explanationDivs[0];
console.log("First explanation-div element:", firstExplanationDiv);

// Accessing elements by tag name
// It always returns an array of elements
// So if we want to access a specific element we need to access it via its index
const allParagraphs = document.getElementsByTagName("p");
console.log("All <p> elements:", allParagraphs);
console.log("Last <p> tag:", allParagraphs[allParagraphs.length - 1]);

// QUERY SELECTORS

// Accessing elements by id using query selector
const thirdParagraph = document.querySelector("#third-paragraph");
console.log("Third <p> paragraph:", thirdParagraph);

// Accessing element by class name using query selector
// Query selector always returns the firt element that matches the given selector (it doesn't return collection)
// The same applies for both classes and tags
const domExplanationByQuerySelector =
  document.querySelector(".dom-explanation");
console.log("First dom-explanation div:", domExplanationByQuerySelector);

// Accessing multiple elements using querySelectorAll
// const listItems = document.querySelectorAll("li");
const listItems = document.querySelectorAll("#node-types li");
console.log("All list items:", listItems);

// Traversing through DOM Tree
// Accessing parent element
const secondParagraph = document.getElementById("second-paragraph");
const parentDiv = secondParagraph.parentElement;
console.log("Parent div element:", parentDiv);

// Accessing next sibling element
// Next sivling returns the whole node
// NextElementSibling returns just the element
const nextSibling = secondParagraph.nextElementSibling;
const previousSibling = secondParagraph.previousElementSibling;
console.log("Next sibling:", nextSibling);
console.log("Previous sibling:", previousSibling);

// Accessing children of an element
const listTypes = document.getElementById("node-types");
const childrenOfList = listTypes.children;
console.log("Children of list:", childrenOfList);

// Accessing the last child of an element
const lastChildElement = firstExplanationDiv.lastElementChild;
console.log("Last element child:", lastChildElement);

// Accessing a specific child of an elemnt
const secondListItem = listTypes.children[1]; // Index starts from 0
console.log("Second list item:", secondListItem);
