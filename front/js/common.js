$(document).ready(function() {

    // $('#home-banner').owlCarousel({ 

    //     loop: true,

    //     nav: true,

    //     items: 1,

    //     margin:0,

    //     nav: true,

    //     dots: false,

    //     autoplay:true,

    //     autoplayTimeout:5000,

    //     dotsContainer:'#dots',

    //     animateIn: 'fadeIn',

    //     animateOut: 'fadeOut',

    //     smartSpeed: 1000

    // });



    // $('#portfolio_slider').owlCarousel({ 

    //     loop: true,

    //     nav: true,

    //     center:true,

    //     items: 2.1,

    //     margin:70,

    //     nav: false,

    //     dots: true,

    //     autoplay:true,

    //     autoplayTimeout:7000,

    //     animateIn: 'fadeIn',

    //     animateOut: 'fadeOut',

    //     smartSpeed: 2000

    // });





    



    // $('.insghits_slider').slick({

    //     slidesToShow: 2,

    //     slidesToScroll: 1,

    //     vertical: true,

    //     arrows: false,

    //     dots: true,

    //     autoplay: false,

    //     autoplaySpeed: 2000,

    // });





    $('.menu a').click(function() {

        $('.bg-popup').fadeIn(500);

        $('.popup').stop(true,true).css({top :'0px'});  

    });

    $('.close').click(function() {

        $('.bg-popup').fadeOut(500);

        $('.popup').stop(true,true).css({top :'-150%'});

    });

    $('.TURNKEY').click(function(){

        $('#TURNKEY').addClass('TURNKEY_add')

    })



    $('a.href_click').click(function(){

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top - 80

        }, 1000)

    })  



    

})



$(function(){

    $( window).scroll(function(){

        var scroll = $(window).scrollTop();

        if (scroll > 50){

            $('header').stop(true,true).css({top :'0px'});  

            $('.main--demo-5').addClass('main--demo-5_Add');

        }

        else {

            $('header').stop(true,true).css({top :'-106px'});

            $('.main--demo-5').removeClass('main--demo-5_Add');

        }

    });



    $('.top_arrow').click(function(){

        $('body, html').animate({scrollTop : '0'}, 4000)

    });



    

});



$(window).scroll(function() {    

    var scroll = $(window).scrollTop();



    if (scroll >= 3600) {

        $(".social").addClass("darkHeader");

    } else {

        $(".social").removeClass("darkHeader");

    }

});

 

(function($){

    $(window).load(function(){

        $("#content-1").mCustomScrollbar({

          theme:"minimal"

        });

    });



})(jQuery);



$(document).ready(function(){



/* ===== mega_menu ===== */

    // (function() {

    //   const elmHamburger = document.querySelector('.hamburger');

    //   const gNavItems = document.querySelectorAll('.global-menu__item');

    //   const elmOverlay = document.querySelector('.shape-overlays');

    //   const overlay = new ShapeOverlays(elmOverlay);



    //   elmHamburger.addEventListener('click', () => {

    //     if (overlay.isAnimating) {

    //       return false;

    //     }

    //     overlay.toggle();

    //     if (overlay.isOpened === true) {

    //       elmHamburger.classList.add('is-opened-navi');

    //       for (var i = 0; i < gNavItems.length; i++) {

    //         gNavItems[i].classList.add('is-opened');

    //       }

    //     } else {

    //       elmHamburger.classList.remove('is-opened-navi');

    //       for (var i = 0; i < gNavItems.length; i++) {

    //         gNavItems[i].classList.remove('is-opened');

    //       }

    //     }

    //   });

    // }());



    $('.bgr_mn_cl').click(function(){

        $(this).toggleClass('menu_arrow_not');

        $('.global-menu').toggleClass('global-menu-add');

        $('.bragr_menu').toggleClass('bragr_menu_Add');

    });



    $('#enq').click(function(){

        $('.Offr_form_div').fadeIn();

        $("#enqresult").fadeOut();

        $('body').addClass('scroll_fixed');

    })



     $('.popup_close').click(function(){

        $('.Offr_form_div').fadeOut();

        $('body').removeClass('scroll_fixed');

    })



    //copy code 



$(function() {

   $(this).bind("contextmenu", function(e) {

       e.preventDefault();

   });

}); 



document.onkeydown = function(e) {

   if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keyCode === 123)) {

       return false;

   } else {

       return true;

   }

};

 $(document).keypress("u",function(e) {

   if(e.ctrlKey){

       return false;

   }else{

   return true;

   }

 });

window.ondragstart = function() { return false; } 

window.oncontextmenu = function () {

       return false;

 }

 $(document).keydown(function (event) {

   if (event.keyCode == 123) {

     return false;

   }

   else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {

     return false;

   }

});









});



$(document).ready(function(){

    //sessionStorage.setItem('firstVisit', '1');  

    if (sessionStorage.getItem('firstVisit') !=1)

    {

        //$('.Videos_bg').css({'opacity':'1','visibility':'visible', 'display':'flex'});

        $("#home-banner").css({'visibility':'hidden'});

        sessionStorage.setItem('firstVisit', '1'); 

        setTimeout(function () {

            $('.Videos_bg').css({'opacity':'0','visibility':'hidden'});

            $("#home-banner").css({'visibility':'visible'});

           //  window.location.reload();

        }, 5000); 

    }else{

        $('.Videos_bg').css({'opacity':'0','visibility':'hidden'});

        // alert(sessionStorage.getItem('firstVisit'));

    }

  // $(window).load(function(){

  //   sessionStorage.setItem('firstVisit', '1'); 

  //   setTimeout(function () {

  //       $('.Videos_bg').css({'opacity':'0','visibility':'hidden'}); 

  //   }, 4000);

  // }); 



$('footer a.sub_btn').click(function(){

    $('body').addClass('SubscribeDiv_Add');

});

$('.popup_close2').click(function(){

    $('body').removeClass('SubscribeDiv_Add');

});



});

$(document).ready(function(){

    // onclick anchor scroll

      $(function() {

         $('.href_click[href*="#"]:not([href="#"])').click(function() {

            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

              var target = $(this.hash);

              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

              if (target.length) {

                $('html, body').animate({

                  scrollTop: target.offset().top - 0

                }, 1000);

                return false;

              }

            }

          });

      });

})