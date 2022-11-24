import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/Home.vue';
import Shop from '@/pages/Shop.vue';
import Company from '@/pages/Company.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: Company,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
