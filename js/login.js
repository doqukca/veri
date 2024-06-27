document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.querySelector('.login');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun otomatik gönderilmesini engelle

        // Kullanıcı adı ve şifreyi al
        var username = document.querySelector('.login__input[type="text"]').value;
        var password = document.querySelector('.login__input[type="password"]').value;

        // Kullanıcı adı ve şifreyi kontrol et
        if (username === 'admin' && password === '123456') {
            // Başarılı admin girişi durumunda admin.html sayfasına yönlendir
            window.location.href = 'admin.html';
        } else if (username === 'user' && password === 'password') {
            // Başarılı kullanıcı girişi durumunda user.html sayfasına yönlendir
            window.location.href = 'user.html';
        } else {
            // Hatalı giriş durumunda hata mesajı göster
            alert('Kullanıcı adı veya şifre yanlış!');
        }
    });
});
