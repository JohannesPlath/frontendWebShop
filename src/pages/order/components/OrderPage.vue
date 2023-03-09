<template>
  <div class="d-flex align-center flex-column">
    <div class="text-subtitle-2">Your order is:</div>

    <v-card width="400">
      <template v-slot:title>
        {{ quantity + " Products" }}
      </template>

      <template v-slot:subtitle>
        {{ "for " + getCartTotalPrice.toFixed(2) + "€ Bugs" }}

      </template>


      <template v-slot:text>
        {{ "you´ll like to pay with: " + payment }}
      </template>

    </v-card>

    <div class="mt-4 text-subtitle-2">Will send to:</div>

    <v-card width="400">
      <template v-slot:title>
        {{ this.credentials.firstname + " " + this.credentials.familyName }}
      </template>

      <template v-slot:subtitle>
        {{ this.credentials.address }}
        {{ this.credentials.zip + " " + this.credentials.city }}
      </template>


      <template v-slot:text>
        {{ this.credentials.country }}
      </template>

    </v-card>

    <div class="mt-4 text-subtitle-2">With markup</div>

    <v-card width="400">
      <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        This is content
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "OrderPage",

  data: () => ({}),

  computed: {
    ...mapGetters('account', {credentials: 'getCredentials'}),
    ...mapGetters('payment', {payment: 'getPayment'}),
    ...mapGetters('cart', ['quantity', 'getCartTotalPrice']),
  }
}
</script>

<style scoped>

</style>
