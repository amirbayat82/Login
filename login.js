let alert_box = document.querySelector('.alert');
function toLowerCase(text){
    return text.toLowerCase();
}

function result(){
    let username = toLowerCase( document.getElementById('username').value);
    let password = toLowerCase( document.getElementById('password').value);
    if(username === 'ali' && password === '12345678'){
        if(alert_box.classList.contains('alert-danger'))
            alert_box.classList.remove('alert-danger');
        alert_box.classList.add('alert-success');
        alert_box.innerHTML=`کاربر ${username} با موفقیت وارد سیستم شد`;
    }
    else{
        if(alert_box.classList.contains('alert-success'))
            alert_box.classList.remove('alert-success');
        alert_box.classList.add('alert-danger');
        alert_box.innerHTML='نام کاربری یا گذرواژه در سامانه ثبت نشده است'
    }
}