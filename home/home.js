$(document).ready(function(){
    $("header .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText:[
            '<i class="fa-solid fa-caret-left"></i>',
            '<i class="fa-solid fa-caret-right"></i>'
        ]
    });
    $(".onSale .owl-carousel ,.latestProducts .owl-carousel").owlCarousel({
        loop:false,
        nav:true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText:[
            '<i class="fa-solid fa-caret-left"></i>',
            '<i class="fa-solid fa-caret-right"></i>'
        ],responsive: {
            0: {
            items: 1
            },
            25: {
            items: 2
            },
            740: {
            items: 3
            },
            940: {
            items: 5
            }
        }
    });
});
