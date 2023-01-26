import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const productsModule = {
  namespaced: true,
  state() {
    return {
      all: [],
      currentId: 0,
    }
  },
  getters: getters,
  actions: actions,
  mutations: mutations,
}

export default productsModule
