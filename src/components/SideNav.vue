<template>
  <v-navigation-drawer expand-on-hover rail
                       :image="photo"
                       permanent
                       theme="dark"
  >
    <v-list>
      <v-list-item
        to="/account/overview"
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        :title="credentials.familyName"
        :subtitle="credentials.mail"
      />
    </v-list>

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
import {mapGetters} from "vuex";

export default {
  data: () => ({
    photo: 'src/assets/pics/marijuana-g966935eb2_1920.jpg',

    items: [
      {text: 'Start', icon: 'mdi-home', route: '/'},
      {text: 'Account', icon: 'mdi-account', route: '/account'},
      {text: 'Shop', icon: 'mdi-domain', route: '/shop'},
      {text: 'Cart', icon: 'mdi-contacts', route: '/cart'}
    ],
  }),
  computed: {
    ...mapGetters('account', {
      credentials: 'getCredentials'
    })
  }
}
</script>
