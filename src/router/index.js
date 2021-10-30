import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';

Vue.use(Router);

const scrollBehavior = () => ({ x: 0, y: 0 });

export const routes = [
  {
    path: '/',
    component: App,
    children: [],
  },
];

const router = new Router({
  mode: 'history',
  base: '/insights/',
  scrollBehavior,
  routes,
});

export default router;
