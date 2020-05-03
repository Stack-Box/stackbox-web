<template>
    <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts" ref="example">
            <div class="page-1 page">
                <div id="app">
                    <img alt="Logo" width="25%" height="25%" src="./assets/logo.png">
                    <Home msg="STACKBOX"/>
                </div>
            </div>
            <div class="page-2 page" style="background-color: #303168"></div>
            <div class="page-3 page" style="background-color: #ff00bd"></div>
        </div>
    </div>
</template>

<script>
    import Home from './components/Home.vue'
    //import Frontend from './components/Frontend.vue'

    export default {
        name: 'App',
        components: {
            Home,
            //Frontend
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
