const $window = $(window);

$(document).ready(()=>{
    // header toggle
    $('#navbar-toggler').click(()=>{
        $('.navbar-collapse').slideToggle(400);
    });

    //change bg header on scrolll
    $(window).scroll(()=>{
        let pos = $window.scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    })

    // owl carousel
    $('.owl-carousel').owlCarousel({
        items:1,
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

