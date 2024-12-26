$(document).ready(function () {

    //Example 1
    let myButton = $("#btn");

    myButton.click(function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function(result){
                console.log(result);
            },
            error: function(err){
                console.log(err);
            }
        })
    })

    //Example 2
    function showName(name) {
        $("#pokemonResult").text("The pokemon we found is " + name);
    }

    function callPokemonApi(id) {
        $.ajax({
            //method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}`, //correct url, will enter the success part
            //url: `https://poke2api.co/api/v2/pokemon/${id}`, ->wrong url, will enter the error part
            success: function (pokemonResult) {  //this code will be executed only if the call is a success
                console.log(pokemonResult);
                showName(pokemonResult.name);
            },
            error: function (err) { //this code will be executed only if an error occurs during the call
                console.log("Error: " + err);
            }

        })
    }

    let button = $("#getPokemonBtn");
    button.click(function () {
        callPokemonApi(3);
    });
})