
    $(window).scroll(function() {
        if ($(document).scrollTop() > $("#institucionalid").position().top) {

            $('.background-wrapper').css({
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

        if ($(document).scrollTop() >= $("#produtosid").position().top){
            $('.background-wrapper').css({

                'background-image': 'url("img/produtos/produtos.jpg")'

            });
        }

       
    });


