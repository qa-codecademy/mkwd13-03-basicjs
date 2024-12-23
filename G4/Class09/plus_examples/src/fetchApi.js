let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){

    fetch("https://jsonplaceholder.typicode.com/posts/1") //get call, returns Promise
    .then(response => {
        //success
        //response contains metadata (information) about the whole HTTP response
        debugger
        response.json() //returns Promise
        .then(data => {
            //data contains the parsed json
            console.log(data)
            document.getElementById("myDiv").innerText = data.title;
        })
    })
    // .catch(function(err){

    // })
    .catch(err=>{
        console.log(err);
    })
});