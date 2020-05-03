<template>
  <div id="app">
    <img alt="Logo" width="25%" height="25%" src="./assets/logo.png">
    <Home msg="STACKBOX"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
