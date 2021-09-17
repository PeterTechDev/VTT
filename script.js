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
});
