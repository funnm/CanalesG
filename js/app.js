/**
 * CANALES G - MOTOR PRINCIPAL
 */

// BASE DE DATOS DE CANALES COMPLETOS
const channels = [
    // Nacionales / Noticias
    { title: "ECUAVISA", img: "img/ECUAVISA.png", url: "https://goo.su/fpPCiDb", type: "iframe" },
    { title: "ECUADOR TV", img: "img/ECUADOR-TV.png", url: "https://www.eltelegrafo.com.ec/medios/stream.php", type: "iframe" },
    { title: "TC TELEVISION", img: "img/TC-TELEVISION.png", url: "https://tctelevision.com/envivo/", type: "iframe" },
    { title: "TELEAMAZONAS", img: "img/TELEAMAZONAS.png", url: "https://cdn.jwplayer.com/players/QyzmCh3X-1k0Xjzae.html", type: "iframe" },
    { title: "RTS", img: "img/RTS.png", url: "https://alba-ec-rts-rts.stream.mediatiquestream.com/index.m3u8", type: "m3u8" },
    { title: "TVC", img: "img/TVC.png", url: "https://alba-ec-tvc-tvc.stream.mediatiquestream.com/index.m3u8", type: "m3u8" },
    { title: "OROMAR TV", img: "img/OROMAR-TV.png", url: "https://oromartv.com/tv-en-vivo/", type: "iframe" },
    { title: "CNN", img: "img/CNN.png", url: "https://d3696l48vwq25d.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-0g2918mubifjw/index.m3u8", type: "m3u8" },
    { title: "TELEMUNDO", img: "img/TELEMUNDO.png", url: "https://embed.sdfgnksbounce.com/embed2/telemundo51.html", type: "iframe" },
    { title: "CARACOL", img: "img/CARACOL.png", url: "https://embed.sdfgnksbounce.com/embed2/caracol.html", type: "iframe" },
    { title: "LAS ESTRELLAS", img: "img/LAS-ESTRELLAS.png", url: "https://embed.sdfgnksbounce.com/embed2/lasestrellas.html", type: "iframe" },
    { title: "DW", img: "img/DW.png", url: "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8", type: "m3u8" },
    { title: "RT", img: "img/RT.png", url: "https://actualidad.rt.com/en_vivo", type: "iframe" },
    { title: "FRANCE 24", img: "img/FRANCE-24.png", url: "https://mxplus.tv/television/france-24", type: "iframe" },
    { title: "TELEFE", img: "img/TELEFE.png", url: "https://embed.sdfgnksbounce.com/embed2/telefe.html", type: "iframe" },
    { title: "EL TRECE", img: "img/EL-TRECE.png", url: "https://embed.sdfgnksbounce.com/embed2/eltrece.html", type: "iframe" },
    { title: "TELEVISION PUBLICA", img: "img/TELEVISION-PUBLICA.png", url: "https://embed.sdfgnksbounce.com/embed2/televisionpublica.html", type: "iframe" },
    { title: "TELEMUNDO PUERTO RICO", img: "img/TELEMUNDO-PUERTO-RICO.png", url: "https://embed.sdfgnksbounce.com/embed2/telemundopuertorico.html", type: "iframe" },
    { title: "UNIVISION", img: "img/UNISION.png", url: "https://embed.sdfgnksbounce.com/embed2/unision.html", type: "iframe" },
    { title: "RCN", img: "img/RCN.png", url: "https://embed.sdfgnksbounce.com/embed2/rcn.html", type: "iframe" },
    { title: "LATINA", img: "img/LATINA.png", url: "https://embed.sdfgnksbounce.com/embed2/latina.html", type: "iframe" },
    { title: "AMERICA TV", img: "img/AMERICA-TV.png", url: "https://embed.sdfgnksbounce.com/embed2/americatv.html", type: "iframe" },
    { title: "WILLAX TV", img: "img/WILLAX-TV.png", url: "https://embed.sdfgnksbounce.com/embed2/willaxtv.html", type: "iframe" },
    { title: "ATV", img: "img/ATV.png", url: "https://embed.sdfgnksbounce.com/embed2/atv.html", type: "iframe" },

    // Entretenimiento / Series / Documentales
    { title: "TNT", img: "img/TNT.png", url: "https://embed.sdfgnksbounce.com/embed2/tnt.html", type: "iframe" },
    { title: "NATIONAL GEOGRAPHIC", img: "img/NATIONAL-GEOGRAPHIC.png", url: "https://embed.sdfgnksbounce.com/embed2/natgeo.html", type: "iframe" },
    { title: "DISCOVERY CHANNEL", img: "img/DISCOVERY-CHANNEL.png", url: "https://embed.sdfgnksbounce.com/embed2/discoverychannel.html", type: "iframe" },
    { title: "TNT SERIES", img: "img/TNT-SERIES.png", url: "https://embed.sdfgnksbounce.com/embed2/tntseries.html", type: "iframe" },
    { title: "AXN", img: "img/AXN.png", url: "https://embed.sdfgnksbounce.com/embed2/axn.html", type: "iframe" },
    { title: "UNIVERSAL CHANNEL", img: "img/UNIVERSAL-CHANNEL.png", url: "https://embed.sdfgnksbounce.com/embed2/universalchannel.html", type: "iframe" },
    { title: "AZTECA UNO", img: "img/AZTECA-UNO.png", url: "https://embed.sdfgnksbounce.com/embed2/aztecauno.html", type: "iframe" },
    { title: "STAR CHANNEL", img: "img/STAR-CHANNEL.png", url: "https://embed.sdfgnksbounce.com/embed2/starchannel.html", type: "iframe" },
    { title: "INVESTIGATION DISCOVERY", img: "img/INVESTIGATION-DISCOVERY.png", url: "https://player.twitch.tv/?channel=id_15q&parent=funnm.github.io", type: "iframe" },
    { title: "DISCOVERY HOME AND HEALTH", img: "img/DISCOVERY-HOME-AND-HEALTH.png", url: "https://player.twitch.tv/?channel=nty_555&parent=funnm.github.io", type: "iframe" },
    { title: "PLUTO TV", img: "img/PLUTO-TV.png", url: "https://pluto.tv/latam/live-tv/63eb9255c111bc0008fe6ec4", type: "iframe" },
    { title: "WWE", img: "img/WWE.png", url: "https://embed.sdfgnksbounce.com/embed2/wwe.html", type: "iframe" },
    { title: "PASIONES", img: "img/PASIONES.png", url: "https://embed.sdfgnksbounce.com/embed2/pasiones.html", type: "iframe" },
    { title: "TL NOVELAS", img: "img/TL-NOVELAS.png", url: "https://embed.sdfgnksbounce.com/embed2/tlnovelas.html", type: "iframe" },
    { title: "GALAVISION", img: "img/GALAVISION.png", url: "https://embed.sdfgnksbounce.com/embed2/galavision.html", type: "iframe" },
    { title: "AZTECA 7", img: "img/AZTECA-7.png", url: "https://embed.sdfgnksbounce.com/embed2/azteca7.html", type: "iframe" },
    { title: "CANAL 5", img: "img/CANAL-5.png", url: "https://embed.sdfgnksbounce.com/embed2/canal5.html", type: "iframe" },
    { title: "DISCOVERY WORLD", img: "img/DISCOVERY-WORLD.png", url: "https://embed.sdfgnksbounce.com/embed2/discoveryworld.html", type: "iframe" },
    { title: "DISCOVERY THEATER", img: "img/DISCOVERY-THEATER.png", url: "https://embed.sdfgnksbounce.com/embed2/discoverytheater.html", type: "iframe" },
    { title: "DISCOVERY SCIENCE", img: "img/DISCOVERY-SCIENCE.png", url: "https://embed.sdfgnksbounce.com/embed2/discoveryscience.html", type: "iframe" },
    { title: "HISTORY", img: "img/HISTORY.png", url: "https://embed.sdfgnksbounce.com/embed2/history.html", type: "iframe" },
    { title: "HISTORY 2", img: "img/HISTORY-2.png", url: "https://embed.sdfgnksbounce.com/embed2/history2.html", type: "iframe" },
    { title: "ANIMAL PLANET", img: "img/ANIMAL-PLANET.png", url: "https://embed.sdfgnksbounce.com/embed2/animalplanet.html", type: "iframe" },
    { title: "FOX", img: "img/FOX.png", url: "https://player.twitch.tv/?channel=vfxrt229x&parent=funnm.github.io", type: "iframe" },
    { title: "WARNER CHANNEL", img: "img/WARNER-CHANNEL.png", url: "https://embed.sdfgnksbounce.com/embed2/warnerchannel.html", type: "iframe" },
    { title: "FX", img: "img/FX.png", url: "https://embed.sdfgnksbounce.com/embed2/fx.html", type: "iframe" },
    { title: "AMC", img: "img/AMC.png", url: "https://embed.sdfgnksbounce.com/embed2/amc.html", type: "iframe" },
    { title: "SONY", img: "img/SONY.png", url: "https://embed.sdfgnksbounce.com/embed2/sony.html", type: "iframe" },
    { title: "DISTRITO COMEDIA", img: "img/DISTRITO-COMEDIA.png", url: "https://embed.sdfgnksbounce.com/embed2/distritocomedia.html", type: "iframe" },

    // Películas
    { title: "CINECANAL", img: "img/CINECANAL.png", url: "https://embed.sdfgnksbounce.com/embed2/cinecanal.html", type: "iframe" },
    { title: "HBO PLUS", img: "img/HBO-PLUS.png", url: "https://goo.su/RBPmXwA", type: "iframe" },
    { title: "HBO 2", img: "img/HBO-2.png", url: "https://player.twitch.tv/?channel=dox171xc&parent=funnm.github.io", type: "iframe" },
    { title: "HBO", img: "img/HBO.png", url: "https://player.twitch.tv/?channel=bn_qq9&parent=funnm.github.io", type: "iframe" },
    { title: "MOVISTAR ACCION", img: "img/MOVISTAR-ACCION.png", url: "https://embed.sdfgnksbounce.com/embed2/movistaraccion.html", type: "iframe" },
    { title: "MOVISTAR DRAMA", img: "img/MOVISTAR-DRAMA.png", url: "https://embed.sdfgnksbounce.com/embed2/movistardrama.html", type: "iframe" },
    { title: "CINEMAX", img: "img/CINEMAX.png", url: "https://embed.sdfgnksbounce.com/embed2/cinemax.html", type: "iframe" },
    { title: "SPACE", img: "img/SPACE.png", url: "https://embed.sdfgnksbounce.com/embed2/space.html", type: "iframe" },
    { title: "STUDIO UNIVERSAL", img: "img/STUDIO-UNIVERSAL.png", url: "https://embed.sdfgnksbounce.com/embed2/studiouniversal.html", type: "iframe" },
    { title: "MULTIPREMIER", img: "img/MULTIPREMIER.png", url: "https://embed.sdfgnksbounce.com/embed2/multipremier.html", type: "iframe" },
    { title: "GOLDEN", img: "img/GOLDEN.png", url: "https://embed.sdfgnksbounce.com/embed2/golden.html", type: "iframe" },
    { title: "GOLDEN PLUS", img: "img/GOLDEN-PLUS.png", url: "https://embed.sdfgnksbounce.com/embed2/goldenplus.html", type: "iframe" },
    { title: "GOLDEN EDGE", img: "img/GOLDEN-EDGE.png", url: "https://embed.sdfgnksbounce.com/embed2/goldenedge.html", type: "iframe" },
    { title: "GOLDEN PREMIER", img: "img/GOLDEN-PREMIER.png", url: "https://embed.sdfgnksbounce.com/embed2/terror.html", type: "iframe" },
    { title: "GOLDEN PREMIER 2", img: "img/GOLDEN-PREMIER-2.png", url: "https://embed.sdfgnksbounce.com/embed2/goldenpremier2.html", type: "iframe" },
    { title: "DHE", img: "img/DHE.png", url: "https://embed.sdfgnksbounce.com/embed2/dhe.html", type: "iframe" },

    // Deportes
    { title: "GOL TV", img: "img/GOL-TV.png", url: "https://embed.sdfgnksbounce.com/embed2/goltv.html", type: "iframe" },
    { title: "TNT SPORTS", img: "img/TNT-SPORTS.png", url: "https://embed.sdfgnksbounce.com/embed2/tntsports.html", type: "iframe" },
    { title: "FOX SPORTS PREMIUM", img: "img/FOX-SPORTS-PREMIUN.png", url: "https://embed.sdfgnksbounce.com/embed2/foxsportspremium.html", type: "iframe" },
    { title: "TYC SPORTS", img: "img/TYC-SPORTS.png", url: "https://embed.sdfgnksbounce.com/embed2/tycsports.html", type: "iframe" },
    { title: "MOVISTAR DEPORTES PERU", img: "img/MOVISTAR-DEPORTES-PERU.png", url: "https://embed.sdfgnksbounce.com/embed2/movistardeportes.html", type: "iframe" },
    { title: "MOVISTAR LA LIGA", img: "img/MOVISTAR-LA-LIGA.png", url: "https://embed.sdfgnksbounce.com/embed2/movistarlaliga.html", type: "iframe" },
    { title: "ESPN", img: "img/ESPN.png", url: "https://embed.sdfgnksbounce.com/embed2/espn.html", type: "iframe" },
    { title: "ESPN 2", img: "img/ESPN-2.png", url: "https://embed.sdfgnksbounce.com/embed2/espn2.html", type: "iframe" },
    { title: "ESPN 3", img: "img/ESPN-3.png", url: "https://embed.sdfgnksbounce.com/embed2/espn3.html", type: "iframe" },
    { title: "ESPN 4", img: "img/ESPN-4.png", url: "https://embed.sdfgnksbounce.com/embed2/espn4.html", type: "iframe" },
    { title: "ESPN 5", img: "img/ESPN-5.png", url: "https://embed.sdfgnksbounce.com/embed2/espn5.html", type: "iframe" },
    { title: "ESPN 6", img: "img/ESPN-6.png", url: "https://embed.sdfgnksbounce.com/embed2/espn6.html", type: "iframe" },
    { title: "ESPN 7", img: "img/ESPN-7.png", url: "https://embed.sdfgnksbounce.com/embed2/espn7.html", type: "iframe" },
    { title: "ESPN MEXICO", img: "img/ESPN-MEXICO.png", url: "https://embed.sdfgnksbounce.com/embed2/espnmexico.html", type: "iframe" },
    { title: "ESPN 2 MEXICO", img: "img/ESPN-2-MEXICO.png", url: "https://embed.sdfgnksbounce.com/embed2/espn2mexico.html", type: "iframe" },
    { title: "ESPN 3 MEXICO", img: "img/ESPN-3-MEXICO.png", url: "https://embed.sdfgnksbounce.com/embed2/espn3mexico.html", type: "iframe" },
    { title: "FOX SPORTS", img: "img/FOX-SPORTS.png", url: "https://embed.sdfgnksbounce.com/embed2/foxsports.html", type: "iframe" },
    { title: "FOX SPORTS 2", img: "img/FOX-SPORTS-2.png", url: "https://embed.sdfgnksbounce.com/embed2/foxsports2.html", type: "iframe" },
    { title: "FOX SPORTS 3", img: "img/FOX-SPORTS-3.png", url: "https://embed.sdfgnksbounce.com/embed2/foxsports3.html", type: "iframe" },
    { title: "FOX SPORTS MEXICO", img: "img/FOX-SPORTS-MEXICO.png", url: "https://embed.sdfgnksbounce.com/embed2/foxsportsmexico.html", type: "iframe" },
    { title: "FOX SPORTS 2 MEXICO", img: "img/FOX-SPORTS-2-MEXICO.png", url: "https://embed.sdfgnksbounce.com/embed2/foxsports2mexico.html", type: "iframe" },
    { title: "FOX SPORTS 3 MEXICO", img: "img/FOX-SPORTS-3-MEXICO.png", url: "https://embed.sdfgnksbounce.com/embed2/foxsports3mexico.html", type: "iframe" },
    { title: "TUDN", img: "img/TUDN.png", url: "https://embed.sdfgnksbounce.com/embed2/tudn.html", type: "iframe" },
    { title: "DIRECTV SPORTS", img: "img/DIRECTV-SPORTS.png", url: "https://embed.sdfgnksbounce.com/embed2/directvsports.html", type: "iframe" },
    { title: "DIRECTV SPORTS 2", img: "img/DIRECTV-SPORTS-2.png", url: "https://embed.sdfgnksbounce.com/embed2/directvsports2.html", type: "iframe" },
    { title: "DIRECTV SPORTS PLUS", img: "img/DIRECTV-SPORTS-PLUS.png", url: "https://embed.sdfgnksbounce.com/embed2/directvsportsplus.html", type: "iframe" },
    { title: "GOL PERU", img: "img/GOL-PERU.png", url: "https://embed.sdfgnksbounce.com/embed2/golperu.html", type: "iframe" },

    // Infantiles
    { title: "NICKELODEON", img: "img/NICKELODEON.png", url: "https://embed.sdfgnksbounce.com/embed2/nick.html", type: "iframe" },
    { title: "CARTOON NETWORK", img: "img/CARTOON-NETWORK.png", url: "https://embed.sdfgnksbounce.com/embed2/cartoonnetwork.html", type: "iframe" },
    { title: "DISNEY CHANNEL", img: "img/DISNEY-CHANNEL.png", url: "https://embed.sdfgnksbounce.com/embed2/disneychannel.html", type: "iframe" },
    { title: "TOONCAST", img: "img/TOONCAST.png", url: "https://embed.sdfgnksbounce.com/embed2/tooncast.html", type: "iframe" },
    { title: "CARTOONITO", img: "img/CARTOONITO.png", url: "https://embed.sdfgnksbounce.com/embed2/cartoonito.html", type: "iframe" },
    { title: "DISNEY JR", img: "img/DISNEY-JR.png", url: "https://embed.sdfgnksbounce.com/embed2/disneyjr.html", type: "iframe" },

    // Canales 24/7 (Twitch & Otros)
    { title: "ROSA DE GUADALUPE 24/7", img: "img/ROSA-DE-GUADALUPE.png", url: "https://embed.sdfgnksbounce.com/embed2/larosadeguadalupe.html", type: "iframe" },
    { title: "TERROR 24/7", img: "img/TERROR.png", url: "https://embed.sdfgnksbounce.com/embed2/terror.html", type: "iframe" },
    { title: "BOB ESPONJA 24/7", img: "img/BOB-ESPONJA.png", url: "https://embed.sdfgnksbounce.com/embed2/bobesponja.html", type: "iframe" },
    { title: "DRAGON BALL SUPER 24/7", img: "img/DRAGON-BALL-SUPER.png", url: "https://embed.sdfgnksbounce.com/embed2/dragonballsuper.html", type: "iframe" },
    { title: "PITUFOS 24/7", img: "img/PITUFOS.png", url: "https://embed.sdfgnksbounce.com/embed2/pitufos.html", type: "iframe" },
    { title: "PADRINOS MAGICOS 24/7", img: "img/PADRINOS-MAGICOS.png", url: "https://embed.sdfgnksbounce.com/embed2/padrinosmagicos.html", type: "iframe" },
    { title: "LOS PICAPIEDRAS 24/7", img: "img/LOS-PICAPIEDRAS.png", url: "https://embed.sdfgnksbounce.com/embed2/lospicapiedras.html", type: "iframe" },
    { title: "CASO CERRADO 24/7", img: "img/CASO-CERRADO.png", url: "https://embed.sdfgnksbounce.com/embed2/casocerrado.html", type: "iframe" },
    { title: "EL CHAVO 24/7", img: "img/EL-CHAVO.png", url: "https://player.twitch.tv/?channel=cristaltv13&parent=funnm.github.io", type: "iframe" },
    { title: "LOS SIMPSONS 24/7", img: "img/LOS-SIMPSONS.png", url: "https://player.twitch.tv/?channel=f1leld026&parent=funnm.github.io", type: "iframe" },
    { title: "LOS SIMPSONS ANTIGUOS 24/7", img: "img/LOS-SIMPSONS.png", url: "https://player.twitch.tv/?channel=f1leld026&parent=funnm.github.io", type: "iframe" },
    { title: "LOS SIMPSONS ANTIGUOS 2 24/7", img: "img/LOS-SIMPSONS.png", url: "https://player.twitch.tv/?channel=los_amarilloshds&parent=funnm.github.io", type: "iframe" },
    { title: "DRAGON BALL Z 24/7", img: "img/DRAGON-BALL-Z.png", url: "https://player.twitch.tv/?channel=k1cc03&parent=funnm.github.io", type: "iframe" },
    { title: "DORAEMON 24/7", img: "img/DORAEMON.png", url: "https://player.twitch.tv/?channel=doraemoncastellano247&parent=funnm.github.io", type: "iframe" },
    { title: "CHAPULIN COLORADO 24/7", img: "img/CHAPULIN-COLORADO.png", url: "https://player.twitch.tv/?channel=jupitex_x&parent=funnm.github.io", type: "iframe" },
    { title: "PELICULAS HD 24/7", img: "img/PELICULAS-HD.png", url: "https://player.twitch.tv/?channel=peliculas__0&parent=funnm.github.io", type: "iframe" },
    { title: "PELICULAS HD 2 24/7", img: "img/PELICULAS-HD.png", url: "https://player.twitch.tv/?channel=peliculas9&parent=funnm.github.io", type: "iframe" },
    { title: "PELICULAS HD 3 24/7", img: "img/PELICULAS-HD.png", url: "https://player.twitch.tv/?channel=peliculas_88888&parent=funnm.github.io", type: "iframe" },
    { title: "PELICULAS MARVEL HD 24/7", img: "img/PELICULAS-MARVEL-HD.png", url: "https://player.twitch.tv/?channel=peliculas55&parent=funnm.github.io", type: "iframe" },
    { title: "PELICULAS MARVEL 2 HD 24/7", img: "img/PELICULAS-MARVEL-HD.png", url: "https://player.twitch.tv/?channel=peliculasdragon01&parent=funnm.github.io", type: "iframe" },
    { title: "AL FONDO HAY SITIO 24/7", img: "img/AL-FONDO-HAY-SITIO.png", url: "https://player.twitch.tv/?channel=alfondohaysitiooficiial&parent=funnm.github.io", type: "iframe" },
    { title: "MALCOLM 24/7", img: "img/MALCOLM.png", url: "https://player.twitch.tv/?channel=joslogx&parent=funnm.github.io", type: "iframe" },
    { title: "FUTURAMA 24/7", img: "img/FUTURAMA.png", url: "https://player.twitch.tv/?channel=harlen0906&parent=funnm.github.io", type: "iframe" },
    { title: "OYE ARNOLD 24/7", img: "img/OYE-ARNOLD.png", url: "https://player.twitch.tv/?channel=oyearnold_latam&parent=funnm.github.io", type: "iframe" },
    { title: "ICARLY 24/7", img: "img/ICARLY.png", url: "https://player.twitch.tv/?channel=samanimes&parent=funnm.github.io", type: "iframe" },
    { title: "DRAKE Y JOSH 24/7", img: "img/DRAKE-Y-JOSH.png", url: "https://player.twitch.tv/?channel=metallanime&parent=funnm.github.io", type: "iframe" },
    { title: "BETTY LA FEA 24/7", img: "img/BETTYLAFEA.png", url: "https://player.twitch.tv/?channel=bettylafea_1&parent=funnm.github.io", type: "iframe" },
    { title: "VICTORIOUS 24/7", img: "img/VICTORIUS.png", url: "https://player.twitch.tv/?channel=beatzonetv&parent=funnm.github.io", type: "iframe" },
    { title: "COMO CONOCI A TU MADRE 24/7", img: "img/COMO-CONOCI-A-TU-MADRE.png", url: "https://player.twitch.tv/?channel=metalanimme&parent=funnm.github.io", type: "iframe" },
    { title: "PANTERA ROSA 24/7", img: "img/PANTERA-ROSA.png", url: "https://player.twitch.tv/?channel=magickidshd&parent=funnm.github.io", type: "iframe" },
    { title: "VARIADOS 24/7", img: "img/VARIADOS.png", url: "https://player.twitch.tv/?channel=magickidshd&parent=funnm.github.io", type: "iframe" }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('channelGrid');
    const searchInput = document.getElementById('buscar');
    const currentYearSpan = document.getElementById('current-year');

    // Configurar año del footer
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

    // Renderizar Canales
    function render(filter = '') {
        if (!grid) return;
        grid.innerHTML = '';
        const filtered = channels.filter(c => c.title.toLowerCase().includes(filter.toLowerCase()));

        filtered.forEach(c => {
            const card = document.createElement('div');
            card.className = 'col';
            card.innerHTML = `
                <div class="card h-100 bg-body-tertiary border-0 shadow-sm channel-card" onclick="play('${c.type}', '${c.url}', '${c.title}')">
                    <div class="p-3 d-flex align-items-center justify-content-center" style="height: 120px;">
                        <img src="${c.img}" class="img-fluid rounded" alt="${c.title}" loading="lazy" style="max-height: 100%;">
                    </div>
                    <div class="card-footer bg-transparent border-0 text-center pb-3">
                        <h6 class="small fw-bold mb-0 text-truncate text-uppercase text-light">${c.title}</h6>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Buscador
    if (searchInput) {
        searchInput.addEventListener('input', (e) => render(e.target.value));
    }

    // Iniciar renderizado
    render();
});

// LOGICA DEL REPRODUCTOR (Anti Pantalla Negra)
window.play = (type, url, title) => {
    const modalLabel = document.getElementById('playerModalLabel');
    const container = document.getElementById('playerContainer');

    modalLabel.textContent = `🔴 EN VIVO: ${title}`;

    // 1. Limpiar reproductor anterior (Video.js)
    const oldPlayer = videojs.getPlayer('vjs-player');
    if (oldPlayer) {
        oldPlayer.dispose();
    }

    // 2. Preparar el nuevo contenedor
    container.innerHTML = '<div id="video-wrapper" class="ratio ratio-16x9 bg-black"></div>';
    const wrapper = document.getElementById('video-wrapper');

    // 3. Inyectar según el tipo
    if (type === 'm3u8') {
        wrapper.innerHTML = `
            <video id="vjs-player" class="video-js vjs-big-play-centered vjs-theme-city w-100 h-100" controls preload="auto">
                <source src="${url}" type="application/x-mpegURL">
            </video>
        `;
        videojs('vjs-player', {
            fluid: true,
            responsive: true,
            autoplay: true
        });
    } else {
        wrapper.innerHTML = `
            <iframe src="${url}" scrolling="no" frameborder="0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen class="w-100 h-100 rounded-bottom"></iframe>
        `;
    }

    // 4. Mostrar el Modal
    const myModal = new bootstrap.Modal(document.getElementById('playerModal'));
    myModal.show();
};

// DETENER AL CERRAR (Anti Sonido Fantasma / Pantalla Negra)
const playerModalElement = document.getElementById('playerModal');
if (playerModalElement) {
    playerModalElement.addEventListener('hidden.bs.modal', () => {
        const oldPlayer = videojs.getPlayer('vjs-player');
        if (oldPlayer) {
            oldPlayer.dispose(); // Destruye el motor HLS
        }
        document.getElementById('playerContainer').innerHTML = ''; // Destruye el iframe
    });
}