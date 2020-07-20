import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import About from '../home/About'
import Suggestions from '../home/Suggestions'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: About },
        { path: '/suggestions', component: Suggestions },

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ],
    linkExactActiveClass: "activeLink"
});