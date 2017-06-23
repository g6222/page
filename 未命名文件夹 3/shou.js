$(function() {
    var title = $('#title');
    var bef_tit = $('#bef_tit');
    var win = $(window);
    var documt = $(document);
    win.scroll(function () {
        if (documt.scrollTop() >= 47) {
            title.css({
                'position':'fixed',
                'top':'0',
                'right':'0',
                'left':'0',
                'z-index':'99',
            });
        }
        else {
            title.css('position', 'relative');
            title.removeClass('top');
            title.removeClass('right');
            title.removeClass('left');
            title.removeClass('z-index');
        }
        if (documt.scrollTop() >= 300) {
            $('#back_to_top').css(
                'display','block'
            );
        } else {
            $('#back_to_top').css('display', 'none');
        }
    })
    if(documt.width()<=1090) {
        $(function () {
            $('#bodr').click(function () {
                $('.navigation').toggle();
            })
        })
    }
    else {
        $(function () {
            $('.navigation').toggle(true);
        });
    }
});
