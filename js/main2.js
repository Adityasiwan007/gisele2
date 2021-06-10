(function ($) {
    "use strict";
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        
        autoplay:false,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
        
    });
    
})(jQuery);

