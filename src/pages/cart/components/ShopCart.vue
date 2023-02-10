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

      <v-spacer/>
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
        :subtitle=" 'Price: ' + item.price + ' €, Amount: ' + item.count "
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
            @click="addOne(item.product)"
          />

          <v-btn
            color="grey-lighten-1"
            icon="mdi-minus"
            variant="text"
            @click="removeOne(item.product)"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-card>

  <v-timeline side="end" color="secondary">
    <v-timeline-item
      style="max-width: fit-content"
      :dot-color="itemFinalize.secColor"
      :icon="itemFinalize.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemFinalize.color}`]">
          Sum of your order:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p> Sum of products: {{ quantity }} </p>
          <p>total Price: {{ getCartTotalPrice.toFixed(2) }} € </p>
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
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemAddress.color}`]">
          Check your Address:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <h3>your order will be send to: </h3>
          <p> {{ credentials.firstname }} {{ credentials.familyName }} </p>
          <p> {{ credentials.address }} </p>
          <p> {{ credentials.zip }} {{ credentials.city }} </p>
          <p> {{ credentials.state }} </p>

          <v-btn
            :color="itemAddress.secColor"
            variant="outlined"
            to="/account/overview"
          >
            Change
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      style="max-width: fit-content"
      :dot-color="itemBank.secColor"
      :icon="itemBank.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemBank.color}`]">
          Check your Payment:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>your order will payed by: </p>
          <p>{{ payment.name }} </p>
          <v-btn
            :color="itemBank.secColor"
            variant="outlined"
          >
            Change
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      style="max-width: fit-content"
      :dot-color="itemFinalize.secColor"
      :icon="itemFinalize.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${itemFinalize.color}`]">
          Finalize:
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>If everything is ok, push order</p>
          <v-btn
            :color="itemFinalize.secColor"
            variant="outlined"
            @click=finalizeOrder(cartProducts,credentials,payment)
          >
            Order NOW

          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import payment from "@/store/modules/payment/payment";


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
    ...mapGetters('cart', ['cartProducts', 'quantity', 'getCartTotalPrice']),
    ...mapGetters('account', {credentials: 'getCredentials'}),
    ...mapGetters('payment', {payment: 'getPayment'}),
  },

  mounted() {
    this.$store.dispatch('cart/fetchCartOfUser')
  },

  methods: {
    payment() {
      return payment
    },

    ...mapActions('cart', ['addProductToCart', 'reduceProductFromCart', 'finalize']),

    addOne(product) {
      //console.log("addOne", product)
      this.addProductToCart(product)
    },

    removeOne(product) {
      //console.log("removeOne", product)
      this.reduceProductFromCart(product)
    },

    finalizeOrder(cartProducts, credentials, payment) {
      console.log('methods finalizeOrder: ', cartProducts, credentials, payment)
      this.finalize(cartProducts, credentials, payment)
    }
  },


}

</script>
