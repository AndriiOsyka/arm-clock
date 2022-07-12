<template>
  <div class="home">
    <home 
      :product_item="info_item"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '../components/home.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Home
  },
  props: {
    info_item: {
        type: Array,
        default() {
          return []
        }
      }
  },
  methods: {
      ...mapMutations(['SET_PRODUCTS'])
  },
  mounted() {
    this.SET_PRODUCTS([])
  }
}
</script>
