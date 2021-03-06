//tratando as col-lg.
(function($) {
    var $window = $(window),
        $con = $('#main-container');
    $window.resize(function resize() {
        if ($window.width() <= 1200) {
            return $con.removeClass('col-lg-6');
        }
        $con.addClass('col-lg-6');
    }).trigger('resize');
})(jQuery);
//fim tratamento col-lg

//efeito ancora na seleção do menu
(function() {
    $('.nav-item .dropdown-item').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 0
        }, 1000);

    });
})();

(function() {
    $('.link-especialidade').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 0
        }, 1000);
    });
})();


//efeito return to top com transição

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

//efeitos de ir até o produto selecinado
$(function() {
    $con = $('#background-wrapper');
    $('#bobinas').on('shown.bs.collapse', function(e) {
        $('html,body').animate({
            scrollTop: $('#bobinas').offset().top - 0
        }, 500);
        $con.removeClass('background-wrapper');
        $con.addClass('background-fixed');
    });
});