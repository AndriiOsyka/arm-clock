<template>
  <div class="carousel">
    <carousel-item
    :image="items[index_item]"
    @EmitSelector="CatchIndex" />
  </div>
</template>

<script>
import CarouselItem from './carousel-item.vue'

export default{
    components:{
        CarouselItem,
    },
    data() {
      return {
        items:['firstImageCar.jpg', 'secondImageCar.jpg', 'thirdImageCar.jpg'],
        index_item: 0 
      }
    },
    methods:{
        CatchIndex(data){
            this.index_item = data
        }
    }
}
</script>

<style scoped>
  .carousel{
    width: 100%;
    height: calc(100vh - 80px);
  }
</style>