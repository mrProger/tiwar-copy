require('./bootstrap');
import Vue from 'vue'
import Home from './views/Home.vue'
import Game from './views/Game.vue'

Vue.component('home-page', Home);
Vue.component('game-page', Game);

const app = new Vue({
    el: '#app'
});