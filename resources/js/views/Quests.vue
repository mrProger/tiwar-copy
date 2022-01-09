<template>
  <div id="quests">
      <div class="container quests-page">
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
                                <h5 class="card-title text-center quests-page__header">Тестовый квест 1</h5>
                                <p class="text-center quests-page__award">5 опыта и 50 монет</p>
                                <p class="text-center quests-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="completeQuest1" id="quest1-button" class="btn btn-primary align-self-center quests-page__button__item">Получить награду</span>
                            </div>
                        </div>
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center quests-page__header">Тестовый квест 2</h5>
                                <p class="text-center quests-page__award">10 опыта и 100 монет</p>
                                <p class="text-center quests-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="completeQuest2" id="quest2-button" class="btn btn-primary align-self-center quests-page__button__item">Получить награду</span>
                            </div>
                        </div>
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center quests-page__header">Тестовый квест 3</h5>
                                <p class="text-center quests-page__award">15 опыта и 150 монет</p>
                                <p class="text-center quests-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="completeQuest3" id="quest3-button" class="btn btn-primary align-self-center quests-page__button__item">Получить награду</span>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
          <div class="row pt-5">
              <div class="col d-flex flex-column">
                  <div class="align-self-center">
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center quests-page__header">Тестовый квест 4</h5>
                                <p class="text-center quests-page__award">20 опыта и 200 монет</p>
                                <p class="text-center quests-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="completeQuest4" id="quest4-button" class="btn btn-primary align-self-center quests-page__button__item">Получить награду</span>
                            </div>
                        </div>
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center quests-page__header">Тестовый квест 5</h5>
                                <p class="text-center quests-page__award">25 опыта и 250 монет</p>
                                <p class="text-center quests-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="completeQuest5" id="quest5-button" class="btn btn-primary align-self-center quests-page__button__item">Получить награду</span>
                            </div>
                        </div>
                        <div class="card" style="width: 15rem;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center quests-page__header">Тестовый квест 6</h5>
                                <p class="text-center quests-page__award">30 опыта и 300 монет</p>
                                <p class="text-center quests-page__requirement">ТРЕБОВАНИЯ</p>
                                <span @click="completeQuest6" id="quest6-button" class="btn btn-primary align-self-center quests-page__button__item">Получить награду</span>
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
                        <span @click="myHeroButtonClick" class="btn btn-primary quests-page__button" type="button">Мой герой</span>
                        <span @click="homeButtonClick" class="btn btn-primary quests-page__button" type="button">На главную</span>
                    </div>
                </div>
            </div>
            <div class="row px-2 pt-2">
                <div class="col">
                    <hr class="quests-page__underline">
                </div>
            </div>
            <div class="row px-3 pb-4">
                <div class="col">
                    <i id='quests-page__gender'></i><span id='quests-page__login' class='quests-page__hero-name'></span>
                </div>
                <div class="col">
                    <i class="fas fa-arrow-up"></i><span id='quests-page__level' class='quests-page__hero-level'></span>
                    <i class='fas fa-coins'></i><span id='quests-page__balance' class='quests-page__hero-balance'></span>
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
        if (JSON.parse(localStorage.getItem('player'))['quest1'])
            document.getElementById('quest1-button').innerText = 'Награда получена';
        else
            document.getElementById('quest1-button').innerText = 'Получить награду';

        if (JSON.parse(localStorage.getItem('player'))['quest2'])
            document.getElementById('quest2-button').innerText = 'Награда получена';
        else
            document.getElementById('quest2-button').innerText = 'Получить награду';

        if (JSON.parse(localStorage.getItem('player'))['quest3'])
            document.getElementById('quest3-button').innerText = 'Награда получена';
        else
            document.getElementById('quest3-button').innerText = 'Получить награду';

        if (JSON.parse(localStorage.getItem('player'))['quest4'])
            document.getElementById('quest4-button').innerText = 'Награда получена';
        else
            document.getElementById('quest4-button').innerText = 'Получить награду';

        if (JSON.parse(localStorage.getItem('player'))['quest5'])
            document.getElementById('quest5-button').innerText = 'Награда получена';
        else
            document.getElementById('quest5-button').innerText = 'Получить награду';

        if (JSON.parse(localStorage.getItem('player'))['quest6'])
            document.getElementById('quest6-button').innerText = 'Награда получена';
        else
            document.getElementById('quest6-button').innerText = 'Получить награду';

        if (JSON.parse(localStorage.getItem('player'))['gender'] == 'male')
            document.getElementById('quests-page__gender').classList.add('fas', 'fa-male');
        else
            document.getElementById('quests-page__gender').classList.add('fas', 'fa-female');

        document.getElementById('quests-page__login').innerText = JSON.parse(localStorage.getItem('player'))['login'];
        document.getElementById('quests-page__level').innerText = JSON.parse(localStorage.getItem('player'))['level'];
        document.getElementById('quests-page__balance').innerText = JSON.parse(localStorage.getItem('player'))['balance'];
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
        completeQuest1: function() {
            if (!JSON.parse(localStorage.getItem('player'))['quest1']) {
                let object_ = JSON.parse(localStorage.getItem('player'));

                object_['quest1'] = 1;
                object_['exp'] += 5;
                object_['balance'] += 50;
                document.getElementById('quest1-button').innerText = 'Награда получена';
                
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
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6']
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
        },
        completeQuest2: function() {
            if (!JSON.parse(localStorage.getItem('player'))['quest2']) {
                let object_ = JSON.parse(localStorage.getItem('player'));

                object_['quest2'] = 1;
                object_['exp'] += 5;
                object_['balance'] += 50;
                document.getElementById('quest2-button').innerText = 'Награда получена';
                
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
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6']
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
        },
        completeQuest3: function() {
            if (!JSON.parse(localStorage.getItem('player'))['quest3']) {
                let object_ = JSON.parse(localStorage.getItem('player'));

                object_['quest3'] = 1;
                object_['exp'] += 5;
                object_['balance'] += 50;
                document.getElementById('quest3-button').innerText = 'Награда получена';
                
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
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6']
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
        },
        completeQuest4: function() {
            if (!JSON.parse(localStorage.getItem('player'))['quest4']) {
                let object_ = JSON.parse(localStorage.getItem('player'));

                object_['quest4'] = 1;
                object_['exp'] += 5;
                object_['balance'] += 50;
                document.getElementById('quest4-button').innerText = 'Награда получена';
                
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
                    'quest1': JSON.parse(localStorage.getItem('player'))['quest1'],
                    'quest2': JSON.parse(localStorage.getItem('player'))['quest2'],
                    'quest3': JSON.parse(localStorage.getItem('player'))['quest3'],
                    'quest4': JSON.parse(localStorage.getItem('player'))['quest4'],
                    'quest5': JSON.parse(localStorage.getItem('player'))['quest5'],
                    'quest6': JSON.parse(localStorage.getItem('player'))['quest6']
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
        },
        completeQuest5: function() {
            if (!JSON.parse(localStorage.getItem('player'))['quest5']) {
                let object_ = JSON.parse(localStorage.getItem('player'));

                object_['quest5'] = 1;
                object_['exp'] += 5;
                object_['balance'] += 50;
                document.getElementById('quest5-button').innerText = 'Награда получена';
                
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
        },
        completeQuest6: function() {
            if (!JSON.parse(localStorage.getItem('player'))['quest6']) {
                let object_ = JSON.parse(localStorage.getItem('player'));

                object_['quest6'] = 1;
                object_['exp'] += 5;
                object_['balance'] += 50;
                document.getElementById('quest6-button').innerText = 'Награда получена';
                
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
        },
        myHeroButtonClick: () => document.location = 'myhero',
        homeButtonClick: () => document.location = 'game'
    }
}
</script>

<style>
    .quests-page__underline {
        border: 3px solid #C8C8C8;
        border-radius: 10px;
    }

    .quests-page__button {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 300px;
        height: 50px;
        border-radius: 15px !important;
    }

    .quests-page__button:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .quests-page__button__item {
        font-size: 20px !important;
        font-weight: bold !important;
        color: #FFFFFF;
        background-color: #40414A !important;
        border-color: #40414A !important;
        width: 210px;
        height: 50px;
        border-radius: 15px !important;
    }

    .quests-page__button__item:hover {
        color: #3E50B8 !important;
        background-color: #2B2C32 !important;
        border-color: #2B2C32 !important;
    }

    .quests-page__hero-gender {
        font-size: 26px;
        color: #FFFFFF;
    }

    .quests-page__hero-name {
        font-size: 26px;
        color: #FFFFFF;
    }

    .quests-page__hero-level {
        font-size: 26px;
        color: #FFFFFF;
        margin-right: 10px;
    }

    .quests-page__hero-balance {
        font-size: 26px;
        color: #FFFFFF;
    }

    .quests-page__header {
        font-size: 24px;
        color: #FFFFFF;
    }

    .quests-page__price {
        font-size: 20px;
        color: #FFFFFF;
    }

    .card {
        background-color: #636363 !important;
        display: inline-block !important;
        border: none !important;
    }

    .quests-page__award {
        font-size: 20px;
        color: #FFFFFF;
    }

    .quests-page__requirement {
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