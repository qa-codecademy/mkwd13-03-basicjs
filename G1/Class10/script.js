$(document).ready(function() {

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

});