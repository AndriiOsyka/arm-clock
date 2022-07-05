<template>
  <div class="carousel-item">
    <img 
    class="carousel-item__image"
    :src="require( '../assets/' + image )" alt="ITEM">
    <div class="btn-section">
      <button
      class="btn"
      :class="{'btn_active':firstImage}"
      @click="EmitSelector_one"></button>
      <button
      class="btn"
      :class="{'btn_active':secondImage}"
      @click="EmitSelector_two"></button>
      <button
      class="btn"
      :class="{'btn_active':thirdImage}"
      @click="EmitSelector_three"></button>
    </div>
  </div>
</template>

<script>
export default{
    props:{
        image: {
            type: String,
            default() {
                'firstImageCar.jpg'
            }
        }
    },
    methods:{
        EmitSelector_one(){
            this.$emit('EmitSelector', 0)
        },
        EmitSelector_two(){
            this.$emit('EmitSelector', 1)
        },
        EmitSelector_three(){
            this.$emit('EmitSelector', 2)
        }
    },
    computed:{
      firstImage: function(){
        return this.image === 'firstImageCar.jpg'?true:false
      },
      secondImage: function(){
        return this.image === 'secondImageCar.jpg'?true:false
      },
      thirdImage: function(){
        return this.image === 'thirdImageCar.jpg'?true:false
      },
    }
}
</script>

<style scoped>

  .carousel-item{
    position: relative;
  }
  .btn-section{
    position: absolute;
    bottom: 10%;
    left: 10%;
  }

  .btn{
    width: 40px;
    height: 10px;
    background: #fff;
    border: 1px solid #000;
    transform: skewX(-45deg);
    transition: .2s;
  }
  .btn_active{
    border: 1px solid #fff;
    background: rgb(150, 150, 150);
    width: 50px;
  }

  .btn:hover{
    cursor: pointer;
    border: 1px solid #fff;
    background: rgb(150, 150, 150);
  }
</style>