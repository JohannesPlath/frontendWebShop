<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-toolbar color="secondary">
      <v-toolbar-title>Your Choose:</v-toolbar-title>
      <v-icon color="purple">
        mdi-cart
      </v-icon>

      <v-spacer />

      <!--      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-view-module"></v-btn>-->
    </v-toolbar>

    <v-list lines="two">
      <v-list-subheader inset>
        Cart:
      </v-list-subheader>

      <v-list-item
        v-for="item in cartProducts"
        :key="item.uuid"
        :title="item.title"
        :subtitle=" 'Price: ' + item.price "
      >
        <template #prepend>
          <v-avatar>
            <v-img
              :src="item.picUrl"
              alt="John"
            />
          </v-avatar>
        </template>

        <template #append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-plus"
            variant="text"
            @click="addOne(item)"
          />

          <v-btn
            color="grey-lighten-1"
            icon="mdi-minus"
            variant="text"
            @click="removeOne(item)"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-card>

  <v-timeline align="start" color="secondary">
    <v-timeline-item
      style="max-width: fit-content"
      :dot-color="itemFinalize.secColor"
      :icon="itemFinalize.icon"
      fill-dot>
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemFinalize.color}`]">
          Sum of your order:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p> Sum of products: {{quantity}}, total Price: {{getCartTotalPrice}}  eur </p>
<!--          <v-btn
            :color="itemFinalize.color"
            variant="outlined">
            Accept
          </v-btn>-->
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      style="max-width: fit-content"
      :dot-color="itemAddress.secColor"
      :icon="itemAddress.icon"
      fill-dot>
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemAddress.color}`]">
          Check your Address:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>your order will be send to:  </p>
          <v-btn
            :color="itemAddress.secColor"
            variant="outlined">
            Change
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      style="max-width: fit-content"
      :dot-color="itemBank.secColor"
      :icon="itemBank.icon"
      fill-dot>
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemBank.color}`]">
          Check your Payment:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>your order will payed by:   </p>
          <v-btn
            :color="itemBank.secColor"
            variant="outlined">
            Change
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      style="max-width: fit-content"
      :dot-color="itemFinalize.secColor"
      :icon="itemFinalize.icon"
      fill-dot>
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemFinalize.color}`]">
          Finalize:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>If everything is ok, push order</p>
          <v-btn
            :color="itemFinalize.secColor"
            variant="outlined">
            Order
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>


</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data: () => ({
    itemBank:
      {
        secColor: 'purple',
        color: 'secondary',
        icon: 'mdi-bank',
      },
    itemAddress:
      {
        secColor: 'purple',
        color: 'secondary',
        icon: 'mdi-call-split',
      },
    itemConclusion:
      {
        secColor: 'purple',
        color: 'secondary',
        icon: 'mdi-bank',
      },
    itemFinalize:
      {
        secColor: 'purple',
        color: 'secondary',
        icon: 'mdi-cart',
      },

  }),


  computed: {
    ...mapGetters('cart', ['cartProducts', 'quantity',  'getCartTotalPrice']),
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
