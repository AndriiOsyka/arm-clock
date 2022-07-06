<template>
  <div class="btn-layout">
    <button
      :style="btn_style"
      @click="emitClick"
      class="btn">
          
        {{text}}
        
      </button>
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
      emitClick() {
        this.$emit('click')
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