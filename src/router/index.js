import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/HomePage.vue';
import Shop from '@/pages/shop/ShopPage.vue';
import AccountPage from '@/pages/AccountPage.vue';
import CartPage from "@/pages/CartPage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountPage,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/cart',
    name:'Cart',
    component: CartPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
