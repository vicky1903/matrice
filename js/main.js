//chargement du code et executer des que possible
$(document).ready(function(){
    //on met tous le code jquery a l'interieur//
    //en un click on colore ou non chaque rond//
   $('.row div').click(function(){
       //façon compliquer de faire (comme lucy)
        /* if ($(this).hasClass('active')){
        $(this).removeClass('active');}
        else {$(this).addClass('active');}*/
        $(this).toggleClass('active')
    });

    //button rempli
    $('#remplir').click(function(){
        $('.row div').addClass('active');
    });
    //vider
    $('#vider').click(function(){
        $('.row div').removeClass('active')
    });

    $('.carre').click(function(){
        $('.')
    })

    
})