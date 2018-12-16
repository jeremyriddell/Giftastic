$(document).ready(function () {

    $('button').on('click', function () {
        var park = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + park + "&api_key=c7aM6oY0DLHl6453tqtWlQW7w3lzfoJ7&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function (response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var parkDiv = $('<div/>');

                    var p = $('<p/>');

                    p.text(results[i].rating);

                    var parkImage = $('<img/>');

                    parkImage.addClass('anImg');

                    parkImage.attr('src', results[i].images.fixed_height.url);

                    parkImage.attr('data-still', results[i].images.fixed_height_still.url);

                    parkImage.attr('data-animate', results[i].images.fixed_height.url);

                    parkDiv.attr('data-state', 'still');

                    parkDiv.append(p);

                    parkDiv.append(parkImage);

                    parkDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function () {

                    var state = $(this).attr('data-state');

                    if (state == 'still') {

                        $(this).attr('src', $(this).data('animate'));

                        $(this).attr('data-state', 'animate');

                    } else {

                        $(this).attr('src', $(this).data('still'));

                        $(this).attr('data-state', 'still');
                    }
                });
            });
    });

    var parks = [''];

    $('#theButton').on('click', function () {
        var parkButton = $("#gif-input").val();

        var newButton = $("<button/>").addClass("btn btn-info parks").attr('data-name', parkButton).html(parkButton).css({ 'margin': '5px' });

        $("#parksbuttons").append(newButton);

        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + parkButton + "&api_key=c7aM6oY0DLHl6453tqtWlQW7w3lzfoJ7&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })

            .done(function (response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var parkDiv = $('<div/>');

                    var p = $('<p/>');

                    p.text(results[i].rating);

                    var parkImage = $('<img/>');

                    parkImage.addClass('anImg')

                    parkImage.attr('src', results[i].images.fixed_height_still.url);

                    parkImage.attr('data-still', results[i].images.fixed_height_still.url)

                    parkImage.attr('data-animate', results[i].images.fixed_height.url)

                    parkDiv.attr('data-state', 'still');

                    parkDiv.append(p);

                    parkDiv.append(parkImage);

                    parkDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function () {

                    var state = $(this).attr('data-state');

                    if (state == 'still') {

                        $(this).attr('src', $(this).data('animate'));

                        $(this).attr('data-state', 'animate');

                    } else {

                        $(this).attr('src', $(this).data('still'));

                        $(this).attr('data-state', 'still');
                    }
                });
            });

        $("#gif-input").val("");
        return false;
    })

});