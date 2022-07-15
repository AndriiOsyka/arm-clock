<template>
  <div class="contacts">
    <cart-user 
      v-for="user of getUsers" 
      :key="user.email"
      :product="user"
    />
  </div>
</template>

<script>
import CartUser from './cart-user.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CartUser
  },
  computed: {
    ...mapGetters(['getUsers'])
  }
}
</script>

<style>
  .contacts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .contacts h1{
    margin: 30px auto;
  }
</style>