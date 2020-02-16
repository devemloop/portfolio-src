import Vue from 'vue';
import VueRouter from 'vue-router';

import about from '@/pages/about.vue';
import config from '@/pages/config.vue';
import error from '@/pages/404.vue';
import friends from '@/pages/friends.vue';
import home from '@/pages/home.vue';
import skills from '@/pages/skills.vue';
import social from '@/pages/social.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home', meta: { title: 'home' } },
  { path: '/about', component: about, meta: { title: 'about' } },
  { path: '/config', component: config, meta: { title: 'config' } },
  { path: '/friends', component: friends, meta: { title: 'friends' } },
  { path: '/home', component: home, meta: { title: 'home' } },
  { path: '/skills', component: skills, meta: { title: 'skills' } },
  { path: '/social', component: social, meta: { title: 'social' } },
  { path: '/*', component: error, meta: { title: 'error' } },
];

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `<DevEm> _${to.meta.title}_`;
  }
  next();
});

export default router;
