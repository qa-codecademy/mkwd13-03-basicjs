console.log('Connected');

// **** HTML EVENT HANDLERS ****

// 3. Invoke the function greetings
function greetings(){
    alert('Hello G5!')
};

function onMouseEnter(){
    console.log('I am above the Greeting button')
}


// **** TRADITIONAL DOM EVENT HANDLERS ****
const greetingBtn = document.getElementById("greetingBtn");

greetingBtn.onclick = greetings; // PASS REFERENCE TO THE FUNCTION
greetingBtn.onmouseenter = onMouseEnter; // PASS REFERENCE TO THE FUNCTION

// greetingBtn.onclick = greetings(); // THIS IS WRONG, THIS WILL INVOKE THE FUNCTION INSTANTLY

function sayHello(){
    alert('Hello amigos!')
};

// DRAWBACK 
greetingBtn.onclick = sayHello; // THIS WILL OVERWRITE greetingBtn.onclick = greetings

// **** EVENT LISTENERS ****
const btnListener = document.getElementById("btnListener");

// element.addEventListener("event_that_we_listen_to", function_to_execute)
btnListener.addEventListener("click", greetings);
btnListener.addEventListener("mouseenter", onMouseEnter)

// btnListener.addEventListener("click", greetings()); // THIS WON'T WORK

// EXERCISE

const personalGreeting = document.getElementById('personalGreeting');

function greetPersonal(name){
    alert(`Hello ${name}!`)
};

personalGreeting.addEventListener("click", function(){
    // as much as code I want
    let userInput = prompt('What is your name?');

    greetPersonal(userInput);
})