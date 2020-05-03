<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Download app stacks loaded with all your favourite clients and services along with code boilerplates.</p>
    <v-btn x-large color="success" dark>Get Started</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
p {
  margin: 10px 0 0;
  font-family: 'Lato', sans-serif;
  font-size: 1.2em;
}
h1 {
  font-size: 4em;
  letter-spacing: 10px;
  margin: 0px;
}
</style>
