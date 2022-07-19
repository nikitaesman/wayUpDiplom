$(function(){
    //Preloader
    $(window).on('load', function () {
        hiddenPreloader()
    });
    function hiddenPreloader() {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(100).fadeOut('slow');
    }
    setTimeout(hiddenPreloader, 1000)
    //Burger menu
    $('.burger').click(function(){
        $('.navigation').toggleClass('navigation-open');
        $('.offer').toggleClass('offer-open');
        $('.burger').toggleClass('burger-close');
        $('.menu').toggleClass('menu-open')
        $('.menu-colapse').toggleClass('d-none')
            .toggleClass('menu-colapse_open')
            .toggleClass('col-6')
            .toggleClass('col-12');
    });
    //Modal window
    $('.tel-modal').click(function(){
        $('#exampleModal').arcticmodal();
    });


    //Slick slider
    $('.slider').slick({
        autoplay: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });
})