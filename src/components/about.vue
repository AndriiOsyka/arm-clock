<template>
  <div class="about">
    <h1>About</h1>
    <div class="icons">
      <cart 
        v-for="product of GET_PRODUCTS" 
        :key="product.cover_image_url"
        :product="product"/>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import Cart from './cart.vue'
  export default {
    components: {
      Cart
    },
    methods: {
      ...mapActions(['GET_PRODUCTS_FROM_API']),
      ...mapMutations(['SET_PRODUCTS'])
    },
    computed: {
      ...mapGetters(['GET_PRODUCTS']),
    },
    async created() {
      await this.GET_PRODUCTS_FROM_API()
    }
  }

</script>

<style>
  .about h1{
    margin: 30px auto;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>