$(document).ready(function() {
    console.log('We are ready');
    // this is only the event handler
    $('#data').on('click', function() {

        // -------- AJAX ----------
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET', // default is GET
            success: function(result) {
                console.log('We are in success');
                console.log(result);
            },
            error: function(error) {
                console.log('We are in error');
                console.log(error);
            }
        });

        // -------- AJAX ----------
    });

});