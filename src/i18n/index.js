import Vue from 'vue';
import Vuei18n from 'vue-i18n';

const EN = require('@/assets/databases/dictionaries/en_US.json');
const ES = require('@/assets/databases/dictionaries/es_CO.json');
const FR = require('@/assets/databases/dictionaries/fr_FR.json');

Vue.use(Vuei18n);

const local = localStorage.getItem('language') === null ? 'en_CO' : localStorage.getItem('language');

const i18n = new Vuei18n({
  locale: local,
  fallbackLocale: 'en_US',
  messages: {
    en_US: EN,
    es_CO: ES,
    fr_FR: FR,
  },
});

if (module.hot) {
  module.hot.accept(
    [
      '@/assets/databases/dictionaries/en_US.json',
      '@/assets/databases/dictionaries/es_CO.json',
      '@/assets/databases/dictionaries/fr_FR.json',
    ],
    () => {
      i18n.setLocaleMessage('en_US', EN);
      i18n.setLocaleMessage('es_CO', ES);
      i18n.setLocaleMessage('fr_FR', FR);
    },
  );
}

export default i18n;
