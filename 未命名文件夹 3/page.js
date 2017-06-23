$(function () {
    var nav=$('#title')
    var mar=$(".rangr_navigationbar")
    var win=$(window)
    var documt=$(document)
    win.scroll(function () {
        if (documt.scrollTop()>=45){
            nav.css('position','fixed')
            nav.css('top','0')
            nav.css('right','0')
            nav.css('left','0')
            nav.css('z-index','3333')
            // nav.css('width','1905')
            // mar.css("margin-left","850")
        }else{
            nav.css('position','relative')
            nav.removeClass('top')
            nav.removecss('right','0')
            nav.removecss('left','0')
            nav.removecss('z-index','0')
            // nav.css('width','80%','margin','0 auto')
            // mar.css("margin-left","450")
         }
    })
})