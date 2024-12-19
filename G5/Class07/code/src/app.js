console.log("===== Access by id =======");
let myDivMain = document.getElementById("main");
console.log(myDivMain);
let myHeader = document.getElementById("myTitle");
console.log(myHeader);

console.log("==== Access by class ====");
let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(ourParagraphs);

console.log(`ourParagraphs length: ${ourParagraphs.length}`);
console.log(`First Element: ${ourParagraphs[0].innerText}`);


console.log("====== Access by tag name ======");
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

console.log(`paragraphs length: ${paragraphs.length}`);
console.log(`Second Element: ${paragraphs[1].innerText}`);

console.log("=== Access by query ====");
let firstDiv = document.querySelector(".myDiv");
console.log(firstDiv);
console.log("=== all div with querySelectorAll ====");
let allDiv = document.querySelectorAll(".myDiv");
console.log(allDiv);
console.log(`allDiv length: ${allDiv.length}`);
console.log(`second div: ${allDiv[1].innerText}`);

console.log("=== Access by sibling ====");
let header = document.getElementsByTagName("h1")[0];
console.log(header);
let nextSibling = header.nextElementSibling;
console.log(nextSibling);

// let nextNexSiblingTest = nextSibling.nextElementSibling;
// console.log(nextNexSiblingTest);

let previousSibling = nextSibling.previousElementSibling;
console.log(previousSibling);

console.log("==== Access by children ====");

let secondDiv = document.querySelectorAll(".myDiv")[1];
console.log(secondDiv);
let children = secondDiv.children;
console.log(children);
console.log(`children length: ${children.length}`);
console.log(`second children: ${children[1].innerText}`);

let firstChild = secondDiv.firstElementChild;
console.log(firstChild);
let lastChild = secondDiv.lastElementChild;
console.log(lastChild);


console.log("=== GETTING TEXT ====");
let main = document.getElementsByTagName("div")[0];

let textWithSpace = main.textContent;
console.log(textWithSpace);

let textWithOutSpace = main.innerText;
console.log(textWithOutSpace);


console.log("===== CHANGING TEXT =====");

let headerChangeText = document.getElementById("myTitle");
console.log(headerChangeText.innerText);

headerChangeText.innerText = "";
headerChangeText.innerText = "New Text from JS!";
headerChangeText.innerText += " Ultra new text!";

console.log("===== ADD NEW HTML ====");
let addNewHtmlAtMain = document.getElementById("main");
addNewHtmlAtMain.innerHTML += "<h3>New header generated from JS!!!</h3>";
addNewHtmlAtMain.innerHTML += "<p class='myParagraph first' id='paragraphOne'>New paragraph generated from JS with class and id!!! </p>";


let myStudent = document.getElementById("myStudent");

function createListItem(itemArray, element, nameOfList){
    element.innerHTML += `<h3>List of ${nameOfList}:</h3>`
    let orderList = "";
    for(let item of itemArray){
        orderList +=  `<li>${item}</li>`
    }
    element.innerHTML += `<ol>${orderList}</ol>`
}

let students = ["Bob", "Vitomir", "Mitko", "Marija", "Stevan", "Bojan"];

createListItem(students, myStudent, "students");
createListItem(["G1","G2","G5","G6"], myStudent, "Groups");


console.log("====== ADD CSS ======");
let addCss = document.getElementsByClassName("second")[0];
addCss.style.backgroundColor = "#008";
addCss.style.color = "red";
addCss.style.display = "flex";
addCss.style.justifyContent = "flex-end";
addCss.style.padding = "10px";

addCss.classList.add("newClass"); // add new class in html element

let container = document.getElementById("container");

function addParagraph(text, element){

    let newParagraph = document.createElement("p");

    newParagraph.innerText = text;

    newParagraph.style.color = "blue";
    newParagraph.style.fontSize = "18px";
    newParagraph.style.margin = "10px 0";
    newParagraph.style.border = "1px solid #ddd"
    newParagraph.style.padding = "10px";
    newParagraph.style.borderRadius = "5px";
    newParagraph.style.backgroundColor = "#f9f9f9f9";

    element.appendChild(newParagraph);
}


addParagraph("Write homework", container)
addParagraph("Listening music", container)