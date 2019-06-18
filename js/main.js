//chargement du code et executer des que possible
$(document).ready(function(){
    //on met tous le code jquery a l'interieur//
    //en un click on colore ou non chaque rond//
   $('.rond').click(function(){
       //façon compliquer de faire (comme lucy)
        /* if ($(this).hasClass('active')){
        $(this).removeClass('active');}
        else {$(this).addClass('active');}*/
        $(this).toggleClass('active')
    });

    //buton rempli
    $('#remplir').click(function(){
        $('.row div').addClass('active');
    });
    //bouton vider
    $('#vider').click(function(){
        $('.row div').removeClass('active')
    });

    //si click carre 1
    $('.c1 ').click(function(){
        if ($('.row1').hasClass('active')){
            $('.row1').removeClass('active');}
            else {$('.row1').addClass('active');}
    });
    //carré 2
    $('.c2').click(function(){
        if ($('.row2').hasClass('active')){
            $('.row2').removeClass('active');}
            else {$('.row2').addClass('active');}
    });
    //carré4
    $('.c4').click(function(){
        if ($('.row4').hasClass('active')){
            $('.row4').removeClass('active');}
            else {$('.row4').addClass('active');}
    });
    //carré5
    $('.c5').click(function(){
        if ($('.row5').hasClass('active')){
            $('.row5').removeClass('active');}
            else {$('.row5').addClass('active');}
    });

    //si clique losange colonne et rang s activent
    $('.los1 ').click(function(){
        if ($('.row3,.col3').hasClass('active')){
            $('.row3,.col3').removeClass('active');}
            else {$('.row3,.col3').addClass('active');}
    });
})