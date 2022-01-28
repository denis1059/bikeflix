var owl = $('.owl-carousel');
owl.owlCarousel({
    nav:false,
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoHeight:false,
    autoplayTimeout:2000,
    center:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    
});





