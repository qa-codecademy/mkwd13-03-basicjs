// Write an html that has two input fields, one button and one paragraph. In the input fields enter the sides of a rectangle.

// On click on the button, calculate the area and print it in the paragraph.

// On mouse over on the paragraph, print the perimeter and change the color and font size of the paragraph.

let sideA = document.getElementById("sideA");
let sideB = document.getElementById("sideB");
let myButton = document.getElementById("myButton");
let message = document.getElementById("message");

myButton.addEventListener("click", function(){
    //validation
    if(!sideA.value || !sideB.value){ //check if we have entered both sides
        message.innerText = "You must enter both sides of the rectangle!";
        return;
    }

    //remove style if there is any (if we repeat the calculation of area, we want the original style)
    message.style.removeProperty("color");
    message.style.removeProperty("font-size");
    message.innerText = `The area is: ${sideA.value * sideB.value}`;
});

message.addEventListener("mouseover", function(){
    console.log(this); //target == message paragraph
    //validation
    if(!sideA.value || !sideB.value){ //check if we have entered both sides
        this.innerText = "You must enter both sides of the rectangle!";
        return;
    }
   //message.innerText= 
   this.innerText=`The perimeter is: ${sideA.value*2 + sideB.value*2}`;
   this.style.color="red";
   this.style.fontSize="2em";
});