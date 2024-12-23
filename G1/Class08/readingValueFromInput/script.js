// reading the value thru the element
let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let inputValue = input.value;
    console.log(inputValue);
});

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { // this is Enter
        let inputValue = e.target.value;
        console.log(inputValue);
    }
});
