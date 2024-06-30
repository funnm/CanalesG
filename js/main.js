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