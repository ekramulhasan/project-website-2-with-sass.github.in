$(document).ready(function(){

    $('#nav').onePageNav({

        currentClass: 'current',
       
    });

})













$(window).on('scroll',function(){

    if($(this).scrollTop() > 50){

        $('.header-area').addClass('sticky');

    }

    else{

        $('.header-area').removeClass('sticky');
    }


})