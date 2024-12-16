const parent = document.getElementById("parent");
const child = document.getElementById("child");
const button = document.getElementById("button");

// Capturing phase listener
parent.addEventListener("click", function () {
	console.log("Parent (Capture Phase)");
}, true);

// Bubbling phase listener
parent.addEventListener("click", function () {
	console.log("Parent (Bubble Phase)");
});

// Capturing phase listener
child.addEventListener("click", function () {
	console.log("Child (Capture Phase)");
}, true);

// Target phase listener
child.addEventListener("click", function () {
	console.log("Child (Bubble Phase)");
});

// Target phase listener
button.addEventListener("click", function () {
	console.log("Button (Target Phase)");
});