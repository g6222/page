$(function () {
    var nav=$('#title')
    var win=$(window)
    var documt=$(document)
    win.scroll(function () {
        if (documt.scrollTop()>=45){
            nav.css('position','fixed')
            nav.css('top','0');
            nav.css('width','1905')
        }else{
            nav.css('position','relative')
            nav.removeClass('top')
            nav.removeClass('width','1355')
         }
    })
})