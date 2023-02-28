<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="product.picUrl"
      height="200px"
      cover
    />

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.price }} €
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
        @click="addToCart()"
      >
        add to cart
      </v-btn>


      <v-btn
        color="orange-lighten-2"
        variant="text"
        @click="show = !show"
      >
        Explore
      </v-btn>

      <v-spacer/>


      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      />
    </v-card-actions>

    <v-expand-transition
      color="orange-lighten-2"
      variant="text"
    >
      <div v-show="show">
        <v-divider/>
        <v-card-text>
          {{ product.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>


import {ProductModel} from "@/pages/shop/store/models/product-model";

export default {
  props: {
    product: ProductModel,
  },
  data: () => ({
    show: false,

  }),
  methods: {
    addToCart() {
      this.$emit("cartEvent", this.product)
    }
  }
}
</script>
