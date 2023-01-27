import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/HomePage.vue';
import Shop from '@/pages/shop/ShopPage.vue';
import CartPage from "@/pages/cart/CartPage";
import AccountLogin from "@/pages/account/AccountLogin.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: AccountLogin,

  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
