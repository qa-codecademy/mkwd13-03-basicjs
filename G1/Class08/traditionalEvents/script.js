let btn = document.querySelectorAll('#btn');

console.log(btn);

btn[0].onclick = function() {
    console.log("YOu clicked me!");
}

btn[0].onchange = function() {
    console.log("Test");
}

function greet() {
    console.log("Hello");
}

let mainBtn = document.getElementById('mainBtn');

// mainBtn.onclick = greet();
mainBtn.onclick = greet;

// let counter = 0;
// let body = document.getElementsByTagName('body');
// body[0].onmousemove = function () {
//     console.log('moving ' + counter);
//     counter++;
// }

console.log(mainBtn);


let mainDiv = document.getElementById('main');

function changeBgColorWhenIn() {
    mainDiv.style.backgroundColor = 'aqua';
}

function changeBgColorWhenOut() {
    mainDiv.style.backgroundColor = 'black';
}

// using reference to a function
mainDiv.onmouseleave = changeBgColorWhenOut;
mainDiv.onmouseover = changeBgColorWhenIn;

// decalring a function directly in the event handler property
mainDiv.ondblclick = function() {
    mainDiv.style.backgroundColor = 'yellow';
}