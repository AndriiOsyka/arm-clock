<template>
  <div class="home">
    <carousel />
    <info
    :item="info_item[0]"
    @emitCorrectProduct="emitCorrectProduct" />
    <info
    :item="info_item[1]"
    @emitCorrectProduct="emitCorrectProduct" />
    <video-layout />
    <registration />
  </div>
</template>

<script>
import Carousel from './carousel.vue'
import Info from './info.vue'
import VideoLayout from './video-layout.vue'
import Registration from './registration.vue'

export default{
    components:{
        Carousel,
        Info,
        VideoLayout,
        Registration
    },
    props: {
      info_item: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
        emitCorrectProduct(data) {
            this.$emit('emitCorrectProduct', data)
        }
    }
}
</script>

<style>
</style>