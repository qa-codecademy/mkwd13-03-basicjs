const parent = document.getElementById("parent");
const child = document.getElementById("child");


// **** EVENT BUBBLING ****

// child.addEventListener("click", function(event){
//     console.log(event)
//     event.stopPropagation() // WILL PREVENT THE EVENT TO BE BUBBLED UP
//     alert('CHILD DIV WAS CLICKED')
// })


// parent.addEventListener("click", function(event){
//     alert('PARENT DIV WAS CLICKED')
// })

// **** EVENT CAPTURING ****

child.addEventListener("click", function(event){
    alert('CHILD DIV WAS CLICKED')
})


parent.addEventListener("click", function(event){
    event.stopPropagation()
    alert('PARENT DIV WAS CLICKED')
}, true) //TRUE =>  ALLOW EVENT CAPTURING


// FORM

const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener("click", function(event){
    event.preventDefault() // WE PREVENT THE DEFAULT EVENT OF THAT ELEMENT; EXAMPLE: FOR BUTTON IS SUBMIT SO WE PREVENT IT
    console.log('SUBMIT FORM')

    // HERE WE CAN VALIDATE THE INPUT AND CONSUME IT

    // SUBMIT IT SOMEWHERE ETC

})