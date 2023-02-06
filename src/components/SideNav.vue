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
import account from "@/pages/account/store/account-store";


function logouttest() {
  return 'logout'
}

export default {
  data: () => ({
    photo: 'src/assets/pics/marijuana-g966935eb2_1920.jpg',

    items: [
      {text: 'Start', icon: 'mdi-home', route: '/'},
      {text: 'Account', icon: 'mdi-account', route: '/account/overview'},
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
