import Vue from 'vue';
import Vuex from 'vuex';
import author from './modules/author';
import publication from './modules/publication';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    author,
    publication,
  },
});
