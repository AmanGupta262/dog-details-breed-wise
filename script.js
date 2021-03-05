/// <reference path="../jquery-3.5.1.js" />
$('document').ready(function () {
    var breedName = '';
    $.get('https://dog.ceo/api/breeds/list/all', function (data) {
        breeds = data.message;
        var keys = Object.keys(breeds);
        keys.forEach(e => {

            if (breeds[e].length === 0) {
                $('#breeds').append(`<option value="${e}">${e}</option>`)
            }
            else {
                breeds[e].forEach(ele => {
                    $('#breeds').append(`<option value="${e + "/" + ele}">${ele + " " + e}</option>`)
                });
            }
        });
    });
});
$('#get').on('click', function () {
    breedName = $('#breeds').val()
    $.get(`https://dog.ceo/api/breed/${breedName}/images/random`, function(data){
        $('#image').attr('src', data.message);
    });
});
$('#next-btn').on('click', function () {
    $.get(`https://dog.ceo/api/breed/${breedName}/images/random`, function (data) {
        $('#image').attr('src', data.message);
    });
});