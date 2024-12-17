console.log("===================== DOCUMENT OBJECT MODEL (DOM) =====================");
console.log(window);
// window.alert("Hello from alert");
console.log(this);

console.log(window.document);
console.log(document);

console.log(document.title);

console.log(document.URL);

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
console.log("The children of feature list: ", featureList.children);
console.log("The parent of feature list: ", featureList.parentElement);
console.log("The grandparent of feature list: ", featureList.parentElement.parentElement);

let previousSibling = featureList.previousElementSibling;
let nextSibling = featureList.nextElementSibling;

console.log(previousSibling);
console.log(nextSibling); // null

