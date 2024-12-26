$(document).ready(function(){

    let button = $("button").first();

    //First way

    button.on("click", function(){
        console.log("Hello from the first click event listener");
    });

    //Second way
    button.click(function(){
        let paragarphs = $("p");
        paragarphs.hide();
        
        //$(this) -> represents the target element of the event as jQuery element
        //this -> button
        $(this).text("Click me");

    })

})