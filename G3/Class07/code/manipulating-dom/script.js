// Getting and changing text to an element
const mainTitle = document.getElementById("main-title");
const description = document.querySelector(".description");
const mainTitleTextContent = mainTitle.textContent;
// Using text content
console.log("Main title (textContent):", mainTitleTextContent);

// Changing text by assigning a new value and adding additional text to the existing one
mainTitle.textContent = "Master DOM Manipulation";
description.textContent += " - Updated dynamically.";

// Adding and modifying HTML
const footer = document.querySelector("footer");
console.log("Original footer:", footer);

// Changing footer content
footer.innerHTML = `
<p">2024 Master Dom Manipulation</p>
<p>Learn DOM step by step with JavaScript</p>
`;

// Adding to existing html
const booksContainer = document.getElementById("books-container");

const books = [
  "JavaScript: The Definitive Guide",
  "Eloquent JavaScript",
  "You don't know JavaScript",
];

// Function to render books in the books container
function renderBooks(books) {
  let html = "<ul>";
  for (const book of books) {
    html += `<li>${book}</li>`;
  }
  html += "</ul>";
  booksContainer.innerHTML = html;
}

// Rendering predefined books
renderBooks(books);

// Working with attributes
const footerText = footer.querySelector("p");
footerText.setAttribute("title", "Dynamic footer title");
console.log("Footer title attibute:", footerText.getAttribute("title"));

// Changing style to an element
const styleText = document.getElementById("style-text");
styleText.style.color = "red";
