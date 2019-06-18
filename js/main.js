//chargement du code et executer des que possible
$(document).ready(function(){
    //on met tous le code jquery a l'interieur//
    //en un click on colore ou non chaque rond//
    $('.rond').click(function(){
        if ($(this).hasClass('active')){
        $(this).removeClass('active');}
        else {$(this).addClass('active');} 
    });

    //button rempli
    $('#remplir').click(function(){
        $('.row div').addClass('active');
    });
    //vider
    $('#vider').click(function(){
        $('.row div').removeClass('active')
    });


    
})