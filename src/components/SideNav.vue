<template>
  <v-navigation-drawer expand-on-hover rail
                       image="https://cdn.pixabay.com/photo/2019/09/21/15/40/marijuana-4494190_960_720.jpg"
                       permanent
                       theme="dark">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        :title="credentials.name"
        :subtitle="credentials.mail"
      />
    </v-list>

    <v-divider />

    <v-list :lines="false" density="compact" nav>
      <v-list-item
        v-for="(item, i) in items" :key="i" :to="item.route"
        :value="item" active-color="primary"
      >
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title v-text="item.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data: () => ({
    items: [
      {text: 'Start', icon: 'mdi-home', route: '/'},
      {text: 'Account', icon: 'mdi-account', route: '/account'},
      {text: 'Shop', icon: 'mdi-domain', route: '/shop'},
      {text: 'Kontakt', icon: 'mdi-contacts', route: '/'}
    ],
  }),
  computed: {
    ...mapGetters('account', {
      credentials: 'getCredentials'
    })
  }
}
</script>
