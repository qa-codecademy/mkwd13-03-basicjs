let testBtn = document.getElementById('testBtn');
let firstDiv = document.getElementById('first');
let secondDiv = document.getElementById('second');

testBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log(event.target.style.backgroundColor);
    event.target.style.backgroundColor = 'yellow'
    // event.stopPropagation();
    // alert('Button was clicked!');
})

firstDiv.addEventListener('click', function () {
    alert('First div was clicked!');
})

secondDiv.addEventListener('click', function (event) {
    event.stopPropagation();
    alert('Second div was clicked!');
})



let trafficDiv = document.getElementById('traffic');

trafficDiv.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'yellow';
});

trafficDiv.addEventListener('mouseout', function (event) {
    event.target.style.backgroundColor = 'green';
    event.target.textContent = 'Go!';
});