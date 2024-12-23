# Events 🤙

```html
<div class="form">
    <button id="btn1"> Click me </button>
    <button id="btn2" onClick="showMessage()"> Also click me </button>
    <input id="inpt" type="text">
</div>
```

```js
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let input = document.getElementById("inpt");

function showMessage() {
    if(input.value === "") {
        console.log("input is empty");
    } else {
        console.log(`Someone wrote ${input.value} in the input!`);
    }
}
// Add an event handler on the button
button1.onClick = showMessage;

// Add an event handler with eventListener
button1.addEventListener("click", showMessage);

// Add an event handler with eventListener (without predefined function)
button1.addEventListener("mouseover", function(){
    console.log("Hovering over the button");
})

// Add an event handler with eventListener that captures the event
button1.addEventListener("dblclick", function(event){
    console.log(event.target); // Shows the element you clicked
    console.log(event.shiftKey) // Shows whether or not you were pressing shift key when the event happened
    console.log(event.type) // Returns the type of the event
    console.log(event.x + " " + event.y) // Returns the coordinates of x and y where you clicked
    ev.preventDefault(); // Prevents default browser functionality like submiting on a button in a form
})
```
