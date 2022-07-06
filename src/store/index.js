import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products
    },
    GET_PRODUCTS_COUNT(state) {
      return state.products.length()
    }
  },
  mutations: {
    SET_PRODUCTS: (state, productsList) =>
      { state.products = productsList }
    
  },
  actions: {
    async GET_PRODUCTS_FROM_API({commit}) {
      const productsList = await (( await fetch('https://sandbox.musement.com/api/v3/lists')).json());
      commit('SET_PRODUCTS', await productsList)
    }
  },
  modules: {
  }
})
