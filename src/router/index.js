import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Feed from '@/components/pages/Feed/Feed';
import TrackedItems from '@/components/pages/TrackedItems/TrackedItems';

Vue.use(Router);

const scrollBehavior = () => ({ x: 0, y: 0 });

export const routes = [
  {
    path: "/",
    component: App,
    redirect: '/feed',
    children: [
      {
        path: '/feed',
        name: 'feed',
        component: Feed,
      },
      {
        path: '/items',
        name: 'item',
        component: TrackedItems,
      },
    ],
  },
  {
    path: '*',
    redirect: '/feed',
  },
];

const router = new Router({
  mode: 'history',
  base: '/ac-sniper/',
  scrollBehavior,
  routes,
});

export default router;
