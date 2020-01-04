<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from './components/Login.vue'


export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  html,body{
    width:100%;
    margin:0;
  }
</style>
