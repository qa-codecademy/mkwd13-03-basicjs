$(document).ready(function(){
    let input = $(".input-form");
    let result = $("#result");

    function calculateAverage(num1, num2, num3){
        let sum = num1+num2+num3;
        return sum/3;
    }

    $("button").click(function(){
      
        let numOne = parseInt(input[0].value);
        let numTwo = parseInt(input[1].value);
        let numThree = parseInt(input[2].value);

        let avg = calculateAverage(numOne, numTwo, numThree);

        if(avg >= 10){
           result.text(`The avg is: ${avg}`).css("color", "green");
        }else{
            result.text(avg).css("color", "red");
        }
    })
});