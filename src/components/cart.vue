<template>
  <div class="cart">
    <h3>{{ product.title }}</h3>
    <p>{{ product.subtitle }}</p>
    <img :src="product.cover_image_url" alt="product">
    <btn-layout
      class="btn"
      :text="'read more'"
      :btn_style=" {
        color: '#fff',
        background: '#0066ff',
        fontSize: '20px',
        width: '150px',
        height: '50px'
      } "
      @click="goToCorrectProduct" />
  </div>
</template>

<script>
  import BtnLayout from './btn-layout.vue'
  export default {
    components: {
      BtnLayout
    },
    props: {
      product: {
        type: Object,
        default() {
            return {}
        }
      } 
    },
    methods: {
      goToCorrectProduct() {
        this.$router.push({ path: `/product/${this.product.id}` })
      }
    }
  }
</script>

<style scoped>
  .cart {
    overflow: hidden;
    height: 400px;
    width: 250px;
    margin: 20px 30px;
    padding: 10px;
    border: 1px #fff solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    position: relative
  }
  .cart img {
    width: 100%;
  }
  .cart p {
    margin: 5px 0;
  }
  .cart .btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>