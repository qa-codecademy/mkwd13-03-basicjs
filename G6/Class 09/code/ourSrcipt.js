$(document).ready(function(){

let allElements = $("*"); //allElements
console.log(allElements);
console.log(allElements[0]);

//select by id
let mainTitleHeader = $("#mainTitle");
console.log(mainTitleHeader);
console.log(mainTitleHeader[0].innerHTML);

//by class
let innerWrappers = $(".innerWrapper");
console.log(innerWrappers);

//by tag
let paragarphs = $("p");
console.log(paragarphs);

//get all elements that satisfy at least one of the css selectors
let multipleSelectorsElements = $("#mainTitle, .innerWrapper, .wrapper");
console.log(multipleSelectorsElements);

let firstParagraph = $("p:first"); //get first p
console.log(firstParagraph);

let lastParagraph = $("p:last"); //get last p
console.log(lastParagraph);

let firstChild = $("h3:first-child"); //get all h3 elements, that are first child of their parent
console.log(firstChild);

let lastChild = $("p:last-child"); //get all p elements, that are last child of their parent (from any type- the last child of the parent)
console.log(lastChild);

let lastChildH3 = $("h3:last-child"); //get all h3 elements, that are last child of their parent
console.log(lastChildH3);

let secondChildParagraphs = $("p:nth-child(2)"); //all p that are second child of the parent
console.log(secondChildParagraphs);

console.log("====DOM vs jQuery======");
let firstParagraphDOM = paragarphs[0];
console.log(firstParagraphDOM);
console.log(firstParagraphDOM.innerText);

let firstParagraphJquery = paragarphs.first();
console.log(firstParagraphJquery);
console.log(firstParagraphJquery.text());

//DOM
// firstParagraphDOM.innerText = "New text for first paragraph!";
// console.log(firstParagraphDOM);

//jQuery 
firstParagraphJquery.text("New text for first paragraph with jQuery!");
console.log(firstParagraphJquery.text());

let lastParagraphJquery = paragarphs.last();
console.log(lastParagraphJquery);
console.log(lastParagraphJquery.text());

let siblingParagraph = lastParagraphJquery.prev(); //find the previous sibling
console.log(siblingParagraph.text());

let anotherWay = paragarphs.last().prev().text(); //we can chain them
console.log(anotherWay);

let nextSiblingText = $("#secondTitle").next().text();
console.log(nextSiblingText);
$("#secondTitle").next().text("Changed text from under subheader");
console.log($("#secondTitle").next().text());

console.log(innerWrappers.first().html()); //.html() is innerHTML in Vanilla JS
innerWrappers.first().html("<span>New span</span>");
console.log(innerWrappers.first().html()); 

console.log($("input").first().val());// get value from input

//TOGGLE
paragarphs.last().hide(); //display property
paragarphs.last().show();

//CSS 
paragarphs.last().css("color", "red");
paragarphs.last().css("background-color", "yellow");

//After & Before
paragarphs.last().after("<h2>This is after header");
paragarphs.last().before("<h2>This is before header");
});

