import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products
    },
    GET_PRODUCT(state) {
      return state.products[0]
    },
    GET_PRODUCTS_COUNT(state) {
      return state.products.length
    }
  },
  mutations: {
    SET_PRODUCTS: (state, productsList) =>
      { state.products = productsList },
    SET_PRODUCT: (state, product) =>
    { 
      state.products = []  
      state.products.push(product)
    }
    
  },
  actions: {
    async GET_PRODUCTS_FROM_API({commit}) {
      const productsList = await ((await fetch('https://sandbox.musement.com/api/v3/lists')).json());
      commit('SET_PRODUCTS', productsList)
    },
    async GET_PRODUCT_FROM_API({commit}, id) {
      console.log('aidamir');
      const product = await ((await fetch(`https://sandbox.musement.com/api/v3/lists/${id}`)).json());
      console.log('mugu');
      console.log(product);
      commit('SET_PRODUCT', product)
    }
  },
  modules: {
  }
})
