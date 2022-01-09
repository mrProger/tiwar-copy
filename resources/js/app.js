require('./bootstrap');

import Vue from 'vue'

import Home from './views/Home.vue'
import Game from './views/Game.vue'
import MyHero from './views/MyHero.vue'
import Quests from './views/Quests.vue'
import Shop from './views/Shop.vue'
import Arena from './views/Arena.vue'

Vue.component('home-page', Home);
Vue.component('game-page', Game);
Vue.component('myhero-page', MyHero);
Vue.component('quests-page', Quests);
Vue.component('shop-page', Shop);
Vue.component('arena-page', Arena);

const app = new Vue({
    el: '#app'
});