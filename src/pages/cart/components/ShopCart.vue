<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-toolbar color="secondary">


      <v-toolbar-title>Your Choose:</v-toolbar-title>
      <v-icon color="purple">mdi-cart</v-icon>

      <v-spacer></v-spacer>

<!--      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-view-module"></v-btn>-->
    </v-toolbar>

    <v-list lines="two">
      <v-list-subheader inset>Cart:</v-list-subheader>

      <v-list-item
        v-for="item in cartProducts"
        :key="item.uuid"
        :title="item.title"
        :subtitle=" 'Price: ' + item.price "

      >
        <template v-slot:prepend>
          <v-avatar>
            <v-img
              :src="item.picUrl"
              alt="John"       >
            </v-img>     </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-plus"
            variant="text"
            @click="addOne(item)"
          ></v-btn>

          <v-btn
            color="grey-lighten-1"
            icon="mdi-minus"
            variant="text"
            @click="removeOne(item)"
          ></v-btn>
        </template>

      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters('cart', ['cartProducts']),
  },
  methods:{
    ...mapActions('cart', ['addProductToCart', 'reduceProductFromCart']),

    addOne(product){
      console.log("addOne", product)
      this.addProductToCart(product)
    },

    removeOne(product){
      console.log("removeOne", product)
      this.reduceProductFromCart(product)
    },
  }
}
</script>
