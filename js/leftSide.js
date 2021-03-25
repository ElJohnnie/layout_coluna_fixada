let doc = document.documentElement
let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));
window.addEventListener('scroll', function() {

    if (value = 100) {

        $('.background-wrapper').css({

            'position': 'fixed',
            'top': '0',
            'right': '0',
            'left': '0'

        });
        $('.background-fixed').css({
            'position': 'fixed',
            'top': '0',
            'right': '0',
            'left': '0'
        });
        $('.main-container').css({
            'left': '50%'
        });
    } else {
        $('.background-wrapper').css({
            'position': 'relative'

        });
        //se voltou a cima põe estatico
        $('.background-fixed').css({
            'position': 'relative'
        });
        $('.main-container').css({ 'left': '0%' });

    };

});

$(window).scroll(function() {

    if ($(document).scrollTop() >= $("#leftside1").position().top && $(document).scrollTop() < $("#leftside2").position().top) {
        $('.background-wrapper').css({

            'background-image': 'url("img/anchor/anchor1.jpg")'

        });
    }

    if ($(document).scrollTop() >= $("#leftside2").position().top && $(document).scrollTop() < $("#leftside3").position().top) {
        $('.background-wrapper').css({

            'background-image': 'url("img/anchor/anchor2.jpg")'

        });
    }

    if ($(document).scrollTop() >= $("#leftside3").position().top && $(document).scrollTop() < $("#leftside4").position().top) {
        $('.background-wrapper').css({

            'background-image': 'url("img/anchor/anchor3.jpg")'

        });
    }

    if ($(document).scrollTop() >= $("#leftside4").position().top && $(document).scrollTop() < $("#leftside5").position().top) {
        $('.background-wrapper').css({

            'background-image': 'url("img/anchor/anchor4.jpg")'

        });
    }

    if ($(document).scrollTop() >= $("#leftside5").position().top && $(document).scrollTop() < $("#leftside6").position().top) {
        $('.background-wrapper').css({

            'background-image': 'url("img/anchor/anchor5.jpg")'

        });
    }

    if ($(document).scrollTop() >= $("#leftside6").position().top && $(document).scrollTop() < $("#leftside7").position().top) {
        $('.background-wrapper').css({

            'background-image': 'url("img/anchor/anchor6.jpg")'

        });
    }

    if ($(document).scrollTop() >= $("#leftside7").position().top) {

        $('.background-wrapper').css({

            'background-image': 'url("img/anchor/anchor7.jpg")'

        });

    }


});