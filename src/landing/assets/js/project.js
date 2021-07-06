import * as $ from 'jquery';

$(document).ready(function(){
    let platformSlider = $('.js-project__slider'),
        siteSlider = $('.js-site__slider'),
        appSlider = $('.js-app__slider'),
        crmSlider = $('.js-crm__slider'),
        managerSlider = $('.js-manager__slider'),
        wmcSlider = $('.js-wmc__slider'),
        width = window.innerWidth;

    const options = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
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
    }

    if(platformSlider){
        let prev = $('.platform__slider_prev'),
            next = $('.platform__slider_next');

        $(platformSlider).slick(options);

        $(prev).click(function(){
            $(platformSlider).slick('slickPrev');
        });

        $(next).click(function(){
            $(platformSlider).slick('slickNext');
        });

        $(platformSlider).on('afterChange', function() {
            let dataId = +$('.js-project__slider .slick-current').attr("data-slick-index");
            if(dataId > 0){
                $(prev).addClass('project__slider_active');
            } else {
                $(prev).removeClass('project__slider_active');
            }
        });
    }

    if(siteSlider){
        let prev = $('.site__slider_prev'),
            next = $('.site__slider_next');

        $(siteSlider).slick(options);

        $(prev).click(function(){
            $(siteSlider).slick('slickPrev');
        });

        $(next).click(function(){
            $(siteSlider).slick('slickNext');
        });

        $(siteSlider).on('afterChange', function() {
            let dataId = +$('.js-site__slider .slick-current').attr("data-slick-index");
            if(dataId > 0){
                $(prev).addClass('project__slider_active');
            } else {
                $(prev).removeClass('project__slider_active');
            }
        });
    }

    if(appSlider){
        let prev = $('.app__slider_prev'),
            next = $('.app__slider_next');

        $(appSlider).slick(options);

        $(prev).click(function(){
            $(appSlider).slick('slickPrev');
        });

        $(next).click(function(){
            $(appSlider).slick('slickNext');
        });

        $(appSlider).on('afterChange', function() {
            let dataId = +$('.js-app__slider .slick-current').attr("data-slick-index");
            if(dataId > 0){
                $(prev).addClass('project__slider_active');
            } else {
                $(prev).removeClass('project__slider_active');
            }
        });
    }

    if(crmSlider){
        let prev = $('.crm__slider_prev'),
            next = $('.crm__slider_next');

        $(crmSlider).slick(options);

        $(prev).click(function(){
            $(crmSlider).slick('slickPrev');
        });

        $(next).click(function(){
            $(crmSlider).slick('slickNext');
        });

        $(crmSlider).on('afterChange', function() {
            let dataId = +$('.js-crm__slider .slick-current').attr("data-slick-index");
            if(dataId > 0){
                $(prev).addClass('project__slider_active');
            } else {
                $(prev).removeClass('project__slider_active');
            }
        });
    }

    if(managerSlider){
        let prev = $('.manager__slider_prev'),
            next = $('.manager__slider_next');

        $(managerSlider).slick(options);

        $(prev).click(function(){
            $(managerSlider).slick('slickPrev');
        });

        $(next).click(function(){
            $(managerSlider).slick('slickNext');
        });

        $(managerSlider).on('afterChange', function() {
            let dataId = +$('.js-manager__slider .slick-current').attr("data-slick-index");
            if(dataId > 0){
                $(prev).addClass('project__slider_active');
            } else {
                $(prev).removeClass('project__slider_active');
            }
        });
    }

    if(wmcSlider){
        let prev = $('.wmc__slider_prev'),
            next = $('.wmc__slider_next');

        $(wmcSlider).slick(options);

        $(prev).click(function(){
            $(wmcSlider).slick('slickPrev');
        });

        $(next).click(function(){
            $(wmcSlider).slick('slickNext');
        });

        $(wmcSlider).on('afterChange', function() {
            let dataId = +$('.js-wmc__slider .slick-current').attr("data-slick-index");
            if(dataId > 0){
                $(prev).addClass('project__slider_active');
            } else {
                $(prev).removeClass('project__slider_active');
            }
        });
    }
});