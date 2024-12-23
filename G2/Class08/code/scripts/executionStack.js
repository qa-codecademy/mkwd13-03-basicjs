let dataResult = document.getElementById('data');
let dataBtn = document.getElementById('dataBtn');

dataBtn.addEventListener('click', function() {
    setTimeout(function() {
        dataResult.innerText = 'Data fetched from server!';
    }, 5000)
});


