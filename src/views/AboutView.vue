<template>
  <div class="aboutView">
    <h1>This is an about page</h1>
    <about />
  </div>
</template>

<script>
  import About from '../components/about.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      About,
    },
    methods: {
      ...mapMutations(['SET_PRODUCTS'])
    },
    mounted() {
      this.SET_PRODUCTS([])
    }
  }
</script>
