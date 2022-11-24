import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/HomePage.vue';
import Shop from '@/pages/Shop.vue';
import WelcomePage from '@/pages/WelcomePage.vue';
import HelloPage from "@/pages/HelloPage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: WelcomePage,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/hello',
    name:'Hello',
    component: HelloPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
