export default {
  setProducts(state, products) {
    state.all = products
  },

  decrementProductInventory(state, {id}) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}
