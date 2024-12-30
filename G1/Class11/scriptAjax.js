$(document).ready(function() {
    console.log('We are ready');
    // this is only the event handler
    $('#data').on('click', function() {

        // -------- AJAX ----------
        $.ajax({
            url: 'https://jsonplaceholder.typie.com/users',
            method: 'GET', // default is GET
            success: function(result) {

            },
            error: function(error) {

            }
        });

        // -------- AJAX ----------
    });

});