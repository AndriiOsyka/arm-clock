<template>
  <div class="wrap">
    <header-layout 
    class="wrap__header"/>
    <div class="body">
      <router-view
        :info_item="products"
      />
    </div>
    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from "./components/header-layout.vue"
import FooterLayout from "./components/footer-layout.vue"

export default{
  components: {
    HeaderLayout,
    FooterLayout,
  },
  data() {
    return {
      products:[
          {
            name: 'first_product',
            head: 'Limited Edition',
            text: 'G-SHOCK has teamed up with renowned international sports and lifestyle brand, New Era Cap Co. Inc., unveiling an all-new, limited edition DW560 mens timepiece. The new model, which is inspired by New Eras signature cap- the 59FIFTY® Fitted, boasts an understated yet impactful color scheme in classic shades of black and gold.',
            image: 'product_image1.jpg',
            widthImage: {
              width: '50%'
            },
            widthBlock: {
              width: '50%'
            },
            button_style: {
              background: '#000',
              border: '2px solid #fff',
              color: '#fff'
            },
            info_style: {
              height: '570px',
              background: '#000'

            },
            image_style: {
              height: '100%'
            },
            h1_style: {
              fontSize: '50px'
            },
            id: 0
          },
          {
            name: 'second_product',
            head: 'Digital Watches For Active And Fashionable Women Built With Standart G-Shock Technology',
            text: '',
            image: 'product_image2.jpg',
            widthImage: {
              width: '70%'
            },
            widthBlock: {
              width: '30%'
            },
            button_style: {
              background: 'rgb(207, 207, 207)',
              border: '2px solid #000',
              color: '#000'
            },
            info_style: {
              height: '520px',
              background: 'rgb(207, 207, 207)',
              color: '#000',
              flexDirection: 'row-reverse'
            },
            image_style: {
              height: '130%'
            },
            h1_style: {
              fontSize: '20px'
            },
            id: 1
          }
        ]
    }
  },
  methods: {
    catchCorrectProduct(data){
      this.correctProduct = data
    }  
  },
  computed: {
  }

}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000
}

.wrap__header {
  position: sticky;
  top: 0px;
  z-index: 999;
}

.wrap {
  max-width: 1200px;
  margin: 0 auto;
}

.body{
  min-height: 100vh;
  padding-bottom: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #0066ff;
}
</style>
