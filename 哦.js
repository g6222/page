var code;
function createCode()
{
    code = "";
    var codeLength = 4;
    var checkCode = document.getElementById("checkCode");
    var codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for(var i = 0; i < codeLength; i++)
    {
        var charNum = ~~(Math.random() * 52);
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
    password = $('#password').val();
    password2 = $('#password2').val();
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