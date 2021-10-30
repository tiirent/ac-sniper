import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Feed from '@/components/pages/Feed/Feed';

Vue.use(Router);

const scrollBehavior = () => ({ x: 0, y: 0 });

export const routes = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: '/feed/',
        name: 'feed',
        component: Feed,
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes,
});

export default router;
