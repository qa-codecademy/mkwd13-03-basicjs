let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>   //if the call was successful
        {
            console.log(response);
            response.json() //returns a Promise
            .then(data =>{  //when the results are returned we can access them
                console.log(data); //if response.json was successful
            })
            .catch(err =>{
                console.log(err); //if response.json() threw an error
            })
        })
        .catch(error => { //if an error occurs during the call of the url
            console.log(error);
        })
})