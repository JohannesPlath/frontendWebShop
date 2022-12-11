const getters = {
  getAll(state) {
    return state.all
  },
  getCurrentProduct(state) {
    return state.currentId
      ? state.products[state.currentId]
      : {}
  }
}

export default getters
