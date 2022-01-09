<template>
    <div id="game">
        <div class="contrainer game-page">
            <div class="row px-3 pt-3">
                <div class="col d-flex flex-column">
                    <span @click="logoutButtonClick" class="btn btn-primary game-page__button align-self-end" type="button">Выход</span>
                </div>
            </div>
            <div class="row pt-5">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span @click="arenaButtonClick" class="btn btn-primary game-page__button" type="button">Арена</span>
                        <span @click="questsButtonClick" class="btn btn-primary game-page__button" type="button">Квесты</span>
                    </div>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span @click="shopButtonClick" class="btn btn-primary game-page__button" type="button">Торговец</span>
                        <span @click="smithyButtonClick" class="btn btn-primary game-page__button" type="button">Кузница(СКОРО!)</span>
                    </div>
                </div>
            </div>
            <div class="row px-2 pt-4">
                <div class="col">
                    <hr class="game-page__underline">
                </div>
            </div>
            <div class="row pt-2">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span @click="myHeroButtonClick" class="btn btn-primary game-page__button" type="button">Мой герой</span>
                        <span @click="homeButtonClick" class="btn btn-primary game-page__button" type="button">На главную</span>
                    </div>
                </div>
            </div>
            <div class="row px-2 pt-2">
                <div class="col">
                    <hr class="game-page__underline">
                </div>
            </div>
            <div class="row px-3">
                <div class="col">
                    <i id='game-page__gender'></i><span id='game-page__login' class='game-page__hero-name'></span>
                </div>
                <div class="col">
                    <i class="fas fa-arrow-up"></i><span id='game-page__level' class='game-page__hero-level'></span>
                    <i class='fas fa-coins'></i><span id='game-page__balance' class='game-page__hero-balance'></span>
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
            document.getElementById('game-page__gender').classList.add('fas', 'fa-male');
        else
            document.getElementById('game-page__gender').classList.add('fas', 'fa-female');

        document.getElementById('game-page__login').innerText = JSON.parse(localStorage.getItem('player'))['login'];
        document.getElementById('game-page__level').innerText = JSON.parse(localStorage.getItem('player'))['level'];
        document.getElementById('game-page__balance').innerText = JSON.parse(localStorage.getItem('player'))['balance'];
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
        arenaButtonClick: () => document.location = 'arena',
        questsButtonClick: () => document.location = 'quests',
        shopButtonClick: () => document.location = 'shop',
        smithyButtonClick: function() {
            alert('Кузница');
        },
        myHeroButtonClick: () => document.location = 'myhero',
        homeButtonClick: () => document.location = 'game'
    }
}
</script>

<style>
    .game-page__underline {
        border: 3px solid #C8C8C8;
        border-radius: 10px;
    }

    .game-page__button {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 350px;
        height: 50px;
        border-radius: 15px !important;
    }

    .game-page__button:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .game-page__hero-gender {
        font-size: 26px;
        color: #FFFFFF;
    }

    .game-page__hero-name {
        font-size: 26px;
        color: #FFFFFF;
    }

    .game-page__hero-level {
        font-size: 26px;
        color: #FFFFFF;
    }

    .game-page__hero-balance {
        font-size: 26px;
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