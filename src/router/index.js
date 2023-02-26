import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/WelcomePage.vue';
import Shop from '@/pages/shop/ShopPage.vue';
import CartPage from "@/pages/cart/CartPage";
import AccountLogin from "@/pages/account/AccountLogin.vue";
import AccountLayout from "@/pages/account/AccountLayout.vue";
import AccountRegister from "@/pages/account/AccountRegister.vue";
import AccountOverview from "@/pages/account/AccountOverview.vue";
import store from '@/store/index'
import account from "@/pages/account/store/account.store";
import {mapGetters} from "vuex";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
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
        meta: {
          requiresAuth: true
        },
      },
      {
        path: 'login',
        component: AccountLogin,
        name: 'AccountLogin',
        meta: {
          requiresAuth: true
        },
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

/*router.beforeEach((to, from, next) => {
    console.log('store : ', store.account/!*.credential?.userID*!/)
    let isUserId = store.account && store.account.userID
    console.log('@ index-js : UserId ', isUserId)
    if (isUserId || to.name === 'AccountLogin' || to.name === 'Home') {
      next()
    } else {
      next({name: 'AccountRegister'})
    }
    //next()
  }
);*/

let actualUser = store.getters["account/getCredentials"]
router.beforeEach((to, from, next) => {
  console.log('store : ', store.account)// !*.credential?.userID*!/)
  console.log('actualUser : ', actualUser)// !*.credential?.userID*!/)
  let isUserId = store.account && store.account.userID
  console.log('@ index-js : UserId ', isUserId)
  if (to.name === 'AccountLogin') {
    next() // login route is always  okay (we could use the requires auth flag below). prevent a redirect loop
  } else if (to.name === 'Home') {
    next()
  } else if (to.name === 'AccountRegister') {
    next()
  } else if (to.meta && to.meta.requiresAuth === false) {
    next() // requires auth is explicitly set to false
  } else if (store.getters.isLoggedIn) {
    next() // i'm logged in. carry on
  } else {
    next({name: 'AccountLogin'}) // always put your redirect as the default case
  }
})

export default router;
