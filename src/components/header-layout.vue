<template>
  <div class="header">
    <header class="main-head">
      <div class="main-head__logo">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <div class="center">
          <div class="center-left"></div>
          <div class="center-right"></div>
          <div class="center-left"></div>
          <div class="center-right"></div>
          <div class="center-left"></div>
          <div class="center-right"></div>
        </div>
      <nav class="main-head__navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contacts">Contacts</router-link>
      </nav>
    </header>
  </div>
</template>

<script>

</script>

<style scoped>
  .header {
    background: #000;
    padding: 1px 30px;
  }

  .main-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .main-head__navigation a{
    margin: 0 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    transition: .2s;
  }

  .main-head__logo img{
    width: 40px;
  }

  .main-head__navigation a:hover{
    color: #0066ff
  }

  .center-left {
    height: 70px;
    width: 2px;
    background: #0066ff;
    transform: skewX(-45deg);
  }

  .center-right {
    height: 70px;
    width: 2px;
    background: #fff;
    transform: skewX(22deg);
  }

  .center {
    display: flex;
  }
</style>