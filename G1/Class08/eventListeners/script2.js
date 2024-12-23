function createButton() {
    let html = `<button id="btn" >Click me</button>`;
    document.getElementById('main')
        .innerHTML = html;
}

// we cannot add event listener on element that is not in the html
// document.getElementById('btn')
// .addEventListener('click', function() {
//     console.log('Btn is clicked');
// });

document.getElementById('btn1')
.addEventListener('click', function() {
    createButton();
});

document.getElementById('main')
.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log(e);
    console.log('Btn is clicked');
});


