import * as $ from 'jquery';
$(document).ready(function(){
    let serviceSlider = $('.service__slider'),
        serviceNext = $('.service__slider_next'),
        servicePrev = $('.service__slider_prev'),
        width = window.innerWidth;

    if(width > 980){
        $(serviceSlider).slick({
            dots: true,
            arrows:false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $(servicePrev).click(function(){
            $(serviceSlider).slick('slickPrev');
        });

        $(serviceNext).click(function(){
            $(serviceSlider).slick('slickNext');
        });

        $(serviceSlider).on('afterChange', function() {
            let dataId = +$('.service__slider .slick-current').attr("data-slick-index");
            if(dataId > 0){
                $('.service__slider_prev').addClass('service__slider_active');
            } else {
                $('.service__slider_prev').removeClass('service__slider_active');
            }
        });
    }

    if(width < 980){
        let item = $('.service__item');

        $(item).click(function(){
           $(this).toggleClass('service__item_active');
        });
    }
});


