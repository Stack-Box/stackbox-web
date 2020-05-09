<template>
    <div class="Frontend">
        <h1>Choose your frontend . . .</h1>
        <div class="md:w-custom mx-auto py-8 md:flex md:justify-between md:flex-wrap">
            <frontend-radio-button class="choice"
                    icon='vue'
                    desc="Vue"
                    v-model="activeName"
            ></frontend-radio-button>
            <frontend-radio-button class="choice"
                    name="React"
                    icon='react'
                    desc="React"
                    v-model="activeName"
            ></frontend-radio-button>
            <frontend-radio-button class="choice"
                    name="Angular"
                    icon='angular'
                    desc="React"
                    v-model="activeName"
            ></frontend-radio-button>
        </div>
    </div>
</template>

<script>
    import FrontendRadioButton from "./FrontendRadioButton";

    export default {
        name: 'Frontend',
        props: {
            msg: String
        },
        components: {
            FrontendRadioButton
        },
        data() {
            return {
                picked: 'Two',
                activeName: '',
            }
        }
    }

</script>
<style scoped>
    html,body{
        height: 100%;
    }
    h1 {
        font-size: 4vw;
        letter-spacing: 0.25vw;
        text-align: center;
        margin-bottom: 2%;
        color: #ff00bd;
    }

    h2 {
        font-size: 2vw;
        letter-spacing: 5px;
        margin: 0px;
        color: #ff00bd;
    }
    .choice{
        text-align: center;
    }
</style>

<style src="../assets/css/main.css"></style>
