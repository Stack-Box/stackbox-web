<template>
    <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <div class="page-1 page">
                <div id="app">
                    <img alt="Logo" width="25%" height="25%" src="./assets/logo.png">
                    <Home msg="STACKBOX"/>
                </div>
            </div>
            <div class="page-2 page" style="background-color: #303168">
                <Frontend/>
            </div>
            <div class="page-3 page" style="background-color: #C00088">
                <Backend/>
            </div>
            <div class="page-3 page" style="background-color: #0a0b19">
                <Clients/>
            </div>
        </div>
    </div>
</template>

<script>
    import Home from './components/pages/Home.vue'
    import Frontend from "./components/pages/Frontend";
    import Backend from "./components/pages/Backend";
    import Clients from "./components/pages/Clients";

    export default {
        name: 'App',
        components: {
            Home,
            Frontend,
            Backend,
            Clients,
        },
        data() {
            return {
                opts: {
                    start: 0,
                    dir: 'v',
                    duration: 500,
                }
            }
        },
        methods: {
            moveNext() {
                this.$refs.example.$fullpage.moveNext();
            }
        }
    }
</script>

<style scoped>
    .page{
        display: table;
    }
</style>
