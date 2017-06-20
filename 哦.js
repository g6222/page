 var userName,
           password,
            password2;
    function sub() {
        userName = $('#userName').val();
        password = $('input[type="password"]')[0].value;
        password2 = $('input[type="password"]')[1].value;

        if (userName.length < 4 || userName.length > 10) {
            alert('用户名长度为4~10位');
            return;
        }
        if (!password || !password2) {
            alert('密码为空');
            return;
        }
        if (password !== password2) {
            alert('两次密码输入不一样,请重新输入');
            return;
        }
        alert('注册成功');
    }