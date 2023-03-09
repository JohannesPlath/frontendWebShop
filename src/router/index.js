import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/WelcomePage.vue';
import Shop from '@/pages/shop/ShopPage.vue';
import CartPage from "@/pages/cart/CartPage";
import AccountLogin from "@/pages/account/AccountLogin.vue";
import AccountLayout from "@/pages/account/AccountLayout.vue";
import AccountRegister from "@/pages/account/AccountRegister.vue";
import AccountOverview from "@/pages/account/AccountOverview.vue";
import store from '@/store/index'
import Disclaimer from "@/pages/Disclaimer.vue";
import OrderPage from "@/pages/order/components/OrderPage.vue";

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
        name: 'AccountOverview',
      }, {
        path: 'register',
        component: AccountRegister,
        name: 'AccountRegister',
      },
      {
        path: 'login',
        component: AccountLogin,
        name: 'AccountLogin',
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
  },

  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer,
  },

  {
    path: '/order',
    name: 'Order',
    component: OrderPage,

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  let actualUser = store.getters["account/getCredentials"]
  let isUserId = actualUser && actualUser.userID
  if (to.name === 'AccountLogin') {
    next()
  } else if (to.name === 'Home') {
    next()
  } else if (to.name === 'AccountRegister' || to.name === 'Disclaimer') {
    next()
  } else if (isUserId) {
    next()
  } else {
    next({name: 'AccountLogin'}) // always put your redirect as the default case
  }
})


export default router;
