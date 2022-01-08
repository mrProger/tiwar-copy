<template>
    <div id="myhero">
        <div class="container myhero-page">
            <div class="row px-3 pt-3">
                <div class="col d-flex flex-column">
                    <span @click="logoutButtonClick" class="btn btn-primary myhero-page__button align-self-end" type="button">Выход</span>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span class="myhero-page__hero-name-label">Имя персонажа:</span>
                        <span id="hero-name" class="myhero-page__hero-name"></span>
                    </div>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span class="myhero-page__hero-gender-label">Пол:</span>
                        <span id="hero-gender" class="myhero-page__hero-gender"></span>
                    </div>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span class="myhero-page__hero-class-label">Класс:</span>
                        <span id="hero-class" class="myhero-page__hero-class"></span>
                    </div>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span class="myhero-page__hero-level-label">Уровень:</span>
                        <span id="hero-level" class="myhero-page__hero-level"></span>
                    </div>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span class="myhero-page__hero-balance-label">Баланс:</span>
                        <span id="hero-balance" class="myhero-page__hero-balance"></span>
                    </div>
                </div>
            </div>
            <div class="row px-2 pt-4">
                <div class="col">
                    <hr class="myhero-page__underline">
                </div>
            </div>
            <div class="row pt-3">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span @click="myHeroButtonClick" class="btn btn-primary myhero-page__button" type="button">Мой герой</span>
                        <span @click="homeButtonClick" class="btn btn-primary myhero-page__button" type="button">На главную</span>
                    </div>
                </div>
            </div>
            <div class="row px-2 pt-2">
                <div class="col">
                    <hr class="myhero-page__underline">
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
        document.getElementById('hero-name').innerText = JSON.parse(localStorage.getItem('player'))['login'];
        document.getElementById('hero-gender').innerText = JSON.parse(localStorage.getItem('player'))['gender'];
        document.getElementById('hero-class').innerText = JSON.parse(localStorage.getItem('player'))['class'];
        document.getElementById('hero-level').innerText = JSON.parse(localStorage.getItem('player'))['level'];
        document.getElementById('hero-balance').innerText = JSON.parse(localStorage.getItem('player'))['balance'];
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
        myHeroButtonClick: () => document.location = 'myhero',
        homeButtonClick: () => document.location = 'game'
    }
}
</script>

<style>
    .myhero-page__underline {
        border: 3px solid #C8C8C8;
        border-radius: 10px;
    }

    .myhero-page__button {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 350px;
        height: 50px;
        border-radius: 15px !important;
    }

    .myhero-page__button:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .myhero-page__hero-gender {
        font-size: 26px;
        color: #FFFFFF;
    }

    .myhero-page__hero-name {
        font-size: 26px;
        color: #FFFFFF;
    }

    .myhero-page__hero-level {
        font-size: 26px;
        color: #FFFFFF;
    }

    .myhero-page__hero-balance {
        font-size: 26px;
        color: #FFFFFF;
    }

    .myhero-page__hero-class {
        font-size: 26px;
        color: #FFFFFF;
    }

    .myhero-page__hero-gender-label {
        font-size: 26px;
        font-weight: bold;
        color: #FFFFFF;
    }

    .myhero-page__hero-name-label {
        font-size: 26px;
        font-weight: bold;
        color: #FFFFFF;
    }

    .myhero-page__hero-level-label {
        font-size: 26px;
        font-weight: bold;
        color: #FFFFFF;
    }

    .myhero-page__hero-balance-label {
        font-size: 26px;
        font-weight: bold;
        color: #FFFFFF;
    }

    .myhero-page__hero-class-label {
        font-size: 26px;
        font-weight: bold;
        color: #FFFFFF;
    }
</style>