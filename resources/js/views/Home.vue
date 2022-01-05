<template>
  <div class="home">
    <div class="container home-page">
      <div class="row pt-3">
        <div class="col d-flex flex-column home-page__header">
          <span class="home-page__header__label align-self-center">БИТВА ТИТАНОВ</span>
          <hr class="home-page__header__underline align-self-center">
        </div>
      </div>
      <div class="row pt-4">
        <div class="col d-flex flex-column">
          <img class="home-page__img align-self-center" src="view/image/main_img.png" alt="...">
        </div>
      </div>
      <div class="row pt-5">
        <div class="col d-flex flex-column home-page__about-game">
          <span class="home-page__about-game__header align-self-center">Сражайся вместе с нами</span>
          <span class="home-page__about-game__content align-self-center">Бесплатная онлайн игра о которой ходят легенды</span>
          <span class="home-page__about-game__content align-self-center">Теперь к легенде можешь прикоснуться и ты!</span>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col d-flex flex-column home-page__authorization-form">
          <hr class="home-page__authorization-form__underline">
          <label active @click="showRegistrationForm" id="show-registration-form" for="hidden-checker-registration" type="button" class="btn btn-primary home-page__authorization-form__button-register align-self-center">Регистрация</label>
          <input type="checkbox" id="hidden-checker-registration">
          <form hidden class="hidden-block-registration home-page__authorization-form__registration" id="home-page__authorization-form__registration">
            <div class="row pt-3">
              <div class="col d-flex flex-column">
                <div class="align-self-center">
                  <span class="home-page__authorization-form__registration__gender-selection__header">Выберите пол:</span>
                  <input type="radio" checked name="gender" id="gender-selection__male" class="home-page__authorization-form__registration__gender-selection__male-radio">
                  <label for="gender-selection__male" class="home-page__authorization-form__registration__gender-selection__male">Мужской</label>
                  <input type="radio" name="gender" id="gender-selection__female" class="home-page__authorization-form__registration__gender-selection__female-radio">
                  <label for="gender-selection__female" class="home-page__authorization-form__registration__gender-selection__female">Женский</label>
                </div>
              </div>
            </div>
            <div class="row pt-3">
              <div class="col d-flex flex-column">
                <div class="align-self-center">
                  <span class="home-page__authorization-form__registration__class-selection__header align-self-center">Выберите класс:</span>
                  <input name="class" checked type="radio" id="class-selection__warrior" class="home-page__authorization-form__registration__class-selection__radio">
                  <label for="class-selection__warrior" class="home-page__authorization-form__registration__class-selection__warrior">Воин</label>
                  <input name="class" type="radio" id="class-selection__wizard" class="home-page__authorization-form__registration__class-selection__radio">
                  <label for="class-selection__wizard" class="home-page__authorization-form__registration__class-selection__wizard">Маг</label>
                  <input name="class" type="radio" id="class-selection__hunter" class="home-page__authorization-form__registration__class-selection__radio">
                  <label for="class-selection__hunter" class="home-page__authorization-form__registration__class-selection__hunter">Охотник</label>
                </div>
              </div>
            </div>
            <div class="row pt-3">
              <div class="col d-flex flex-column">
                <label for="home-page__authorization-form__registration__login" class="home-page__authorization-form__registration__login-label align-self-center">Имя персонажа:</label>
              </div>
            </div>
            <div class="row pt-2">
              <div class="col d-flex flex-column">
                <input required="required" name="login" id="home-page__authorization-form__registration__login" class="home-page__authorization-form__registration__login-input align-self-center">
              </div>
            </div>
            <div class="row pt-3">
              <div class="col d-flex flex-column">
                <label for="home-page__authorization-form__registration__password" class="home-page__authorization-form__registration__password-label align-self-center">Введите пароль:</label>
              </div>
            </div>
            <div class="row pt-3">
              <div class="col d-flex flex-column">
                <input type="password" required="required" name="password" id="home-page__authorization-form__registration__password" class="home-page__authorization-form__registration__password-input align-self-center">
              </div>
            </div>
            <div class="row pb-4 pt-5">
              <div class="col d-flex flex-column">
                <input @click="registration" type="button" value="Зарегистрироваться" class="home-page__authorization-form__registration__button align-self-center">
              </div>
            </div>
          </form>
          <br>
          <label @click="showAuthForm" for="hidden-checker-auth" id="show-auth-form" type="button" class="btn btn-primary home-page__authorization-form__button-auth align-self-center">Вход</label>
          <input type="checkbox" id="hidden-checker-auth">
          <form hidden class="hidden-block-auth home-page__authorization-form__auth" id="home-page__authorization-form__auth">
            <div class="row pt-3">
              <div class="col d-flex flex-column">
                <label class="home-page__authorization-form__auth__login-label align-self-center" for="home-page__authorization-form__auth__login">Имя персонажа:</label>
              </div>
            </div>
            <div class="row pt-2">
              <div class="col d-flex flex-column">
                <input required="required" name="login" class="home-page__authorization-form__auth__login-input align-self-center" id="home-page__authorization-form__auth__login">
              </div>
            </div>
            <div class="row pt-3">
              <div class="col d-flex flex-column">
                <label class="home-page__authorization-form__auth__password-label align-self-center" for="home-page__authorization-form__auth__password">Пароль:</label>
              </div>
            </div>
            <div class="row pt-2">
              <div class="col d-flex flex-column">
                <input type="password" required="required" name="password" class="home-page__authorization-form__auth__password-input align-self-center" id="home-page__authorization-form__auth__password">
              </div>
            </div>
            <div class="row pt-5">
              <div class="col d-flex flex-column">
                <input @click="auth" class="home-page__authorization-form__auth__button align-self-center" type="button" value="Войти">
              </div>
            </div>
          </form>
          <hr class="home-page__authorization-form__underline">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showRegistrationForm: function() {
        if (document.getElementById('hidden-checker-auth').checked && !document.getElementById('home-page__authorization-form__auth').hidden) {
          document.getElementById('home-page__authorization-form__auth').hidden = true;
          document.getElementById('hidden-checker-auth').checked = false;
          document.getElementById('show-auth-form').classList.remove('button-auth__active');
        }

        if (document.getElementById('home-page__authorization-form__registration').hidden) {
          document.getElementById('home-page__authorization-form__registration').hidden = false;
          document.getElementById('hidden-checker-registration').checked = false;
          document.getElementById('show-registration-form').classList.add('button-auth__active');
        }
        else {
          document.getElementById('home-page__authorization-form__registration').hidden = true;
          document.getElementById('hidden-checker-registration').checked = true;
          document.getElementById('show-registration-form').classList.remove('button-auth__active');
        }
      },
      showAuthForm: function() {
        if (document.getElementById('hidden-checker-registration').checked && !document.getElementById('home-page__authorization-form__registration').hidden) {
          document.getElementById('home-page__authorization-form__registration').hidden = true;
          document.getElementById('hidden-checker-registration').checked = false;
          document.getElementById('show-registration-form').classList.remove('button-auth__active');
        }

        if (document.getElementById('home-page__authorization-form__auth').hidden) {
          document.getElementById('home-page__authorization-form__auth').hidden = false;
          document.getElementById('hidden-checker-auth').checked = false;
          document.getElementById('show-auth-form').classList.add('button-auth__active');
        }
        else {
          document.getElementById('home-page__authorization-form__auth').hidden = true;
          document.getElementById('hidden-checker-auth').checked = true;
          document.getElementById('show-auth-form').classList.remove('button-auth__active');
        }
      },
      registration: function() {
        let login_input = document.getElementById('home-page__authorization-form__registration__login');
        let password_input = document.getElementById('home-page__authorization-form__registration__password');
        let gender_male = document.getElementById('gender-selection__male');
        let gender_female = document.getElementById('gender-selection__female');
        let class_warrior = document.getElementById('class-selection__warrior');
        let class_wizard = document.getElementById('class-selection__wizard');
        let class_hunter = document.getElementById('class-selection__hunter');

        let login = login_input.value.trim() != '' ? login_input.value : 'null';
        let password = password_input.value.trim() != '' ? password_input.value : 'null';
        let gender = gender_male.checked ? 'male' : 'female';
        let class_ = class_warrior.checked ? 'warrior' : class_wizard.checked ? 'wizard' : 'hunter';

        if (login != 'null' && password != 'null')
          fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            body: JSON.stringify({
              'login': login,
              'password': password,
              'gender': gender,
              'class': class_
            })
          }).then((response) => {
            return response.text().then(function(text) {
              alert(text);
            });
          });
        else
          alert('Все поля должны быть заполнены!');
      },
      auth: function() {
        let login_input = document.getElementById('home-page__authorization-form__auth__login');
        let password_input = document.getElementById('home-page__authorization-form__auth__password');

        let login = login_input.value.trim() != '' ? login_input.value : 'null';
        let password = password_input.value.trim() != '' ? password_input.value : 'null';

        if (login != 'null' && password != 'null')
          fetch('/api/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            body: JSON.stringify({
              'login': login,
              'password': password
            })
          }).then((response) => {
            return response.text().then(function(text) {
              if (text == 'true')
                alert('Вы успешно вошли в аккаунт!');
              else
                alert('Неверные логин или пароль');
            });
          });
        else
          alert('Все поля должны быть заполнены');
      }
    }
  }
</script>

<style>
.hidden-block-registration {
  opacity: 0;
  margin-top: 10px;
  -webkit-transition: opacity .5s;
  -moz-transition: opacity .5s;
  -ms-transition: opacity .5s;
  -o-transition: opacity .5s;
  transition: opacity .5s;
}

.hidden-block-auth {
  opacity: 0;
  margin-top: 10px;
  -webkit-transition: opacity .5s;
  -moz-transition: opacity .5s;
  -ms-transition: opacity .5s;
  -o-transition: opacity .5s;
  transition: opacity .5s;
}

#hidden-checker-registration {
  display: none;
}

#hidden-checker-auth {
  display: none;
}

#hidden-checker-registration:checked {
  position: static;
}

#hidden-checker-auth:checked {
  position: static;
}

#hidden-checker-registration:checked~.hidden-block-registration {
  opacity: 1;
}

#hidden-checker-auth:checked~.hidden-block-auth {
  opacity: 1;
}
</style>