// Selecting elements
const firstHeader = document.getElementById("mainTitle");
console.log("Main title from vanilla JS", firstHeader);
// this is a wrapper array, we need to access the element via index to extract it
const firstHeaderJqueryWrapper = $("#mainTitle");
const firstHeaderJquery = firstHeaderJqueryWrapper[0];
console.log("Main title from jQuery wrapper", firstHeaderJqueryWrapper);
console.log("Main title from jQuery", firstHeaderJquery);

// get all div elements
const allDivs = $("div");
console.log("All div elements", allDivs);

// Get only the first div element but as a jQuery element
const firstDivElement = allDivs.first(); // this is again a wrapper array and if we need to extract the dom element we need to access it via the index
console.log("First div as a jQuery", firstDivElement);
const convertedDiv = firstDivElement[0];
console.log("ConvertedDiv", convertedDiv);

// Get the first div element as a DOM element
const firstDivElementAsADom = allDivs.get(0);
console.log("First div element as a DOM", firstDivElementAsADom);

// Get the last div element
const lastDivElement = allDivs.last();
console.log("Last div element as a jQuery", lastDivElement);
// teo extract the last div as a DOM element we need to access it via its index
const lastDivElementAsADom = lastDivElement[0];
console.log("Last div element as a DOM", lastDivElementAsADom);

// Get all div elements as a DOM
const allDivsAsADom = allDivs.get();
console.log("All divs as a DOM", allDivsAsADom);

// get next and previous elements
const secondDiv = $("#secondDiv");
const nextDiv = secondDiv.next();
const previousDiv = secondDiv.prev();
console.log("Next:", nextDiv, "Previous:", previousDiv);

// Finding elements
// Get the last paragraph inside the wrapper div
const wrapperDiv = $(".wrapper");
console.log("Wrapper div", wrapperDiv);
const lastParagraph = wrapperDiv.find("div").find("p").last();
console.log("Last paragraph:", lastParagraph.get(0));
