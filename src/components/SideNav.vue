<template>
  <v-navigation-drawer expand-on-hover rail
                       :image="photo"
                       permanent
                       theme="dark"
  >
    <v-list>
      <v-list-item
        to="/account/login"
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        :title="credentials.firstname + ' ' + credentials.familyName"
        :subtitle="credentials.mail"
      />
    </v-list>
    <v-btn
      size="small"
      icon="mdi-logout"
      @click="logout"
    >
    </v-btn>
    <v-divider/>

    <v-list :lines="false" density="compact" nav>
      <v-list-item
        v-for="(item, i) in items" :key="i" :to="item.route"
        :value="item" active-color="primary"
      >
        <template #prepend>
          <v-icon :icon="item.icon"/>
        </template>
        <v-list-item-title v-text="item.text"/>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import account from "@/pages/account/store/account-store";

export default {
  data: () => ({
    photo: 'src/assets/pics/marijuana-g966935eb2_1920.jpg',

    items: [
      {text: 'Start', icon: 'mdi-home', route: '/'},
      {text: 'Account', icon: 'mdi-account', route: '/account/login'},
      {text: 'Shop', icon: 'mdi-domain', route: '/shop'},
      {text: 'Cart', icon: 'mdi-contacts', route: '/cart'},

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
