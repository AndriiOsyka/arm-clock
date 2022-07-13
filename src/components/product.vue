<template>
  <div class="product">
    <h1>{{ GET_PRODUCT.subtitle  }}</h1>
    <p>{{ GET_PRODUCT.description  }}</p>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default{
    props: {
      product_value: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      ...mapActions(['GET_PRODUCT_FROM_API']),
      ...mapMutations(['SET_PRODUCTS'])
    },
    computed: {
      ...mapGetters(['GET_PRODUCT'])
    },
    async created() {
      this.SET_PRODUCTS([])
      this.GET_PRODUCT_FROM_API(Number(this.$route.params[ 'id' ])) 
    }
}
</script>

<style scoped>

</style>