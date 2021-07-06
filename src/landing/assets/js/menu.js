$(document).on('click', '.js-menu-mobile', function(){
    let menu = $('.menu__mobile'),
        body = $('body');

    $(menu).toggleClass('menu__mobile_active');
    $(body).toggleClass('hidden');
});
