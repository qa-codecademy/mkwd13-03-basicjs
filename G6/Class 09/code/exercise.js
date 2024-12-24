$(document).ready(function(){
    let div = $("#firstWrapper");
    console.log(div);
    let paragraph = $("p").first();
    console.log(paragraph);
    let firtParagraph = $("p:first");
    console.log(firtParagraph);
    let h1 = $("h1").first();
    console.log(h1);

    let lastH1 = $("h1").last();
    console.log(lastH1);

    let h3 = $("h3").first();
    console.log(h3);

    let button = $("button");
    console.log(button);

    //Exercise 2
    $("h1").first().text("JQuery is awesome");
    $("h1").first().after("<p>After H1</p>");
    $("button").css("background-color", "red");

    //Exercise 3
    $("button").first().click(function(){
       $("#secondWrapper").hide();
       $("p").css("color", "green");
       $(this).text("Don't click me!");
    })
})