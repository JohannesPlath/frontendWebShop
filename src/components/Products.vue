<template>
  <div class="container">
    <product v-for="product in getAll" :key="product.id" :product="product" class="gallery-panel">
    </product>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Product from '@/components/Product'

export default {
  components: {
    Product
  },
  mounted() {
    this.$store.dispatch('products/fetchAllProducts')
  },
  computed: {
    /*getAllProducts() {
      return this.$store.state.products.all
    },*/
    ...mapGetters('products', ['getAll']), // TODO same result as above
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
