$(document).ready(function () {

    let ourtBtn = $('input[type="button"]');

    // First way of adding click listener
    // ourtBtn.on('click', function() {
    //     alert('Button was clicked!');
    // });


    function saySomething() {
        console.log('Aaaahh, you want to click me?!!');
    }
    ourtBtn.on('mouseover', saySomething);



    // Second way

    ourtBtn.click(function () {
        let paragraphs = $('p');
        paragraphs.toggle();
        // paragraphs.css('visibility', 'hidden');
    });


    // Toggle paragraphs in the html using Vanilla JS

    let paragraphsJS = document.getElementsByTagName('p');
    let hideBtn = document.getElementById('hideElements');
    hideBtn.addEventListener('click', function() {
        for(let i = 0; i < paragraphsJS.length; i++){
            if(paragraphsJS[i].style.display === 'block'){
                paragraphsJS[i].style.display = 'none';
            }
            else{
                paragraphsJS[i].style.display = 'block';
            }
        }
    })


})