import Vue from "vue";
import Vuex from "vuex";
import forms from './modules/forms';
import authentication from './modules/authentication'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authentication,
        forms
    }
});