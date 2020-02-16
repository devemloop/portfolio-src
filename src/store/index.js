import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: {
      fontSize: localStorage.getItem('fontsize') || 'normal',
      theme: localStorage.getItem('theme') || 'default',
      language: localStorage.getItem('language') || 'es_CO',
    },
  },
  mutations: {
    setlanguage(state, language) {
      localStorage.setItem('language', language);
      state.config.language = language;
    },
    settheme(state, theme) {
      localStorage.setItem('theme', theme);
      state.config.theme = theme;
    },
    setfontsize(state, fontsize) {
      localStorage.setItem('fontsize', fontsize);
      state.config.fontSize = fontsize;
    },
  },
  actions: {},
  getters: {
    getlanguage(state) {
      return state.config.language;
    },
    gettheme(state) {
      return state.config.theme;
    },
    getfontsize(state) {
      return state.config.fontSize;
    },
  },
});
