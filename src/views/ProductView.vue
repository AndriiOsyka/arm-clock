<template>
  
  <div class="product-view">
    <h1>This is ProductView</h1>
    <p>When all products will be declarate in vuex i will select product with this id: {{ this.$route.params['id'] }}</p>
  </div>

</template>

<script>

import Product from '../components/product.vue'

export default {
    components: {
        Product
    }
}

</script>

<style scoped>
  .product {
    margin: 0 auto;
    padding: 100px 0;
  }
</style>