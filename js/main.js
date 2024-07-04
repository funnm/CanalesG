const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
<nav class="navbar">
    <h1>CANALES G</h1>
    <ul>
        <li><a class="nav-text" href="index.html">INICIO</a></li>
    </ul>
</nav>
`;

footer.innerHTML = `
<div class="grupo-1">
    <div class="box">
        <h2>COMPARTIR</h2>
        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
            <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
            <a class="a2a_button_facebook"></a>
            <a class="a2a_button_whatsapp"></a>
            <a class="a2a_button_facebook_messenger"></a>
            <a class="a2a_button_telegram"></a>
            <a class="a2a_button_twitter"></a>
            <a class="a2a_button_x"></a>
            <a class="a2a_button_vk"></a>
        </div>
    </div>
    <div class="box">
        <h2>DONACIONES</h2>
        <p>Si te gusta el contenido, considera hacer una donación para apoyar nuestro trabajo.</p>
        <a href="#"><img class="PAYPAL-DONATE" src="img/PAYPAL-DONATE.png" alt="PAYPAL-DONATE"></a>
    </div>
    <div class="box">
        <h2>DESCARGA LA APLICACION AQUÍ</h2>
        <a href="#"><img class="PAYPAL-DONATE" src="img/CANALESG.png" alt="PAYPAL-DONATE"></a>
    </div>
</div>
`;

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


