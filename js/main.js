$(document).ready(function() {
    $('#buscar').on('input', function() {
        var value = $(this).val().toLowerCase();
        $('.boxes > .card-wrapper').filter(function() {
            var title = $(this).find('div').attr('title').toLowerCase();
            var content = $(this).find('div').text().toLowerCase();
            var match = title.indexOf(value) > -1 || content.indexOf(value) > -1;
            $(this).toggle(match);
        });
    });
});

$(document).ready(function() {
    // Guardar la URL del video en localStorage
    $('a[data-url]').click(function(event) {
        var url = $(this).data('url');
        localStorage.setItem('videoURL', url);
    });

    // Cargar la URL del video en el iframe de la página del reproductor
    var videoURL = localStorage.getItem('videoURL');
    if (videoURL) {
        $('#video-frame').attr('src', videoURL);
    }
});