$(function () {

    $(window).scroll(function() {
        $('.logo').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__rotateInDownRight");
            }
        });
    });

     $(window).scroll(function() {
        $('.title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('.intro').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__fadeInRight");
            }
        });
    });

    $(window).scroll(function() {
        $('.btn').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__tada");
             }
         });
     });

     $(window).scroll(function() {
        $('.travel').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__rotateIn");
             }
         });
     });

     $(window).scroll(function() {
        $('.section-title').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__heartBeat");
             }
         });
     });

     $(window).scroll(function() {
        $('#learn .dream').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__rollIn");
             }
         });
     });

     $(window).scroll(function() {
        $('.section-title-2').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__flip");
             }
         });
     });

     $(window).scroll(function() {
        $('.input').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__rotateInDownLeft");
             }
         });
     });
 
     $(window).scroll(function() {
        $('.input-right').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__rotateInDownRight");
             }
         });
     });     

     $(window).scroll(function() {
        $('.btn-form').each(function(){
            var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("animate__tada");
             }
         });
     });     
})