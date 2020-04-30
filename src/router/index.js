import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ViewLayout',
    component: () => import('@/views/ViewLayout'),
    redirect: { name: 'FunnelsList' },
    children: [
      {
        path: '',
        name: 'Publication',
        component: () => import('@/views/Publication'),
      },
      {
        path: 'summary',
        name: 'Summary',
        component: () => import('@/views/Summary'),
      },
    ],
  },
  {
    path: '*',
    redirect: { name: 'Publication' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
