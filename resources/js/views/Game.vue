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
                        <span @click="careerButtonClick" class="btn btn-primary game-page__button" type="button">Карьера</span>
                    </div>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col d-flex flex-column">
                    <div class="align-self-center">
                        <span @click="shopButtonClick" class="btn btn-primary game-page__button" type="button">Торговец</span>
                        <span @click="smithyButtonClick" class="btn btn-primary game-page__button" type="button">Кузница</span>
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
                    <span id='game-page__gender' class='game-page__hero-gender'></span>
                    <span id='game-page__login' class='game-page__hero-name'></span>
                </div>
                <div class="col">
                    <span id='game-page__level' class='game-page__hero-level'></span>
                    <span id='game-page__space' class='game-pags__hero-space'></span>
                    <span id='game-page__balance' class='game-page__hero-balance'></span>
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
        document.getElementById('game-page__gender').innerText = JSON.parse(localStorage.getItem('player'))['gender'];
        document.getElementById('game-page__login').innerText = JSON.parse(localStorage.getItem('player'))['login'];
        document.getElementById('game-page__level').innerText = JSON.parse(localStorage.getItem('player'))['level'];
        document.getElementById('game-page__space').innerText = '|';
        document.getElementById('game-page__balance').innerText = JSON.parse(localStorage.getItem('player'))['balance'];
    },
    methods: {
        logoutButtonClick: function() {
            localStorage.setItem('player', '');
            localStorage.setItem('auth', 'false');
            document.location = '/';
        },
        arenaButtonClick: function() {
            alert('Арена');
        },
        careerButtonClick: function() {
            alert('Карьера');
        },
        shopButtonClick: function() {
            alert('Торговец');
        },
        smithyButtonClick: function() {
            alert('Кузница');
        },
        myHeroButtonClick: function() {
            alert('Мой герой');
        },
        homeButtonClick: function() {
            document.location = 'game';
        }
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

    .game-pags__hero-space {
        font-size: 26px;
        color: #FFFFFF;
    }
</style>