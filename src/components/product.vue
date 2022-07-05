<template>
  <div class="product">
    <h1>{{ product.name }}</h1>
    <p>{{ product.text }}</p>
  </div>
</template>

<script>
export default{
    props: {
      product: {
        type: Object,
        default() {
            return 'XZ'
        }
      }
    }
}
</script>

<style scoped>

</style>