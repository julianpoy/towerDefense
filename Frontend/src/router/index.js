import Vue from 'vue';
import Router from 'vue-router';

import MainMenu from '@/components/MainMenu';
import Game from '@/components/Game';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu,
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
    },
  ],
});