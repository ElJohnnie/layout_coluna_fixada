//menor ou igual 1500px de display

//if (window.matchMedia("(max-width: 1500px)").matches) {
    /* The viewport is less than, or equal to, 1500 pixels wide */
    //manter elemento fixo na tela
    $(window).scroll(function() {
        if ($(document).scrollTop() > 700) {
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
            $('.background-wrapper').css({ 'position': 'relative' }); //se voltou a cima põe estatico

            $('.background-fixed').css({ 'position': 'relative' });

            $('.main-container').css({ 'left': '0%' })
        }
    });
    $(window).scroll(function() {

        if ($(document).scrollTop() >= $("#institucionalid").position().top && $(document).scrollTop() < $("#especialidadeid").position().top  ) {
            $('.background-wrapper').css({

                'background-image': 'url("img/institucional/institucional.jpg")'

            });
        }

        if ($(document).scrollTop() >= $("#especialidadeid").position().top && $(document).scrollTop() < $("#produtosid").position().top) {
            $('.background-wrapper').css({

                'background-image': 'url("img/especialidade/especialidade.jpg")'

            });
        }

        if ($(document).scrollTop() >= $("#produtosid").position().top && $(document).scrollTop() < $("#especialidadeid").position().top) {
            $('.background-wrapper').css({

                'background-image': 'url("img/produtos/produtos.jpg")'

            });
        }

        if ($(document).scrollTop() >= 2400 & $(document).scrollTop() < 3100) {
            $('.background-wrapper').css({

                'background-image': 'url("img/ligas/ligas.jpg")'

            });
        }

        if ($(document).scrollTop() >= 3100 & $(document).scrollTop() < 3600) {
            $('.background-wrapper').css({

                'background-image': 'url("img/politica/politica.jpg")'

            });
        }

        if ($(document).scrollTop() >= 3600 & $(document).scrollTop() < 4300) {
            $('.background-wrapper').css({

                'background-image': 'url("img/catalogo/catalogo.jpg")'

            });
        }

        if ($(document).scrollTop() >= 4300 & $(document).scrollTop() < 5000 ) {
            $('.background-wrapper').css({

                'background-image': 'url("img/orcamento/orçamentos.jpg")'

            });
        }

        if ($(document).scrollTop() >= 5000) {
            $('.background-wrapper').css({

                'background-image': 'url("img/contato/contato.jpg")'

            });
        }
    });
//};


