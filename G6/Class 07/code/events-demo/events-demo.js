console.log("=================== EVENTS ===================");
// Events are actions or occurrences that happen in the browser, which JavaScript can respond to. These events can be triggered by the user (e.g., clicking a button, typing in a field) or by the browser itself (e.g., when a page finishes loading)

// Three steps for handling events :
// 1) Select the **element** you want the script to respond to
// 2) Indicate which **event** on the selected element will trigger the response
// 3) Write **code** that will be executed when that event occurs on the selected element

// Ways to bind an event to an element
// 1. HTML event handlers (BAD!)
// 2. DOM event handlers (OLD!)
// 3. Event Listeners (USE IT :))

function alertUser(message) {
    alert(message.toUpperCase());
}

function greet() {
    alert("HAPPY HOLIDAYS !")
}


console.log("");
console.log("======== DOM event handlers ========");

const doubleClickBtn = document.getElementById("dbl-click-btn");
console.log(doubleClickBtn);

// doubleClickBtn.ondblclick = "" // the value must be a function (declared, or anonymous)

// ===> we can write an anonymous function
doubleClickBtn.ondblclick = function () {
    alert("Hello from Double Click event :)")
    alert("Hello again :)")
}

// ===> this will execute the greet function immediately
// doubleClickBtn.ondblclick = greet();

// ===> we send only the reference (name) of the function that we want to execute on the event
doubleClickBtn.ondblclick = greet;



console.log("");
console.log("======== Event Listeners ========");

const clickMeBtn = document.getElementById("click-btn");

// clickMeBtn.addEventListener("click", greet())
clickMeBtn.addEventListener("click", greet)

const clickMeBtn2 = document.getElementById("click-btn2");

// clickMeBtn2.addEventListener("click", alertUser("The Click Me (2) button is clicked"))
clickMeBtn2.addEventListener("click", function () {
    console.log("Some JS code...");
    alertUser("The Click Me (2) button is clicked");
    console.log("More JS code...");
})

// Hover Example
const hoverParagraph = document.getElementById("hover-paragraph");

hoverParagraph.addEventListener("mouseenter", function () {
    hoverParagraph.style.color = "red";
})

hoverParagraph.addEventListener("mouseleave", function () {
    hoverParagraph.style.color = "black";
})


console.log("");
console.log("======== Remove Event Listener ========");

// clickMeBtn2.removeEventListener("click", function () {
//     console.log("Some JS code...");
//     alertUser("The Click Me (2) button is clicked");
//     console.log("More JS code...");
// })

clickMeBtn.removeEventListener("click", greet)



console.log("");
console.log("======== Explore the EVENT object ========");

const eventBtn = document.getElementById("event-btn");

eventBtn.addEventListener("click", function (event) {
    console.log("Hello from Explore Event Obj button");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.id);
    console.log(`Coordinates: X: ${event.clientX}. Y: ${event.clientY}`);
})


// Example: Keydown event (pressing key on the keyboard)

document.addEventListener("keydown", function (e) {
    console.clear();
    console.log(e);
    console.log("Key pressed: ", e.key);
    console.log("Code: ", e.code);
    console.log("Is shift key pressed ", e.shiftKey);
})








