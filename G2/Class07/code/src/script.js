let firstHeader = document.getElementById('myTitle');

console.log(firstHeader.textContent);
console.log(firstHeader.innerText);

// firstHeader.innerText = '';

let secondDiv = document.querySelector('.myDiv');
secondDiv.innerHTML += `
<ol>
    <li>Intro to web dev</li>
    <li>Basic Web Development (HTML/CSS)</li>
    <li>Basic JavaScript</li>
</ol>
`


let secondHeader = document.getElementById('secondHeader');
setTimeout(function () {
    //secondHeader.innerText = 'Noo, not so awesome page!';
    secondHeader.style.backgroundColor = 'red'

    setTimeout(function () {
        // secondHeader.innerText = 'I am joking, still cool page!';
        secondHeader.style.backgroundColor = 'yellow'

    }, 2000);
}, 3000);

secondHeader.innerText = '<p>Hello there!</p>';

console.log(secondHeader.style);