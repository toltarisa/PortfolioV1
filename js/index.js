$(document).ready(function(){
    $('.scroll').click(function(e){
        e.preventDefault();
        var linkRef = $(this).children().attr('href');
       $('html,body').animate({
           scrollTop : $(linkRef).offset().top
       });
    });
});