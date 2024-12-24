$(document).ready(function(){

    let myButton = $('#myButton');
    let myDiv = $("#myDiv");

    function getPost(id){
       // debugger
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            success: function(resultPost){
                //debugger
                myDiv.append(`<h1>Post with id: ${resultPost.id}</h1>`);
                myDiv.append(`<h3>${resultPost.title}</h3>`);
                myDiv.append(`<p>${resultPost.body}</p>`);
            },
            error: function(err){
                console.log(err);
            }
        })
    }

    myButton.click(function(){
        getPost(3);
    });
})