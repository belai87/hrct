import * as $ from 'jquery';

$(document).on('click', '.tab__item', function(){
    let contentId = $(this).data('content');

    $('.tab__item_active').removeClass('tab__item_active');
    $(this).addClass('tab__item_active');

    $('.tab__content_active').removeClass('tab__content_active');
    $(contentId).addClass('tab__content_active');
})