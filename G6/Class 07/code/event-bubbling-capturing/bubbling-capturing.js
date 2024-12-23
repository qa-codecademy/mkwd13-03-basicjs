console.log("=================== EVENTS BUBBLING & CAPTURING ===================");

// ===> EVENT BUBBLING
// event starts from the innermost element (the target/clicked element) and propagates outward to its ancestors, triggering all the rest events (if any)

document.getElementById("btn").addEventListener("click", function (event) {
    alert("Child clicked");
    // we can prevent this behaviour by using the stopPropagation() function of the child element
    // event.stopPropagation();
})

document.getElementById("paragraph").addEventListener("click", function () {
    alert("Parent clicked");
})


// ===> EVENT CAPTURING
// Event starts from the outermost ancestor and propagates inward toward the target element.

// document.getElementById("paragraph2").addEventListener("click", function () {
//     alert("Parent First");
// });

document.getElementById("paragraph2").addEventListener("click", function () {
    alert("Parent First");
}, true); // Capturing mode enabled

document.getElementById("btn2").addEventListener("click", function () {
    alert("Child Second");
});

