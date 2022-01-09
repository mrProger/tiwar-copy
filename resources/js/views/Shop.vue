<template>
  <div id="quests">
      <div class="container shop-page">
          <div class="row px-3 pt-3">
                <div class="col d-flex flex-column">
                    <span @click="logoutButtonClick" class="btn btn-primary shop-page__button align-self-end" type="button">Выход</span>
                </div>
          </div>
          <div class="row pt-5">
              <div class="col d-flex flex-column">
                  <div class="align-self-center">
                        <div class="card" style="width: 13rem;">
                            <img class="card-img-top" src="/../../../view/image/sword.jpg" alt="Card image cap" style='width: 206px; height: 140px'>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center shop-page__header">Меч 1</h5>
                                <p class="text-center shop-page__price">Цена: 100 монет</p>
                                <p class="text-center shop-page__attribute">Атака +10</p>
                                <p class="text-center shop-page__class">Класс: воин</p>
                                <span @click="weaponWarrior1" id="weapon-warrior-1" class="btn btn-primary align-self-center shop-page__button__item">Купить</span>
                            </div>
                        </div>
                        <div class="card" style="width: 13rem;">
                            <img class="card-img-top" src="/../../../view/image/staff.jpg" alt="Card image cap" style='width: 206px; height: 140px'>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center shop-page__header">Посох 1</h5>
                                <p class="text-center shop-page__price">Цена: 100 монет</p>
                                <p class="text-center shop-page__attribute">Атака +10</p>
                                <p class="text-center shop-page__class">Класс: маг</p>
                                <span @click="weaponWizard1" id="weapon-wizard-1" class="btn btn-primary align-self-center shop-page__button__item">Купить</span>
                            </div>
                        </div>
                        <div class="card" style="width: 13rem;">
                            <img class="card-img-top" src="/../../../view/image/bow.jpg" alt="Card image cap" style='width: 206px; height: 140px'>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center shop-page__header">Лук 1</h5>
                                <p class="text-center shop-page__price">Цена: 100 монет</p>
                                <p class="text-center shop-page__attribute">Атака +10</p>
                                <p class="text-center shop-page__class">Класс: охотник</p>
                                <span @click="weaponHunter1" id="weapon-hunter-1" class="btn btn-primary align-self-center shop-page__button__item">Купить</span>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
          <div class="row pt-5">
              <div class="col d-flex flex-column">
                  <div class="align-self-center">
                        <div class="card" style="width: 13rem;">
                            <img class="card-img-top" src="/../../../view/image/sword.jpg" alt="Card image cap" style='width: 206px; height: 140px'>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center shop-page__header">Меч 2</h5>
                                <p class="text-center shop-page__price">Цена: 200 монет</p>
                                <p class="text-center shop-page__attribute">Атака +20</p>
                                <p class="text-center shop-page__class">Класс: воин</p>
                                <span @click="weaponWarrior2" id="weapon-warrior-2" class="btn btn-primary align-self-center shop-page__button__item">Купить</span>
                            </div>
                        </div>
                        <div class="card" style="width: 13rem;">
                            <img class="card-img-top" src="/../../../view/image/staff.jpg" alt="Card image cap" style='width: 206px; height: 140px'>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center shop-page__header">Посох 2</h5>
                                <p class="text-center shop-page__price">Цена: 200 монет</p>
                                <p class="text-center shop-page__attribute">Атака +20</p>
                                <p class="text-center shop-page__class">Класс: маг</p>
                                <span @click="weaponWizard2" id="weapon-wizard-2" class="btn btn-primary align-self-center shop-page__button__item">Купить</span>
                            </div>
                        </div>
                        <div class="card" style="width: 13rem;">
                            <img class="card-img-top" src="/../../../view/image/bow.jpg" alt="Card image cap" style='width: 206px; height: 140px'>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center shop-page__header">Лук 2</h5>
                                <p class="text-center shop-page__price">Цена: 200 монет</p>
                                <p class="text-center shop-page__attribute">Атака +20</p>
                                <p class="text-center shop-page__class">Класс: охотник</p>
                                <span @click="weaponHunter2" id="weapon-hunter-2" class="btn btn-primary align-self-center shop-page__button__item">Купить</span>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
          <div class="row px-2 pt-4">
                <div class="col">
                    <hr class="quests-page__underline">
                </div>
            </div>
            <div class="row pt-2">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span @click="myHeroButtonClick" class="btn btn-primary shop-page__button" type="button">Мой герой</span>
                        <span @click="homeButtonClick" class="btn btn-primary shop-page__button" type="button">На главную</span>
                    </div>
                </div>
            </div>
            <div class="row px-2 pt-2">
                <div class="col">
                    <hr class="shop-page__underline">
                </div>
            </div>
            <div class="row px-3 pb-4">
                <div class="col">
                    <i id='shop-page__gender'></i><span id='shop-page__login' class='shop-page__hero-name'></span>
                </div>
                <div class="col">
                    <i class="fas fa-arrow-up"></i><span id='shop-page__level' class='shop-page__hero-level'></span>
                    <i class='fas fa-coins'></i><span id='shop-page__balance' class='shop-page__hero-balance'></span>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    beforeMount() {
        if ((localStorage.getItem('player') === null || localStorage.getItem('player') == '') && (localStorage.getItem('auth') === null || localStorage.getItem('auth') == 'false'))
            document.location = '/';
    },
    mounted() {
        if (JSON.parse(localStorage.getItem('player'))['class'] == 'warrior') {
            if (JSON.parse(localStorage.getItem('player'))['weapon1_buying'] == 1)
                document.getElementById('weapon-warrior-1').innerText = 'Куплено';
            else
                document.getElementById('weapon-warrior-1').innerText = 'Купить';

            if (JSON.parse(localStorage.getItem('player'))['weapon2_buying'] == 1)
                document.getElementById('weapon-warrior-2').innerText = 'Куплено';
            else
                document.getElementById('weapon-warrior-2').innerText = 'Купить';
        }
        else if (JSON.parse(localStorage.getItem('player'))['class'] == 'wizard') {
            if (JSON.parse(localStorage.getItem('player'))['weapon1_buying'] == 1)
                document.getElementById('weapon-wizard-1').innerText = 'Куплено';
            else
                document.getElementById('weapon-wizard-1').innerText = 'Купить';

            if (JSON.parse(localStorage.getItem('player'))['weapon2_buying'] == 1)
                document.getElementById('weapon-wizard-2').innerText = 'Куплено';
            else
                document.getElementById('weapon-wizard-2').innerText = 'Купить';
        }
        else if (JSON.parse(localStorage.getItem('player'))['class'] == 'hunter') {
            if (JSON.parse(localStorage.getItem('player'))['weapon1_buying'] == 1)
                document.getElementById('weapon-hunter-1').innerText = 'Куплено';
            else
                document.getElementById('weapon-hunter-1').innerText = 'Купить';

            if (JSON.parse(localStorage.getItem('player'))['weapon2_buying'] == 1)
                document.getElementById('weapon-hunter-2').innerText = 'Куплено';
            else
                document.getElementById('weapon-hunter-2').innerText = 'Купить';
        }

        if (JSON.parse(localStorage.getItem('player'))['gender'] == 'male')
            document.getElementById('shop-page__gender').classList.add('fas', 'fa-male');
        else
            document.getElementById('shop-page__gender').classList.add('fas', 'fa-female');
        
        document.getElementById('shop-page__login').innerText = JSON.parse(localStorage.getItem('player'))['login'];
        document.getElementById('shop-page__level').innerText = JSON.parse(localStorage.getItem('player'))['level'];
        document.getElementById('shop-page__balance').innerText = JSON.parse(localStorage.getItem('player'))['balance'];
    },
    methods: {
        logoutButtonClick: function() {
            fetch('/api/writeallplayerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'login': JSON.parse(localStorage.getItem('player'))['login'],
                    'level': JSON.parse(localStorage.getItem('player'))['level'],
                    'exp': JSON.parse(localStorage.getItem('player'))['exp'],
                    'balance': JSON.parse(localStorage.getItem('player'))['balance'],
                    'attack': JSON.parse(localStorage.getItem('player'))['attack'],
                    'weapon': JSON.parse(localStorage.getItem('player'))['weapon'],
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6'],
                    'weapon1_buying': JSON.parse(localStorage.getItem('player'))['weapon1_buying'],
                    'weapon2_buying': JSON.parse(localStorage.getItem('player'))['weapon2_buying']
                })
            }).then((response) => {
                return response.text().then(function(text) {
                    if (text == 'true') {
                        localStorage.removeItem('player');
                        localStorage.removeItem('auth');
                        document.location = '/';
                    }
                    else
                        alert(text);
                });
            });
        },
        weaponWarrior1: function() {
            let object_ = JSON.parse(localStorage.getItem('player'));

            if (object_['class'] == 'warrior' && object_['weapon1_buying'] == 0) {
                if (object_['balance'] >= 100) {
                    object_['balance'] -= 100;
                    object_['weapon'] = 1;
                    object_['attack'] += 10;
                    object_['weapon1_buying'] = 1;
                    document.getElementById('weapon-warrior-1').innerText = 'Куплено';

                    localStorage.setItem('player', JSON.stringify(object_));

                    fetch('/api/writeallplayerdata', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            'login': JSON.parse(localStorage.getItem('player'))['login'],
                            'level': JSON.parse(localStorage.getItem('player'))['level'],
                            'exp': JSON.parse(localStorage.getItem('player'))['exp'],
                            'balance': JSON.parse(localStorage.getItem('player'))['balance'],
                            'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                            'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                            'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                            'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                            'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                            'quest6': JSON.parse(localStorage.getItem('player'))['quest6'],
                            'weapon1_buying': JSON.parse(localStorage.getItem('player'))['weapon1_buying'],
                            'weapon2_buying': JSON.parse(localStorage.getItem('player'))['weapon2_buying']
                        })
                    }).then((response) => {
                        return response.text().then(function(text) {
                            if (text == 'false')
                                alert(text);
                            else
                                document.location.reload();
                        });
                    });
                }
                else
                    alert('Недостаточно средств');
            }
            else
                alert('Для покупки нужен другой класс');
        },
        weaponWarrior2: function() {
            let object_ = JSON.parse(localStorage.getItem('player'));

            if (object_['class'] == 'warrior' && object_['weapon2_buying'] == 0) {
                if (object_['balance'] >= 200) {
                    object_['balance'] -= 200;
                    object_['weapon'] = 2;
                    object_['attack'] += 20;
                    object_['weapon2_buying'] = 1;
                    document.getElementById('weapon-warrior-2').innerText = 'Куплено';

                    localStorage.setItem('player', JSON.stringify(object_));

                    fetch('/api/writeallplayerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'login': JSON.parse(localStorage.getItem('player'))['login'],
                    'level': JSON.parse(localStorage.getItem('player'))['level'],
                    'exp': JSON.parse(localStorage.getItem('player'))['exp'],
                    'balance': JSON.parse(localStorage.getItem('player'))['balance'],
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6'],
                    'weapon1_buying': JSON.parse(localStorage.getItem('player'))['weapon1_buying'],
                    'weapon2_buying': JSON.parse(localStorage.getItem('player'))['weapon2_buying']
                })
            }).then((response) => {
                return response.text().then(function(text) {
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('Недостаточно средств');
            }
            else
                alert('Для покупки нужен другой класс');
        },
        weaponWizard1: function() {
            let object_ = JSON.parse(localStorage.getItem('player'));

            if (object_['class'] == 'wizard' && object_['weapon1_buying'] == 0) {
                if (object_['balance'] >= 100) {
                    object_['balance'] -= 100;
                    object_['weapon'] = 1;
                    object_['attack'] += 10;
                    object_['weapon1_buying'] = 1;
                    document.getElementById('weapon-wizard-1').innerText = 'Куплено';

                    localStorage.setItem('player', JSON.stringify(object_));

                    fetch('/api/writeallplayerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'login': JSON.parse(localStorage.getItem('player'))['login'],
                    'level': JSON.parse(localStorage.getItem('player'))['level'],
                    'exp': JSON.parse(localStorage.getItem('player'))['exp'],
                    'balance': JSON.parse(localStorage.getItem('player'))['balance'],
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6'],
                    'weapon1_buying': JSON.parse(localStorage.getItem('player'))['weapon1_buying'],
                    'weapon2_buying': JSON.parse(localStorage.getItem('player'))['weapon2_buying']
                })
            }).then((response) => {
                return response.text().then(function(text) {
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('Недостаточно средств');
            }
            else
                alert('Для покупки нужен другой класс');
        },
        weaponWizard2: function() {
            let object_ = JSON.parse(localStorage.getItem('player'));

            if (object_['class'] == 'wizard' && object_['weapon2_buying'] == 0) {
                if (object_['balance'] >= 200) {
                    object_['balance'] -= 200;
                    object_['weapon'] = 2;
                    object_['attack'] += 20;
                    object_['weapon1_buying'] = 1;
                    document.getElementById('weapon-wizard-2').innerText = 'Куплено';

                    localStorage.setItem('player', JSON.stringify(object_));

                    fetch('/api/writeallplayerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'login': JSON.parse(localStorage.getItem('player'))['login'],
                    'level': JSON.parse(localStorage.getItem('player'))['level'],
                    'exp': JSON.parse(localStorage.getItem('player'))['exp'],
                    'balance': JSON.parse(localStorage.getItem('player'))['balance'],
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6'],
                    'weapon1_buying': JSON.parse(localStorage.getItem('player'))['weapon1_buying'],
                    'weapon2_buying': JSON.parse(localStorage.getItem('player'))['weapon2_buying']
                })
            }).then((response) => {
                return response.text().then(function(text) {
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('Недостаточно средств');
            }
            else
                alert('Для покупки нужен другой класс');
        },
        weaponHunter1: function() {
            let object_ = JSON.parse(localStorage.getItem('player'));

            if (object_['class'] == 'hunter' && object_['weapon1_buying'] == 0) {
                if (object_['balance'] >= 100) {
                    object_['balance'] -= 100;
                    object_['weapon'] = 1;
                    object_['attack'] += 10;
                    object_['weapon1_buying'] = 1;
                    document.getElementById('weapon-hunter-1').innerText = 'Куплено';

                    localStorage.setItem('player', JSON.stringify(object_));

                    fetch('/api/writeallplayerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'login': JSON.parse(localStorage.getItem('player'))['login'],
                    'level': JSON.parse(localStorage.getItem('player'))['level'],
                    'exp': JSON.parse(localStorage.getItem('player'))['exp'],
                    'balance': JSON.parse(localStorage.getItem('player'))['balance'],
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6'],
                    'weapon1_buying': JSON.parse(localStorage.getItem('player'))['weapon1_buying'],
                    'weapon2_buying': JSON.parse(localStorage.getItem('player'))['weapon2_buying']
                })
            }).then((response) => {
                return response.text().then(function(text) {
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('Недостаточно средств');
            }
            else
                alert('Для покупки нужен другой класс');
        },
        weaponHunter2: function() {
            let object_ = JSON.parse(localStorage.getItem('player'));

            if (object_['class'] == 'hunter' && object_['weapon2_buying'] == 0) {
                if (object_['balance'] >= 200) {
                    object_['balance'] -= 200;
                    object_['weapon'] = 2;
                    object_['attack'] += 20;
                    object_['weapon2_buying'] = 1;
                    document.getElementById('weapon-hunter-2').innerText = 'Куплено';

                    localStorage.setItem('player', JSON.stringify(object_));

                    fetch('/api/writeallplayerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'login': JSON.parse(localStorage.getItem('player'))['login'],
                    'level': JSON.parse(localStorage.getItem('player'))['level'],
                    'exp': JSON.parse(localStorage.getItem('player'))['exp'],
                    'balance': JSON.parse(localStorage.getItem('player'))['balance'],
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6'],
                    'weapon1_buying': JSON.parse(localStorage.getItem('player'))['weapon1_buying'],
                    'weapon2_buying': JSON.parse(localStorage.getItem('player'))['weapon2_buying']
                })
            }).then((response) => {
                return response.text().then(function(text) {
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('Недостаточно средств');
            }
            else
                alert('Для покупки нужен другой класс');
        },
        myHeroButtonClick: () => document.location = 'myhero',
        homeButtonClick: () => document.location = 'game'
    }
}
</script>

<style>
    .shop-page__underline {
        border: 3px solid #C8C8C8;
        border-radius: 10px;
    }

    .shop-page__button {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 300px;
        height: 50px;
        border-radius: 15px !important;
    }

    .shop-page__button:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .shop-page__button__item {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 200px;
        height: 50px;
        border-radius: 15px !important;
    }

    .shop-page__button__item:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .shop-page__hero-gender {
        font-size: 26px;
        color: #FFFFFF;
    }

    .shop-page__hero-name {
        font-size: 26px;
        color: #FFFFFF;
    }

    .shop-page__hero-level {
        font-size: 26px;
        color: #FFFFFF;
    }

    .shop-page__hero-balance {
        font-size: 26px;
        color: #FFFFFF;
    }

    .shop-page__header {
        font-size: 24px;
        color: #FFFFFF;
    }

    .shop-page__price {
        font-size: 20px;
        color: #FFFFFF;
    }

    .card {
        background-color: #636363 !important;
        display: inline-block !important;
        border: none !important;
    }

    .shop-page__attribute {
        font-size: 20px;
        color: #FFFFFF;
    }

    .shop-page__class {
        font-size: 20px;
        color: #FFFFFF;
    }

    .fa-male {
        font-size: 20px;
        color: blue;
        margin-right: 5px;
    }

    .fa-female {
        font-size: 20px;
        color: pink;
        margin-right: 5px;
    }

    .fa-coins {
        font-size: 20px;
        color: orange;
        margin-right: 5px;
    }

    .fa-arrow-up {
        font-size: 20px;
        color: green;
        margin-right: 5px;
    }
</style>