$(document).ready(function(){

    function showName(name){
        $("#pokemonName").text(`The name of the first pokemon is: ${name}`);
    }

    function callPokemonApi(id){
        debugger
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: function(pokemonResult){
                debugger;
                showName(pokemonResult.name);
            },
            error: function(err){
                console.log(err);
            }
        })
    }

    $("#getPokemonBtn").click(function(){
            debugger
            callPokemonApi(1);
    });
})