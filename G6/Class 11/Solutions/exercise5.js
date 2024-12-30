// Write an html that has one input field, one button and one select element. The input and button have id-s, and the select only has class attribute. A user should enter input, click on the button, and on click an option should be added to the select with the entered value.

// On blur of the input, validate if there is value entered. If not, print a message. Remember to check this scenario on the click also!

let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let mySelect = document.getElementsByClassName("mySelect");
let message = document.getElementById("message");

myButton.addEventListener("click", function(){
    //validation 
    message.innerText = ""; //reset (empty) the message part (if you enter a value, the message should not be there)
    if(!myInput.value){ //checks if we haven't entered a value (null, undefined, ""....)
        message.innerText = "You have to enter a value";
        return;
    }

    let option = document.createElement("option"); //create the option
    option.setAttribute("name", myInput.value); //set the name attr to the value that the user entered in the input
    option.setAttribute("value", myInput.value); //set the value attr to the value that the user entered in the input
    option.innerText = myInput.value;
    mySelect[0].appendChild(option); //in mySelect we have an array of elements that have that class. We choose the first select to append the option as a child
    myInput.value =""; //empty the input field value
});

myInput.addEventListener("blur", function(){
       //validation 
       message.innerText = ""; //reset (empty) the message part (if you enter a value, the message should not be there)
       if(!myInput.value){ //checks if we haven't entered a value (null, undefined, ""....)
           message.innerText = "You have to enter a value";
           return;
       }
})