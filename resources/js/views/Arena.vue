<template>
    <div id="arena">
        <div class="container arena-page">
            <div class="row px-3 pt-3">
                <div class="col d-flex flex-column">
                    <span @click="logoutButtonClick" class="btn btn-primary quests-page__button align-self-end" type="button">Выход</span>
                </div>
            </div>
            <div class="row pt-5">
              <div class="col d-flex flex-column">
                  <div class="align-self-center">
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center arena-page__header">Обычно</h5>
                                <p class="text-center arena-page__award">2 опыта и 10 монет</p>
                                <p class="text-center arena-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="startEasyBattle" id="quest4-button" class="btn btn-primary align-self-center arena-page__button__item">Бой</span>
                            </div>
                        </div>
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center arena-page__header">Средне</h5>
                                <p class="text-center arena-page__award">5 опыта и 20 монет</p>
                                <p class="text-center arena-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="startMediumBattle" id="quest5-button" class="btn btn-primary align-self-center arena-page__button__item">Бой</span>
                            </div>
                        </div>
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center arena-page__header">Сложно</h5>
                                <p class="text-center arena-page__award">15 опыта и 30 монет</p>
                                <p class="text-center arena-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="startHardBattle" class="btn btn-primary align-self-center arena-page__button__item">Бой</span>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
            <div class="row px-2 pt-4">
                <div class="col">
                    <hr class="arena-page__underline">
                </div>
            </div>
            <div class="row pt-2">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span @click="myHeroButtonClick" class="btn btn-primary arena-page__button" type="button">Мой герой</span>
                        <span @click="homeButtonClick" class="btn btn-primary arena-page__button" type="button">На главную</span>
                    </div>
                </div>
            </div>
            <div class="row px-2 pt-2">
                <div class="col">
                    <hr class="arena-page__underline">
                </div>
            </div>
            <div class="row px-3 pb-4">
                <div class="col">
                    <i id='arena-page__gender'></i><span id='arena-page__login' class='arena-page__hero-name'></span>
                </div>
                <div class="col">
                    <i class="fas fa-arrow-up"></i><span id='arena-page__level' class='arena-page__hero-level'></span>
                    <i class='fas fa-coins'></i><span id='arena-page__balance' class='arena-page__hero-balance'></span>
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
            if (JSON.parse(localStorage.getItem('player'))['gender'] == 'male')
                document.getElementById('arena-page__gender').classList.add('fas', 'fa-male');
            else
                document.getElementById('arena-page__gender').classList.add('fas', 'fa-female');

            document.getElementById('arena-page__login').innerText = JSON.parse(localStorage.getItem('player'))['login'];
            document.getElementById('arena-page__level').innerText = JSON.parse(localStorage.getItem('player'))['level'];
            document.getElementById('arena-page__balance').innerText = JSON.parse(localStorage.getItem('player'))['balance'];
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
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6']
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
            myHeroButtonClick: () => document.location = 'myhero',
            homeButtonClick: () => document.location = 'game',
            startEasyBattle: function() {
                let random = Math.floor(Math.random() * 4);

                if (random == 0 || random == 1 || random == 2) {
                    alert('Поздравляем! Вы победили\nНаграда: 2 опыта и 10 монет');

                    let object_ = JSON.parse(localStorage.getItem('player'));

                object_['exp'] += 2;
                object_['balance'] += 10;
                
                if (object_['exp'] >= 5 && object_['exp'] < 10)
                    object_['level'] = 2;
                else if (object_['exp'] >= 10 && object_['exp'] < 15)
                    object_['level'] = 3;
                else if (object_['exp'] >= 15 && object_['exp'] < 20)
                    object_['level'] = 4;
                else if (object_['exp'] >= 20 && object_['exp'] < 25)
                    object_['level'] = 5;

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
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('К сожалению, вы проиграли!');
            },
            startMediumBattle: function() {
                let random = Math.floor(Math.random() * 4);

                if (random == 0 || random == 1) {
                    alert('Поздравляем! Вы победили\nНаграда: 5 опыта и 20 монет');

                    let object_ = JSON.parse(localStorage.getItem('player'));

                object_['exp'] += 5;
                object_['balance'] += 20;
                
                if (object_['exp'] >= 25 && object_['exp'] < 50)
                    object_['level'] = 2;
                else if (object_['exp'] >= 50 && object_['exp'] < 75)
                    object_['level'] = 3;
                else if (object_['exp'] >= 75 && object_['exp'] < 100)
                    object_['level'] = 4;
                else if (object_['exp'] >= 100 && object_['exp'] < 125)
                    object_['level'] = 5;
                else if (object_['exp'] >= 125 && object_['exp'] < 150)
                    object_['level'] = 6;
                else if (object_['exp'] >= 150 && object_['exp'] < 175)
                    object_['level'] = 7;
                else if (object_['exp'] >= 175 && object_['exp'] < 200)
                    object_['level'] = 8;
                else if (object_['exp'] >= 200 && object_['exp'] < 225)
                    object_['level'] = 9;
                else if (object_['exp'] >= 225 && object_['exp'] < 250)
                    object_['level'] = 10;
                else if (object_['exp'] >= 250 && object_['exp'] < 275)
                    object_['level'] = 11;
                else if (object_['exp'] >= 275 && object_['exp'] < 300)
                    object_['level'] = 12;
                else if (object_['exp'] >= 300 && object_['exp'] < 325)
                    object_['level'] = 13;
                else if (object_['exp'] >= 325 && object_['exp'] < 375)
                    object_['level'] = 14;
                else if (object_['exp'] >= 375 && object_['exp'] < 425)
                    object_['level'] = 15;
                else if (object_['exp'] >= 425 && object_['exp'] < 475)
                    object_['level'] = 16;
                else if (object_['exp'] >= 475 && object_['exp'] < 525)
                    object_['level'] = 17;
                else if (object_['exp'] >= 525 && object_['exp'] < 575)
                    object_['level'] = 18;
                else if (object_['exp'] >= 575 && object_['exp'] < 625)
                    object_['level'] = 19;
                else
                    object_['level'] = 20;

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
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('К сожалению, вы проиграли!');
            },
            startHardBattle: function() {
                let random = Math.floor(Math.random() * 4);

                if (random == 0) {
                    alert('Поздравляем! Вы победили\nНаграда: 15 опыта и 30 монет');

                    let object_ = JSON.parse(localStorage.getItem('player'));

                object_['exp'] += 15;
                object_['balance'] += 30;
                
                if (object_['exp'] >= 5 && object_['exp'] < 10)
                    object_['level'] = 2;
                else if (object_['exp'] >= 10 && object_['exp'] < 15)
                    object_['level'] = 3;
                else if (object_['exp'] >= 15 && object_['exp'] < 20)
                    object_['level'] = 4;
                else if (object_['exp'] >= 20 && object_['exp'] < 25)
                    object_['level'] = 5;

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
                    if (text == 'false')
                        alert(text);
                    else
                        document.location.reload();
                });
            });
                }
                else
                    alert('К сожалению, вы проиграли!');
            }
        }
    }
</script>

<style>
    .arena-page__underline {
        border: 3px solid #C8C8C8;
        border-radius: 10px;
    }

    .arena-page__button {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 300px;
        height: 50px;
        border-radius: 15px !important;
    }

    .arena-page__button:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .arena-page__button__item {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 210px;
        height: 50px;
        border-radius: 15px !important;
    }

    .arena-page__button__item:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .arena-page__hero-gender {
        font-size: 26px;
        color: #FFFFFF;
    }

    .arena-page__hero-name {
        font-size: 26px;
        color: #FFFFFF;
    }

    .arena-page__hero-level {
        font-size: 26px;
        color: #FFFFFF;
        margin-right: 10px;
    }

    .arena-page__hero-balance {
        font-size: 26px;
        color: #FFFFFF;
    }

    .arena-page__header {
        font-size: 24px;
        color: #FFFFFF;
    }

    .arena-page__price {
        font-size: 20px;
        color: #FFFFFF;
    }

    .card {
        background-color: #636363 !important;
        display: inline-block !important;
        border: none !important;
    }

    .arena-page__award {
        font-size: 20px;
        color: #FFFFFF;
    }

    .arena-page__requirement {
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