<template>
  <div class="product">
    <h1>{{ product_value.subtitle  }}</h1>
    <p>{{ product_value.description  }}</p>
  </div>
</template>

<script>
export default{
    props: {
      product_value: {
        type: Object,
        default() {
          return {}
        }
      }
    }
}
</script>

<style scoped>

</style>