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
