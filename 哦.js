var code;
function createCode()
{
    code = "";
    var codeLength = 4;
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for(var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if(checkCode)
    {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}
function sub() {
    userName = $('#userName').val();
    password = $('input[type="password"]')[0].value;
    password2 = $('input[type="password"]')[1].value;
    name = $('#6').val();
    Verification = $('#checkCode').text()
    code = $('#code').val()
    var userName2 = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    var name2 = /^.{1,9}[^\d]+$/

    if(!code){
        alert('输入验证码')
        return
    }
    if (code !== Verification){
        alert('验证码有误')
        return
    }
    if (userName.length < 4 || userName.length > 10) {
        alert('用户名长度为4~10位');
        return;
    }
    if (!password || !password2) {
        alert('密码为空');
        return;
    }
    if (userName2.test(userName[0])) {

    }else{
        alert('第一位必须是字母！');
        return
    }
    if (password !== password2) {
        alert('两次密码输入不一样,请重新输入');
        return;
    }
    if (name2.test(name)) {

    }else {
        alert('名字2之10位 且不许带有数字')
        return
    }
    alert('注册成功');
    setTimeout("location.href='http://www.baidu.com';",1000);
}
var time = "";
var index = 1;
$(function () {
    showimg(index);
    //鼠标移入移出
    $(".imgnum span").hover(function () {
        clearTimeout(time);
        var icon=$(this).text();
        $(".imgnum span").removeClass("onselect").eq(icon-1).addClass("onselect");
        $("#banner_img li").hide().stop(true,true).eq(icon-1).fadeIn("slow");
    }, function () {
        index=$(this).text()> 5 ? 1 :parseInt($(this).text())+1;
        time = setTimeout("showimg(" + index + ")", 3000);
    });
});
function showimg(num) {
    index = num;
    $(".imgnum span").removeClass("onselect").eq(index-1).addClass("onselect");
    $("#banner_img li").hide().stop(true,true).eq(index-1).fadeIn("slow");
    index = index + 1 > 6 ? 1 : index + 1;
    time = setTimeout("showimg(" + index + ")", 3000);
}