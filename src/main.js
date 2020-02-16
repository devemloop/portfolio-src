import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import '@/assets/styles/style.scss';

Vue.config.productionTip = false;

if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'es_CO');
  window.location.reload();
}
if (!localStorage.getItem('fontsize')) {
  localStorage.setItem('fontsize', 'normal');
}
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'default');
}


new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
