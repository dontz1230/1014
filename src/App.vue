<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/Header.vue'
import myFooter from './components/Footer.vue'

export default {

  components:{
    myHeader,
    myFooter
  }
  
}
</script>

<style lang="scss">
  @import './assets/style.scss';
</style>