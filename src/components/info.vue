<template>
  <div 
    class="info"
      :style="item.info_style">

      <div class="image-block"
        :style="item.widthImage">

          <img 
            :src="require( '../assets/' + item.image )" 
            alt="ImgGoods"
            :style="item.image_style"
          >
      </div>

    <div class="info-block"
      :style="item.widthBlock">

      <h1
        :style="item.h1_style">

        {{ item.head }}
      </h1>
        <div 
          class="block">
        </div>
        <p>
          {{ item.text }}
        </p>
        <btn-layout 
          class="button-in-block"
          :text="'read more'"
          :product_name="item.name"
          :btn_style="item.button_style"
          @click="catchCorrectProduct"
     />
    </div>
  </div>
</template>

<script>
import BtnLayout from "./btn-layout.vue"
export default{
    components: {
      BtnLayout
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      catchCorrectProduct() {
        this.$router.push({ path: `/products/${this.item.id}` })    
      }
    }

}

</script>

<style scoped>
  
  .info {
    padding: 0 40px;
    display: flex;
    color: #fff;
  }

  .info-block {
    text-align: left;
    padding: 50px 20px;
  }

  .info-block h1 {
    margin-bottom: 20px;
    font-size: 50px;
  }

  .image-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-in-block {
    margin-top: 20px;
  }

  .info-block .block {
    width: 130px;
    height: 13px;
    background: #0066ff;
    margin-left: -20px;
    margin-bottom: 30px;
  }

</style>