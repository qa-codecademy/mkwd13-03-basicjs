console.log("===================== DOCUMENT OBJECT MODEL (DOM) =====================");
console.log(window); // represents the browser window containing the web page (global object)
console.log(this); // global 'this' => window object
// alert("Hello from alert");
// window.alert("Hello from alert");

// Part of the window object is the *document* object which represents our HTML file (our web page)
console.log(window.document);
// window.document or just document
console.log(document);

// Using document to find the title of the page
console.log(document.title);

// Using document to find the current URL
console.log(document.URL);

// Using document to force reload on the page from JavaScript
// document.location.reload();


console.log("");
console.log("===================== SELECTORS =====================");

console.log("");
console.log("=========== Selecting by Id ===========");

let headerElement = document.getElementById("main-header");
console.log(headerElement);
console.log(headerElement.attributes);


console.log("");
console.log("=========== Selecting by Class Name ===========");

let features = document.getElementsByClassName("feature");
console.log(features);


console.log("");
console.log("=========== Selecting by Tag Name ===========");

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);


console.log("");
console.log("=========== Selecting using querySelector/querySelectorAll ===========");
// selecting elements using CSS-like syntax

// 1) for selecting only one element
let subTitle = document.querySelector(".subtitle");
console.log(subTitle);

let sectionHeader = document.querySelector("#features > h2");
console.log(sectionHeader);

// 2) for selecting multiple elements
let allFeatures = document.querySelectorAll(".feature");
console.log(allFeatures);


console.log("");
console.log("=========== Traversing through the DOM tree ===========");
let featureList = document.querySelector(".feature-list");
console.log(featureList);
// Child elements selection
console.log("The children of feature list: ", featureList.children);
// Parent element selection
console.log("The parent of feature list: ", featureList.parentElement);
console.log("The grandparent of feature list: ", featureList.parentElement.parentElement);

// Sibling elements selection
let previousSibling = featureList.previousElementSibling;
let nextSibling = featureList.nextElementSibling;
console.log(previousSibling);
console.log(nextSibling); // null

