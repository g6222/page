$(function () {
    var nav=$('#nav_base')
    // var mar=$(".rangr_navigationbar")
    var navv=$('#nav_link')
    var win=$(window)
    var documt=$(document)
    win.scroll(function () {
        if (documt.scrollTop()>=45){
            nav.css('position','fixed')
            nav.css('top','0')
            nav.css('width','100%')
                        navv.css('padding-right','150')
            // mar.css("margin-left","20%")
        }else{
            nav.css('position','relative')
            nav.removeClass('top')
            nav.css('width','70%','margin','0 auto')
            navv.css('padding-right','50')
            // mar.css("margin-left","10%")
         }
    })
})