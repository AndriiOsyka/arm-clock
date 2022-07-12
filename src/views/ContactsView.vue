<template>
  <div class="contactsView">
    <h1>Contacts</h1>
    <contacts />
  </div>
</template>

<script>
  import Contacts from '../components/contacts.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      Contacts,
    },
    methods: {
      ...mapMutations(['SET_PRODUCTS'])
    },
    mounted() {
      this.SET_PRODUCTS([])
    }
  }
</script>
