<template>
    <div class="Home">
        <div class="ribbon">
            <a target="_blank" href="https://github.com/Stack-Box/StackBox">Fork me on GitHub</a>
        </div>
        <h1>{{ msg }}</h1>
        <p class="p-4">Download app stacks loaded with all your favourite clients and services along with code boilerplates.</p>
        <div id="footer"  style="margin-top: 50px">
            <h2 v-animate="{value: 'fadeInDown', delay: 5}">Get Started</h2>
            <v-icon style="color: white" name="chevron-down"></v-icon>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data: function () {
            return {
                baseClass: 'v-icon',
                ribbonOptions: {
                    text: 'Fork me on GitHub',
                    linkUrl: "hi",
                    fixed: true,
                }
            }
        }
    }

</script>
<style scoped>
  html,body{
    height: 100%;
  }
    h1 {
        font-size: 4em;
        letter-spacing: 1vw;
        margin: 0px;
    }

    h2 {
        font-size: 2em;
        letter-spacing: 0.5vw;
        margin: 0px;
        color: #ff00bd;
    }
  #footer {
      position:absolute;
      bottom:0;
      width:100%;
      margin-top: 10%;
      margin-bottom: 20px;
  }
  .ribbon {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 200px;
      height: 200px;
      overflow: hidden;
      z-index: 99999;
  }
  .ribbon a {
      display: inline-block;
      width: 200px;
      overflow: hidden;
      padding: 6px 0px;
      text-align: center;
      transform: rotate(45deg);
      text-decoration: none;
      color: rgb(255, 255, 255);
      position: inherit;
      top: 45px;
      right: -40px;
      border-width: 2px 0px;
      border-style: dotted;
      border-color: rgba(255, 0, 189, 0.7);
      font: 700 13px "Helvetica Neue", Helvetica, Arial, sans-serif;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 3px 0px;
      background-color: #303168;
  }
</style>
