<template>
  <v-navigation-drawer
    expand-on-hover rail
    :image="photo"
    permanent
    theme="dark"
  >
    <v-list>
      <v-list-item
        to="/account/login"
        :title="credentials.firstname + ' ' + credentials.familyName"
        :subtitle="credentials.email"
      />
    </v-list>
    <v-divider/>

    <v-list :lines="false" density="compact" nav>
      <v-list-item
        v-for="(item, i) in items" :key="i" :to="item.route"
        :value="item" active-color="primary" :title="item.text"
      >
        <template #prepend>
          <v-icon :icon="item.icon"/>
        </template>
        <v-list-item-title/>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list :lines="false" density="compact" nav>
        <v-list-item title="logout" active-color="primary" @click="logout()">
          <template #prepend>
            <v-icon icon="mdi-logout"/>
          </template>
          <v-list-item-title/>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";


export default {
  data: () => ({
    photo: 'src/assets/pics/2h-media-mQVlwFd3OPA-unsplash.jpg',

    items: [
      {text: 'Start', icon: 'mdi-home', route: '/'},
      {text: 'Account', icon: 'mdi-account', route: '/account/overview'},
      {text: 'Shop', icon: 'mdi-domain', route: '/shop'},
      {text: 'Cart', icon: 'mdi-cart', route: '/cart'},
      {text: 'Order', icon: 'mdi-post', route: '/order'},
    ],
  }),
  computed: {
    ...mapGetters('account', {
      credentials: 'getCredentials'
    }),
  },
  methods: {
    ...mapActions('account', ['logout']),
  },

}
</script>
