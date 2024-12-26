// MANIPULATION DOM ELEMENTS

// Change the text content of the first paragraph (DOM)
const firstParagraph = document.getElementById("firstParagraph");
firstParagraph.textContent = "This is updated text using vanilla JS.";

// Change the text content of the first paragraph (jQuery)
let secondParagraphText = $("#secondParagraph").text();
console.log("Second paragraph text content", secondParagraphText);
$("#secondParagraph").text("This is updated text using jQuery");

// ADDIN AND REMOVING CLASSES DYNAMICALLY
// Add class to the first div element
// Via DOM
const firstDiv = document.getElementById("firstDiv");
firstDiv.classList.add("highlight");

// Add class to the first div element
// Via jQuery
$("#secondDiv").addClass("focus");

// EVENT LISTENERS
// Vanilla JS: Change button text on click
const firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", function () {
  firstButton.textContent = "Clicked using vanilla JS";
});

// jQuery: Change button text on click
// const secondButton = $("#secondButton");
$("#secondButton").on("click", function () {
  $(this).text("Clicked using jQuery");
});

let button = $("#lastButton");
button.click(function () {
  console.log("Last button was clicked");
});

// HIDING AND SHOWING ELEMENTS
// Hide the first paragraph using vanilla JS
firstParagraph.style.display = "none";

// Hide the second paragraph using jQuery
$("#secondParagraph").hide();

// WORKING WITH INNER HTML
// Get innerHTML of the first header using vanila JS
const headerInnerHTMLVanillaJs =
  document.getElementsByClassName("header")[0].innerHTML;
console.log("Inner HTML Vanilla JS", headerInnerHTMLVanillaJs);

// Get innerHTML of the first header using jQuery
const headerInnerHTMLjQuery = $(".header").html();
console.log("Inner HTML jQuery", headerInnerHTMLjQuery);

// Set inner HTML with jQuery
$(".header").html("<h1>This is a new header set through jQuery</h1>");

// Working with CSS
// Get and set CSS properties using VAnilla JS
// document.getElementsByClassName("secondHeader")[0].style.color = "blue";

// // Get and set CSS properties using jQuery
$(".secondHeader").css("color", "blue");

// Adding elements
// Add paragraph before the first header usin jQuery
$("h1")
  .first()
  .before("<p>This is a new paragraph added before the h1 eement</p>");
