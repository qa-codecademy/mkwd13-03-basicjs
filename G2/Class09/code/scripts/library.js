// document.addEventListener('DOMContentLoaded', function() {

// })
$(document).ready(function(){

// Selectors in jQuery
console.log("============================= SELECTORS ==================")
let allElements = $('*');  // select all the elements from the DOM


let jsSelection = document.getElementById('mainTitle');
let mainTitleHeader = $('#mainTitle');  // select by id

let innerWrapperElements = $('.innerWrapper');

console.log(allElements);
console.log(mainTitleHeader[0].innerText);
console.log(innerWrapperElements);

let elementsByMultipleSelectors = $('.innerWrapper, .wrapper, #mainTitle');

console.log(elementsByMultipleSelectors);

let paragraphs = $('p');
console.log(paragraphs);

let firstParagraph = $('p:first');
let lastParagraph = $('p:last');
console.log(firstParagraph);
console.log(lastParagraph);


let firstChildren = $('h3:first-child'); // all h3 elems, which are first child of theri parent
let lastChildren = $('p:last-child');
console.log(firstChildren);
console.log(lastChildren);

let secondChildren = $('p:nth-child(2)')
console.log(secondChildren);


// DOM vs jQuery
console.log("======================== DOM vs jQuery ================")

let firstParagraphDOM = paragraphs[0];
console.log(firstParagraphDOM);
console.log(firstParagraphDOM.innerText);
console.log(firstParagraphDOM.innerHTML);


let firstParagraphJquery = paragraphs.first();
console.log(firstParagraphJquery.text());
console.log(firstParagraphJquery.html());


paragraphs.last().text('Hello from Qinshift!');

let secondParagraph = paragraphs.get(1);
console.log(secondParagraph);

let prevSibling = paragraphs.last().prev().text();
console.log(prevSibling);


let inputs = $('input');
console.log(inputs);

let inputText = $('input[value="Cool"]');
console.log(inputText.val());

inputText.val('This is the new Cool value!');


inputText.hide();
inputText.show();

paragraphs.last().css('background-color', 'red');
paragraphs.last().css('color', 'yellow');


paragraphs.last().after('<h1>Woooow! After!</h1>');
paragraphs.last().before('<h1>Woooow! Before!</h1>');


});