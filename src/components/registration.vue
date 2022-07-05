<template>
  <div class="registration">
    <div 
      :class="[ valid? 'style_valid': 'style_invalid', 'fields']"
      @click="check_input">
      <h1>Log In or Sign Up</h1>
      <input type="email"
      placeholder="Email: email@mail.com"
      v-model="email">
      <input type="tel"
      placeholder="Phone: +211 30 ** ***"
      v-model="tel">
      <btn-layout
      class="btn_registration"
      :text="'Sign Up'"
      :btn_style="{
        color: '#fff',
        background: '#0066ff',
        fontSize: '10px',
        width: '90px',
        height: '30px'
      }" />
    </div>
  </div>
</template>

<script>
import BtnLayout from './btn-layout.vue'
export default {
    components: {
        BtnLayout
    },
    data() {
        return {
            email: '',
            tel: '' ,
            valid: true,
        }
    },
    methods: {
        check_input () {
            const regex_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            const email_check = regex_email.test(this.email.toLowerCase());
            const regex_tel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            const tel_check = regex_tel.test(this.tel.toLowerCase());
            if(email_check === true && tel_check === true){
                this.valid = true
            }
            else{
                this.valid = false
            }
        }
    }
}

</script>

<style scoped>

  .registration {
    background: rgb(207, 207, 207);
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fields {
    height: 300px;
    width: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
  }

  .fields h1 {
    margin-bottom: 30px;
  }
  .fields input{
    border-radius: 5px;
    font-size: 20px;
    width: 75%;
    margin: 7px 0;
    padding: 3px 10px;
  }
  .btn_registration {
    position: absolute;
    bottom: 0;
    right: 10%;
    transform: translateY(50%);
  }

  .style_valid {
    border: 2px solid green
  }
  .style_invalid {
    border: 2px solid red
  }
</style>