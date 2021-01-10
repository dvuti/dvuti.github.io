if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

          alert("Вы используете мобильное устройство (телефон или планшет).")
          document.location.href = "https://dvuti.github.io/mobile_version";
        }
         else alert("Вы используете ПК.")


      function check(){
        if(document.getElementById('passbox').value == document.getElementById('password1').value){
          alert('Пароли верны');
        } else {
          alert('Пароли неверны');
        }
      }
