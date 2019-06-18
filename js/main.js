//chargement du code et executer des que possible
$(document).ready(function(){
    //on met tous le code jquery a l'interieur
    //en un click ol colore ou non chaque rond
    $('.rond').click(function(){
        if ($(this).hasClass('active')){
        $(this).removeClass('active');}
        else {$(this).addClass('active');} 
    });
    
    
});
