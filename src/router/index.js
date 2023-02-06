import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/HomePage.vue';
import Shop from '@/pages/shop/ShopPage.vue';
import CartPage from "@/pages/cart/CartPage";
import AccountLogin from "@/pages/account/AccountLogin.vue";
import AccountLayout from "@/pages/account/AccountLayout.vue";
import AccountRegister from "@/pages/account/AccountRegister.vue";
import AccountOverview from "@/pages/account/AccountOverview.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountLayout,
    children: [
      {
        path: 'overview',
        component: AccountOverview,
      }, {
        path: 'register',
        component: AccountRegister,
      },
      {
        path: 'login',
        component: AccountLogin,
      }],
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
