<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-toolbar color="secondary">


      <v-toolbar-title>Your Choose:</v-toolbar-title>

      <v-spacer></v-spacer>

<!--      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-view-module"></v-btn>-->
    </v-toolbar>

    <v-list lines="two">
      <v-list-subheader inset>Cart:</v-list-subheader>

      <v-list-item
        v-for="item in cartProducts"
        :key="item.product.uuid"
        :title="item.product.title"
        :subtitle="'count: ' + item.product.count + ', price: ' + item.product.price +' = '+ item.product.count * item.product.price + item.product.currency"

      >
        <template v-slot:prepend>
          <v-avatar color="grey-lighten-1">
            <v-icon color="white">mdi-folder</v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-information"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters('cart', ['cartProducts']),
  }
}
</script>
