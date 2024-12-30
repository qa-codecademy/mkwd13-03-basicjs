$(document).ready(function () {

    let el = document.getElementById('mainTitle') // vanila js
    let elJquery = $('#mainTitle');
    // console.log(el);
    // console.log(elJquery);
    let allElemenets = $('*');
    // console.log(allElemenets);

    let elByClassName = $('.innerWrapper');
    // console.log(elByClassName);
    let eleByTagName = $('p');
    // console.log(eleByTagName);

    let eleByMultipleSelectors = $('.innerWrapper, .wrapper, #mainTitle');
    // console.log(eleByMultipleSelectors);

    // document.getElementsByTagName('p')[0];
    let firstParagraph = $('p:first');
    let lastParagraph = $('p:last');
    // console.log(firstParagraph);
    // console.log(lastParagraph);

    let firstChildren = $('h3:first-child'); // get all h3 elems, which are first child of their parent
    let lastChildren = $('h3:last-child'); // get all p elems, which are last child of their parent
    // console.log(firstChildren);
    let nthChild = $('p:nth-child(2)');  // get all p elems, which are second child of their parent

    // selecting element using attributes
    let btn = $('button[name="test"]');
    // console.log(btn);

    let allPara = $('p');
    let first = allPara.first();
    // console.log(first);

    let pClass = $('*').find('.innerWrapper').find('.pClass');
    let pClass1 = $('*').find('.pClass');
    // console.log(pClass);
    // console.log(pClass1)

    let allEle = $('*');
    let fifthElement = allEle.get(6);
    // console.log(allEle);
    // console.log(fifthElement);
    let nextELement = $('#SecondTitle').next();
    // console.log(nextELement);

    // DOM Manipulation

    // let value = $('input[value="Cool"]').val(); // not a good way
    let value = $('input').first().val();
    // console.log(value);

    // $('#mainTitle').hide();
    // $('#mainTitle').show();
    document.getElementById('mainTitle').style.display = 'none' // Hide
    document.getElementById('mainTitle').style.display = 'block' // show

    // let divHtml = $('.innerWrapper').first().html();
    // console.log(divHtml);
    // $('.innerWrapper').first().html('<p>We changed the html</p>');

    let h1Text = $('#mainTitle').first().text();
    // console.log(h1Text);
    $('#mainTitle').first().text('We changed the text of this h1');
    // document.getElementById('mainTitle').innerText = 'We changed the text of this h1';

    let color = $('#mainTitle').css('color');
    // console.log(color);
    $('#mainTitle').css('color', 'rgb(15, 127, 78)');

    $('.innerWrapper').find('p:first').after('<h2>Added header</h2>');
    $('.innerWrapper').find('p.pClass').before('<h2>Added header</h2>');

    let ourBtn = $('button').first();
    
    ourBtn.on('click', function() {
        console.log('Hello from the first click handler!');
    });

    let input = $('input').first();

    // input.on('keypress', function() {
    //     console.log('on key press');
    // });

    let secondButton = $('button').last();

    secondButton.click(function() {
        console.log('Second button click');
    });

    input.change(function(e) {
        console.log(e.currentTarget);

        console.log(e.target.value);
    })

});