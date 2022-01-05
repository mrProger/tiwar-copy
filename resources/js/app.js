require('./bootstrap');
import Vue from 'vue'
import HomePage from './views/Home.vue';

Vue.component('home-page', HomePage);

const app = new Vue({
    el: '#app',
});