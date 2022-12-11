<template>
  <div class="container">
    <product v-for="product in getAll" :key="product.id" :product="product" class="gallery-panel"
    @cartEvent="addToCart" >
    </product>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Product from '@/pages/shop/comonents/Product'

export default {
  components: {
    Product
  },
  mounted() {
    this.$store.dispatch('products/fetchAllProducts')
  },
  computed: {
    ...mapGetters('products', ['getAll']),
  },
  methods: {
    ...mapActions('cart', ['addProductToCart']),

    addToCart(product){
      console.log("product: ", product)
      this.addProductToCart(product)
    },


  }

}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>
