<template>
  <div class="btn-layout">
    <router-link 
    to="/product">
        <button
        :style="btn_style"
        @click="emitCorrectProduct"
        class="btn">
          {{text}}
        </button>
    </router-link>
  </div>
</template>

<script>

export default{
    props:{
        btn_style: {
          type: Object,
          default() {
            return {
              background: '#000',
              border: '2px solid #fff'
            }
          }
        },
        text: {
            type: String,
            default(){
              return 'TEXT'
            }
        },
        product_name: {
          type: String,
          default() {
            return ''
          }
        }
    },
    methods:{
      emitCorrectProduct() {
        this.$emit('emitCorrectProduct', this.product_name)
      }
    }
}

</script>

<style scoped>
  
  .btn-layout .btn{
    width: 150px;
    height: 50px;
    border: 1px solid #000;
    transition: .5s;
    }
  
  .btn-layout .btn:hover{
    cursor: pointer;
    transform: scale(1.1);
  } 


</style>