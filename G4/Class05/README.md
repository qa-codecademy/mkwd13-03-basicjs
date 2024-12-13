# DOM Manipulation 🤞

## Document

```js
// The representation of the whole HTML file is in the document object
console.log(document);

// Using document to find the title of the page
console.log(document.title);

// Using document to find the current URL
console.log(document.URL);

// Using document to forcea reload on the page from JavaScript
document.location.reload();
```

## Selectors

```html
<h1 class="header"> Welcome to our paper company </h1>
<div id="services">
    <h2 class="header"> These are our services: </h2>
    <ul id="services-list">
        <li>Selling paper</li>
        <li>Calling to ask if you need paper</li>
        <li>Shipping paper</li>
    </ul>
</div>
```

```js
// Selecting an element by id
let servicesElement = document.getElementById("services");

// Selecting elements by class
let headers = document.getElementsByClassName("header");

// Selecting specific header from the items that have header class
let firstHeader = headers[0]; // The first
let secondHeader = headers[1]; // The second

// Selecting an element by tag
let listItems = document.getElementsByTagName("li");

// Selecting an element parent 
let parentOfHeader = secondHeader.parentElement;

// Selecting child elements
let servicesList = document.getElementById("services-list");
let childElements = serviceList.children;

// Selecting one item with querySelector
let servicesListQuery = document.querySelector("#services-list");

// Selecting multiple items with querySelectorAll
let allHeaders = document.querySelectorAll(".header");

// Selecting sibling elements
let headerNextSibling = firstHeader.nextElementSibling;
let headerPreviousSibling = firstHeader.previousElementSibling; // Will return null since it wont find any siblings that are before the header
```

## Working with elements

```html
<h1 class="header"> Welcome to our paper company </h1>
<div id="form">
    <p> Please enter info in the inputs below. Your data will be <b>100% safe</b></p>
    <input id="name-input" type="text" value="Bob">
</div>
```

```js
// Get text from an element
let header = document.getElementsByClassName("header")[0];
console.log(header.textContent);

// Get value of an input
let input = document.getElementById("name-input");
console.log(input.value);

// Get HTML from an element
let form = document.getElementById("form");
console.log(form.innerHTML);

// Change text of an element
let header = document.getElementsByClassName("header")[0];
header.textContent = "This is a new title"; // Overwrite the previous text with new one
header.textContent += " and this is added later!"; // Attach a new text to the previous one
header.textContent = ""; // Remove all text ( by setting it to an empty string )

// Change value of an input
let input = document.getElementById("name-input");
input.value = "Jill"; // Overwrite the previous value with new one
input.value += " Wayne"; // Attach a new text to the previous one
input.value = ""; // Remove the value ( by setting it to an empty string )

// Change HTML of an element
let form = document.getElementById("form");
form.innerHTML = "<h2> This is a new element created from JS </h2>"; // Overwrite the previous HTML with new one
form.innerHTML += "<h3> This element is added later </h3>"; // Attach a new HTML to the previous one
form.innerHTML = ""; // Remove all HTML from the element ( by setting it to an empty string )
```

## Attributes and CSS

```html
<h1 class="header"> Welcome to our paper company </h1>
<div id="boss-section">
    <h2>This is our boss Michael</h2>
    <img src="boss.jpg" alt="michael" width="400" height="400">
</div>
```

```js
// Check if an element has an attribute
let header = document.getElementsByTagName("h1")[0];
console.log(header.hasAttribute("class")); // Should be true since there is a class attribute
console.log(header.hasAttribute("id")); // Should be false since there is no id attribute

// Get value from an attribute
let image = document.getElementById("boss-section").children[1];
console.log(image.getAttribute("src"));

// Change value of an attribute
let image = document.getElementsByTagName("h2")[0].nextElementSibling;
image.setAttribute("width", "200");

// Remove attribute from an element
let image = document.getElementsByTagName("img")[0];
image.removeAttribute("alt");
```

```js
// Apply CSS to elements
let header = document.getElementsByTagName("h1")[0];
header.style.color = "red";
header.style.borderWidth = "2px";
header.style.borderStyle = "dotted";

// Read CSS from elements
let header = document.getElementsByTagName("h1")[0];
console.log(header.style.color); // Will show red
```
