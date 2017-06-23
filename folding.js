$(function () {
    window.onresize = function () {
        if (documt.width() < 767) {
            $('#nav_link').css(
                'display', 'none'
            )
        }
        else {
            $('#nav_link').css(
                'display', 'block'
            )
        }
    }
})