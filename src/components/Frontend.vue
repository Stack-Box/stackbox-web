<template>
    <div class="Frontend">
        <div>
            <h1 class="pt-12">Choose your frontend . . .</h1>
        </div>
        <div class="md:w-custom mx-auto py-12 px-12 md:flex md:justify-between md:flex-wrap">
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
                    desc="Angular"
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
        font-family: 'Pathway Gothic One', sans-serif;
        font-size: max(4vw, 32px);
        letter-spacing: 0.25vw;
        text-align: center;
        margin-bottom: 2%;
        color: #ff00bd;
    }

    h2 {
        font-size: 2em;
        letter-spacing: 5px;
        margin: 0px;
        color: #ff00bd;
    }
    .choice{
        text-align: center;
    }
</style>

<style src="../assets/css/main.css"></style>
