function htmlClickEventHandling() {
	console.log('Clicked! (HTML)');
}

function htmlClickEventHandlingAgain() {
	console.log('Clicked again! (HTML)');
}

function htmlMouseoverEventHandling() {
	console.log('Hovered! (HTML)');
}

// Traditional DOM Event Handling (only 1 function bound to an event)
function traditionalClickEventHandling1() {
	console.log('Clicked (Traditional)')
}

function traditionalClickEventHandling2() {
	console.log('Clicked (Traditional)')
}

let traditional = document.getElementById('traditional-dom-event-handling');

traditional.onclick = traditionalClickEventHandling1;	// we assign a reference to a function called traditionalClickEventHandling1
traditional.onclick = traditionalClickEventHandling2;	// we assign a reference to a function called traditionalClickEventHandling2 (overwrites traditionalClickEventHandling1)

// Anonymous function - a function without a name
traditional.onclick = function () {						// overwrites traditionalClickEventHandling2
	console.log('Anonymous function! (Traditional)');
}

// Event Listeners (multiple handlers even for same event)
function eventListenerClickHandling1() {
	console.log('Clicked 1 (Event Listener)')
}

function eventListenerClickHandling2() {
	console.log('Clicked 2 (Event Listener)')
}

function eventListenerMouseenterHandling() {
	console.log('Mouseover (Event Listener)')
}

// Event listener on a button
let eventListenerButton = document.getElementById('event-listener-button');
eventListenerButton.addEventListener('click', eventListenerClickHandling1);				// bind eventListenerClickHandling1 to 'click' event
eventListenerButton.addEventListener('click', eventListenerClickHandling2);				// bind eventListenerClickHandling2 to 'click' event (does NOT override)
eventListenerButton.addEventListener('click', function () {								// bind anonymous function to 'click' event (does NOT override)
	console.log('Clicked (Event Listener - anonymous function)');
});
eventListenerButton.addEventListener('mouseenter', eventListenerMouseenterHandling);	// bind eventListenerMouseenterHandling to 'mouseenter' event

// Event listener on an input
let eventListenerInput = document.getElementById('event-listener-input');
eventListenerInput.addEventListener('focus', function () {
	console.log('Input focused! (Event Listener)')
});
eventListenerInput.addEventListener('blur', function () {
	console.log('Input blurred! (Event Listener)')
});
eventListenerInput.addEventListener('click', function () {
	console.log('Input clicked! (Event Listener)')
});

// Exercise
let greetingButton = document.getElementById('greeting-button');

greetingButton.addEventListener('click', function () {
	let name = prompt('Enter a name');
	console.log('Hello', name);
})

// Bind/Unbind (Add/Remove) Event listeners
function bindUnbindEventHandler() {
	console.log('Click again function');
}

let actionButton = document.getElementById('action-button');
let bindButton = document.getElementById('bind-button');
let unbindButton = document.getElementById('unbind-button');

bindButton.addEventListener('click', function () {
	console.log('Event bound!');
	actionButton.addEventListener('click', bindUnbindEventHandler);
})

unbindButton.addEventListener('click', function () {
	console.log('Event unbound!');
	// IMPORTANT: When removing an event listener we MUST provide SAME event name and SAME FUNCTION REFERENCE
	actionButton.removeEventListener('click', bindUnbindEventHandler);
})


// Execution Stack
function function1() {
	console.log('Function 1');			// 4) log 'Function 1' in console
}

function function2() {
	function1();						// 3) add function1() execution context to stack
	console.log('Function 2');			// 5) log 'Function 2' in console
}

function function3() {
	function2();						// 2) add function2() execution context to stack
	console.log('Function 3');			// 6) log 'Function 3' in console
}

function3();							// 1) add function3() execution context to stack


// Function call with parameters on event binding
function calculateSum(a, b) {
	console.log(a + b);
}

// in this case we bind an anonymous function to the event
let fnWithParameters = document.getElementById('function-with-parameters');
fnWithParameters.addEventListener('click', function () {
	// we call the function with arguments inside the anonymous function
	calculateSum(2, 3);
});

// Read value from HTML input programatically
let signUpButton = document.getElementById('sign-up');
signUpButton.addEventListener('click', function () {
	let inputElement = document.querySelector('#username');
	let value = inputElement.value;

	console.log(`User input: ${value}`);
})

// Exercise
function textChanger1() {
	let paragraph = document.getElementById('paragraph');
	paragraph.style.fontSize = '30px';
	paragraph.style.color = 'red';
	paragraph.style.backgroundColor = 'blue';
}
let changer = document.getElementById('textChanger');
changer.addEventListener('click', textChanger1)

let unChanger = document.getElementById('textUnChanger')
unChanger.addEventListener('click', function () {
	// changer.removeEventListener('click', textChanger1);
	let paragraph = document.getElementById('paragraph');
	paragraph.style.fontSize = '16px';
	paragraph.style.color = 'black';
	paragraph.style.backgroundColor = 'white';
})

// Exercise
function stringValues(firstName, lastName, email, pass) {
	let paragraph = document.getElementById(`sign-up-paragraph`);
	paragraph.innerText = `${firstName} -- ${lastName} -- ${email} -- ${pass}`
}

function handleFormValuesOnButtonClick() {
	let firstNameValue = document.getElementById(`firstName`).value;
	let lastNameValue = document.getElementById(`lastName`).value;
	let emailValue = document.getElementById(`email`).value;
	let passwordValue = document.getElementById(`password`).value;

	stringValues(firstNameValue, lastNameValue, emailValue, passwordValue);
}

let btn = document.getElementById(`btn`);
btn.addEventListener(`click`, handleFormValuesOnButtonClick);
