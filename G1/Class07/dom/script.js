//console.log(document);

// Selecting element by ID
let myHeader = document.getElementById('myTitle');
// console.log(myHeader);
// console.log(myHeader.innerText);


// Selecting element by Class Name
let paragraphs = document.getElementsByClassName('myParagraph');
// console.log(paragraphs);
let secondPara = document.getElementsByClassName('second');
// console.log(secondPara);

// Selecting element by Tag name
let para = document.getElementsByTagName('p');
// console.log(para);
let divs = document.getElementsByTagName('div');
// console.log(divs);
let firstPara = para[0];
// console.log(firstPara);


// Query selectors
// query all by tag name
let paragraphs1 = document.querySelectorAll('p');
// console.log(paragraphs1);
// query by class name
let text = document.querySelector('.second');
// console.log(text);
let pTags = document.querySelector('p');
// console.log(pTags);
let queryById = document.querySelector('#myTitle');
// console.log(queryById);


// siblings
let firstParag = document.querySelector('#myTitle');
let nextSibling = firstParag.nextElementSibling;
// console.log(nextSibling);
let prevSibling = nextSibling.previousElementSibling;
// console.log(prevSibling);
// parent element

let parent = prevSibling.parentElement;
// console.log(parent);

// getiong the children of element
let children = parent.children;
// console.log(children);
let firstChild = parent.firstElementChild;
// console.log(firstChild);
let lastChild = parent.lastElementChild;
// console.log(lastChild);


// Get text content
let mainDiv = document.getElementById('main');
let divTextContent = mainDiv.textContent;
// console.log(divTextContent);
let divInnerText = mainDiv.innerText;
// console.log(divInnerText);

// changing text
let mainHeader = document.getElementById('myTitle');
mainHeader.innerText = "Hooray we added text with javascript";
mainHeader.innerText = "New text";

mainHeader.innerText = mainHeader.innerText + " Ultra new text";
mainHeader.innerText += " Short variant";

// adding html
// wrong way innerText is only used for changing text 
mainHeader.innerText = "<p> Test </p>";

let divMain = document.getElementById('main');
console.log(divMain.innerHTML);

// divMain.innerHTML += '<p id="firstParagraph">First html element added with javascript</p>';

// divMain.innerHTML = '';

// let body = document.querySelector('body');
// body.innerHTML = '';

// changing style
let divMainDiv = document.getElementById('main');

divMainDiv.style.color = 'red';
// divMainDiv.style.backgroundColor = 'blue';
// divMainDiv.style.display = 'none';

divMainDiv.classList.add('bg-color');
divMainDiv.classList.add('bg-color', 'test', 'test2');