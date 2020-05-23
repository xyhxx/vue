import Vue from 'vue';
import VueRouter from 'vue-router';

const index = import('../components/pages/index.vue');
const type = import('../components/pages/type.vue');
const car = import('../components/pages/car.vue');
const personal = import('../components/pages/personal.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => index,
  },
  {
    path: '/type',
    name: 'type',
    component: () => type,
  },
  {
    path: '/car',
    name: 'car',
    component: () => car,
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => personal,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  sessionStorage.setItem('nowPath', to.name);
  next();
});

export default router;
