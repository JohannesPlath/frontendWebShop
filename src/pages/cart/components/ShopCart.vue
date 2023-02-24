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

    <v-card-text>
      <v-timeline side="end" color="secondary">
        <v-timeline-item
          style="max-width: fit-content"
          :dot-color="itemFinalize.secColor"
          :icon="itemFinalize.icon"
          fill-dot
        >

          <div>
            <h2 :class="['pt-1 headline font-weight-bold', `text-${itemFinalize.color}`]">
              Sum of your order:
            </h2>
            <div>
              <p> Sum of products: {{ quantity }} </p>
              <p>total Price: {{ getCartTotalPrice.toFixed(2) }} € </p>
            </div>
          </div>

        </v-timeline-item>

        <v-timeline-item
          style="max-width: fit-content"
          :dot-color="itemAddress.secColor"
          :icon="itemAddress.icon"
          fill-dot
        >
          <div>
            <h2 :class="['pt-1 headline font-weight-bold', `text-${itemFinalize.color}`]">
              Check your Address:
            </h2>
            <div>
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
            </div>
          </div>

        </v-timeline-item>

        <v-timeline-item
          style="max-width: fit-content"
          :dot-color="itemBank.secColor"
          :icon="itemBank.icon"
          fill-dot
        >

          <div>
            <h2 :class="['pt-1 headline font-weight-bold', `text-${itemFinalize.color}`]">
              Check your Payment:
            </h2>
            <div>
              <p>your order will payed by: </p>
              <p>{{ payment }} </p>
              <v-select
                v-model="paymentChoose"
                label="Select"
                :items="['PayPal', 'Bill', 'Klarna']"
                variant="solo"
                @update:menu="onPaymentSelect"
              ></v-select>
              <!--
                            <v-btn
                              :color="itemBank.secColor"
                              variant="outlined"
                              @click="setPayment"
                            >
                              Change
                            </v-btn>-->
            </div>
          </div>

        </v-timeline-item>

        <v-timeline-item
          style="max-width: fit-content"
          :dot-color="itemFinalize.secColor"
          :icon="itemFinalize.icon"
          fill-dot
        >

          <div>
            <h2 :class="['pt-1 headline font-weight-bold', `text-${itemFinalize.color}`]">
              Finalize:
            </h2>
            <div>
              <p>If everything is ok, push order</p>
              <v-btn
                :color="itemFinalize.secColor"
                variant="outlined"
                @click="finalizeOrder(credentials, payment)"
              >
                Order NOW
              </v-btn>
            </div>
          </div>

        </v-timeline-item>
      </v-timeline>
    </v-card-text>

  </v-card>

  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card>
      <v-card-text>
        {{ finalizeText }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="changePopUp()">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import paymentStore from "@/pages/cart/store/payment.store";


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
    paymentChoose: null,
    dialog: false,
    
  }),


  computed: {
    paymentStore() {
      return paymentStore // todo ggf löschen
    },
    ...mapGetters('cart', ['cartProducts', 'quantity', 'getCartTotalPrice', 'finalizeText', 'isFinalized']),
    ...mapGetters('account', {credentials: 'getCredentials'}),
    ...mapGetters('payment', {payment: 'getPayment'}),
  },

  mounted() {
    this.$store.dispatch('cart/fetchCartOfUser')
  },

  methods: {
    changePopUp() {
      this.dialog = false
      //this.setIsFinalisedFalse();
    },

    onPaymentSelect: function () {
      console.log('methods onPaymentSelect this.paymentChoose: ', this.paymentChoose)
      console.log('methods onPaymentSelect this.credentials: ', this.credentials.userID)
      if (this.paymentChoose == null) return
      this.setPayment({uuid: this.credentials.userID, payment: this.paymentChoose})
    },
    ...mapActions('cart', ['addProductToCart', 'reduceProductFromCart', 'finalize', 'setIsFinalisedFalseAtCartStore']),
    ...mapActions('payment', ['setPayment']),

    addOne(product) {
      //console.log("addOne", product)
      this.addProductToCart(product)
    },

    removeOne(product) {
      //console.log("removeOne", product)
      this.reduceProductFromCart(product)
    },

    finalizeOrder(credentials, payment) {
      console.log('methods finalizeOrder: ', credentials.userID, payment)
      console.log('methods finalizeOrder + isFinalized: ', this.isFinalized)
      this.finalize({credentials, payment})
    },
    setIsFinalisedFalse() {
      this.setIsFinalisedFalseAtCartStore()
    }

  },


}

</script>
