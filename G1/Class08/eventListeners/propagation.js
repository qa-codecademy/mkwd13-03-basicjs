let mainDiv = document.getElementById('mainDiv');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn3');

document.getElementById('mainmaindiv')
    .addEventListener('click', function () {
        console.log('main main div');
    });

mainDiv.addEventListener('click', function (e) {
    // stop bubling
    e.stopPropagation();
    console.log('Main div click');
}, false);

btn1.addEventListener('click', function (e) {
    // stop bubling
    e.stopPropagation();
    console.log('Btn one click');
});

btn2.addEventListener('click', function (e) {
    console.log('Btn two click');
});

// CAPTURING
// document.getElementById('black')
//     .addEventListener('click', function (e) {
//         console.log('Black div is called');
//     }, true);

// document.getElementById('red')
//     .addEventListener('click', function (e) {
//         console.log('Red div is called');
//     }, true);

// document.getElementById('yellow')
//     .addEventListener('click', function (e) {
//         console.log('Yellow div is called');
//     }, true);

// document.getElementById('blue')
//     .addEventListener('click', function (e) {
//         console.log('Blue div is called');
//     }, true);


// BUBLING
document.getElementById('black')
    .addEventListener('click', function (e) {
        console.log('Black div is called');
    });

document.getElementById('red')
    .addEventListener('click', function (e) {
        // stop propagation on red div
        e.stopPropagation();
        console.log('Red div is called');
    });

document.getElementById('yellow')
    .addEventListener('click', function (e) {
        console.log('Yellow div is called');
    });

document.getElementById('blue')
    .addEventListener('click', function (e) {
        e.stopPropagation();
        console.log('Blue div is called');
    });