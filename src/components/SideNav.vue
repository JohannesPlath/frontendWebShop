<template>
  <v-navigation-drawer expand-on-hover rail
                       image="https://cdn.pixabay.com/photo/2019/09/21/15/40/marijuana-4494190_960_720.jpg"
                       permanent
                       theme="dark">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
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
export default {
  data: () => ({
    items: [
      {text: 'Start', icon: 'mdi-home', route: '/'},
      {text: 'Team', icon: 'mdi-account-group', route: '/shop'},
      {text: 'Meine Aufgaben', icon: 'mdi-account', route: '/about'},
      {text: 'Shop', icon: 'mdi-domain', route: '/shop'},
      {text: 'Kontakt', icon: 'mdi-contacts', route: '/'}
    ]
  }),
}
</script>
