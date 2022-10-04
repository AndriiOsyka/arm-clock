<template>
  <div class="registration">
    <div 
      :class="[ valid ? 'style_valid' : 'style_invalid', 'fields' ]">
      
      <slot v-if="status === 'disactive'">
        <div class="picture">
          <font-awesome-icon icon="fa-solid fa-check"
          class="icon" />
        </div>
      </slot>
      <slot v-else>
        <div class="main-content">
          <h1>Log In or Sign Up</h1>
          <input type="email"
            placeholder="Email: email@mail.com"
            v-model="userAccount.email"
             >
          <input type="tel"
            placeholder="Phone: +211 30 ** ***"
            v-model="userAccount.tel"
             >
          </div>
      </slot>
      <btn-layout
      class="btn_registration"
      :text="status !='disactive' ? 'Sign Up' : 'AddMore'"
      :btn_style="{
        color: '#fff',
        background: '#0066ff',
        fontSize: '10px',
        width: '90px',
        height: '30px'
      }"
      @click="btnClick" />
    </div>
  </div>
</template>

<script>
import BtnLayout from './btn-layout.vue'
import { mapMutations } from 'vuex'
export default {
    components: {
        BtnLayout,
    },
    data() {
        return {
            userAccount: {
              email: '',
              tel: ''
            },
            status: 'active',
            valid: false,
        }
    },
    watch: {
      userAccount: {
        handler (val) {
          this.check_input()
        },
        deep: true
      }
    },
    methods: {
      ...mapMutations(['SET_USER']),
      btnClick() {
        if(this.status === 'active')
        {
          if(this.valid) {
            this.getDisactive()
          }
        }
        else {
          this.getActive()
        }
      },
      getDisactive() {
        this.SET_USER(this.userAccount)
        this.status = 'disactive'
        this.valid = false
      },
      getActive() {
        this.status = 'active'
      },
      check_input () {
        if(this.userAccount.email && this.userAccount.tel)
        {
          const regex_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const email_check = regex_email.test(this.userAccount.email.toLowerCase());
        const regex_tel = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
        const tel_check = regex_tel.test(this.userAccount.tel.toLowerCase());
        if (email_check && tel_check){
          this.valid = true
        }
        else {
          this.valid = false
        }
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

  .registration .icon {
    height: 50%;
    color: green;
  }
</style>