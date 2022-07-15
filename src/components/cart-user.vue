<template>
  <div class="cart-user">
    <h3>user email: {{ product.email }}</h3>
    <h3>user phone: {{ product.tel }}</h3>
    
  </div>
</template>

<script>
  export default {

    props: {
      product: {
        type: Object,
        default() {
            return {}
        }
      } 
    },
    methods: {

    }
  }
</script>

<style scoped>
  .cart-user {
    overflow: hidden;
    height: 150px;
    width: 350px;
    margin: 20px 30px;
    padding: 10px;
    border: 1px #fff solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
  .cart-user p {
    margin: 5px 0;
  }
</style>