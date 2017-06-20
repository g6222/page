$(function () {
    var nav=$('#title')
    var mar=$(".rangr_navigationbar")
    var win=$(window)
    var documt=$(document)
    win.scroll(function () {
        if (documt.scrollTop()>=45){
            nav.css('position','fixed')
            nav.css('top','0')
            nav.css('width','1905')
            mar.css("margin-left","40%")
        }else{
            nav.css('position','relative')
            nav.removeClass('top')
            nav.css('width','80%','margin','0 auto')
            mar.css("margin-left","30%")
         }
    })
})