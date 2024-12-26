$(document).ready(function(){
    //all code

    let allElements = $("*");
    console.log(allElements);
    console.log(allElements[0]);
    console.log(allElements[6]);
    //SELECT BY ID
    let mainTitle = $("#mainTitle");
    console.log(mainTitle);
    console.log(mainTitle[0]);

    //SELECT BY CLASS
    let innerWrapper = $(".innerWrapper");
    console.log(innerWrapper);

    //SELECT BY TAG NAME
    let paragraph = $("p");
    console.log(paragraph);

    //MULTIPLE SELECTORS
    let multipleSelectors = $(".innerWrapper, #mainTitle, h3");
    console.log(multipleSelectors);

    let firstParagraph = $("p:first");
    console.log(firstParagraph);
    let lastParagraph = $("p:last");
    console.log(lastParagraph);

    // let secondParagraph = $("p:nth-child(2)");
    // console.log(secondParagraph);
console.log("===================================")
    // DOM vs JQUERY
    let firstParagraphDOM = paragraph[0];
    console.log(firstParagraphDOM);
    console.log(firstParagraphDOM.innerText);

    let firstParagraphJquery = paragraph.first();
    console.log(firstParagraphJquery);
    console.log(firstParagraphJquery.text());
    firstParagraphJquery.text("Hello! This is new text from jquery.");
    console.log(firstParagraphJquery.text())

    paragraph.last().text("Changed text of last p");
    console.log(paragraph.last().text());

    paragraph.last().text(paragraph.last().text() + ". Add new text.");

    console.log(paragraph.last().text());


    let secondParagraph = paragraph.eq(1); //get(1)
    console.log(secondParagraph.text());

    let prevSibling = secondParagraph.prev();
    console.log(prevSibling.text());

    let nextSibling = prevSibling.next().text();
    console.log(nextSibling);

    let input = $("input");
    console.log(input.val());

    //INSERT ELEMENTS

    innerWrapper.first().html("<p>Our new paragraph</p>");

    $(".firstParagraph").first().after("<h2>Add header 2</h2>")
    
    $(".firstParagraph").first().before("<h4>Add header 4</h4>")

    $(".wrapper").first().after("<div><h4>New header 4 with new div</h4></div>")

    //CSS
    paragraph.first().hide();
    paragraph.first().show();

    paragraph.first().css("color","red");
    paragraph.first().css("background-color","green");



    // EVENTS
    let btn = $("button").first();

    //FIRST WAY
    btn.on("click", function(){
        console.log("HELLO FROM THE CLICK")
        $("div").last().html("<p>New paragraph</p>")
    });

    //SECOND WAY
    btn.click(function(e){
        $(this).text("CLICK ME");
        $("h4").hide();
    })

    console.log(allElements.find("#mainTitle").first().text());
})