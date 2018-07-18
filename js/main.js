$(function(){
    $(".profile .dropbtn").on('click', function() {
        if(!$(this).closest('.profile').find('.dropdown-content').hasClass('dropdown-content-active')) {
            $(this).closest('.profile').find('.dropdown-content').addClass('dropdown-content-active');
        } else {
            $(this).closest('.profile').find('.dropdown-content').removeClass('dropdown-content-active');
        }
    });
});
$(function(){
    $(document).click(function (e){
        var div = $(".profile");
        if ($('.profile .dropdown-content').hasClass("dropdown-content-active")) {
            if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
                $('.profile .dropdown-content').removeClass('dropdown-content-active');
            }
        }
    });
});
$(function(){
    $(".news-ct article button").on('click', function() {
        if(!$(this).closest('article').find('.main-desc-ct p:last-child').hasClass('text-active')) {
            $(this).closest('article').find('.main-desc-ct p:last-child').addClass('text-active');
            $(this).remove();
        } else {
            $(this).closest('article').find('.main-desc-ct p:last-child').removeClass('text-active');
        }
    });
});
$(function(){
    $(".pet-profile .slider svg").on('click', function() {
        if(!$(this).closest('.heart').hasClass('active-heart')) {
            console.log('hi');
            $(this).closest('.heart').addClass('active-heart');
        } else {
            $(this).closest('.heart').removeClass('active-heart');
        }
    });
});

