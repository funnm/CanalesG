$(document).ready(function() {
    // Función para buscar canales
    $('#buscar').on('input', function() {
        var value = $(this).val().toLowerCase();
        $('.boxes > .card-wrapper').filter(function() {
            var title = $(this).find('div').attr('title').toLowerCase();
            var content = $(this).find('div').text().toLowerCase();
            var match = title.indexOf(value) > -1 || content.indexOf(value) > -1;
            $(this).toggle(match);
        });
    });

    // Guardar el título y la URL del video en el localStorage
    $('.channel-link').on('click', function(e) {
        var channelTitle = $(this).data('title');
        var channelUrl = $(this).data('url');
        localStorage.setItem('channelTitle', channelTitle);
        localStorage.setItem('channelUrl', channelUrl);
    });

    // Página del reproductor: cargar el título y la URL del video
    if (window.location.pathname.includes('reproductor.html')) {
        var channelTitle = localStorage.getItem('channelTitle');
        var channelUrl = localStorage.getItem('channelUrl');
        $('#channel-title').text('Estas viendo: ' + channelTitle);
        $('#video-frame').attr('src', channelUrl);
    }

    // Página del reproductor: cargar el título y la URL del video m3U8
    if (window.location.pathname.includes('reproductor-m3u8.html')) {
        var channelTitle = localStorage.getItem('channelTitle');
        var channelUrl = localStorage.getItem('channelUrl');
        $('#channel-title').text('Estas viendo: ' + channelTitle);
        $('#video-frame').attr('src', channelUrl);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
});

