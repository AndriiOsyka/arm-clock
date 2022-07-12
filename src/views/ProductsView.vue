<template>
  
  <div class="product-view">
    <h1></h1>
    <product
      :product_value="GET_PRODUCTS.find( product => String(product.id) === this.$route.params['id'])" />
  </div>

</template>

<script>

import Product from '../components/product.vue'
import { mapActions, mapGetters } from 'vuex'

export default {

    components: {
        Product
    },
    methods: {
      ...mapActions(['GET_PRODUCTS_FROM_API']),
    },
    computed: {
      ...mapGetters(['GET_PRODUCTS']),
    },
    async mounted() {
      await this.GET_PRODUCTS_FROM_API()
    }
}

</script>

<style scoped>
  .product {
    margin: 0 auto;
    padding: 100px 0;
  }
</style>