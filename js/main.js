$(function(){
    $(".language .dropbtn").on('click', function() {
        if(!$(this).closest('.language').find('.dropdown-content').hasClass('dropdown-content-active')) {
            $(this).closest('.language').find('.dropdown-content').addClass('dropdown-content-active');
        } else {
            $(this).closest('.language').find('.dropdown-content').removeClass('dropdown-content-active');
        }
    });
});

$(function(){
    $(".profile .dropbtn").on('click', function() {
        if(!$(this).closest('.profile').find('.dropdown-content').hasClass('dropdown-content-active')) {
            $(this).closest('.profile').find('.dropdown-content').addClass('dropdown-content-active');
        } else {
            $(this).closest('.profile').find('.dropdown-content').removeClass('dropdown-content-active');
        }
    });
});