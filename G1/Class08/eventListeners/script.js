let element = document.getElementById('btn');

// element.addEventListener("click", function() {
//     console.log("Hello from JS");
// });

function greet() {
    console.log("Hello again");
}

element.addEventListener('dblclick', greet);


let input = document.getElementById('mainInput');

input.addEventListener('keypress', function(event) {
    // get target 
    // event.target
    console.log(event.target.value);
    console.log('Change event');
});

function handleClick(e) {
    console.log(e);
}

input.addEventListener('blur', handleClick);

let btn2 = document.getElementById('btn2');

// when using anonymous function you cannot remove an event
// btn2.addEventListener('click', function() {
//     element.removeEventListener('click', function() {
//         console.log('Removed click event');
//     });
// });

btn2.addEventListener('click', function(e) {
    element.removeEventListener('dblclick', greet);
});

// function removingEventListener() {
//     console.log('MouseOut');
//     // SOME CODE
//     //
//     //
//     // MORE CODE
//     btn2.removeEventListener('mouseout', removingEventListener);
// }

// btn2.addEventListener('mouseout', removingEventListener);


// geting a value from input and checking the lenght
let content = document.getElementById('content');

function checkWordLength(word) {
    if (word.length >= 10) {
        let text = 'The lenght of the word is to long';
        content.innerHTML = `<p>${text}</p>`;
    } else {
        content.innerHTML = '';
    }
}
// adding event without getting the element in separate value
// adding event inline
document.getElementById('textInput')
        .addEventListener('keydown', function(e) {
            // getting value from input
            let value = e.target.value;
            checkWordLength(value);
        });


