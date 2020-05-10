<template>
    <div class="Backend">
        <div>
            <h1 class="pt-12">Choose your backend . . .</h1>
        </div>
        <div class="md:w-1/4 mx-auto py-12 px-12 md:flex md:justify-between md:flex-wrap">
            <radio-button-large class="choice"
                                name="Flask"
                                icon='flask'
                                desc="Flask"
                                v-model="activeName"
            ></radio-button-large>
            <radio-button-large class="choice"
                                name="Rails"
                                icon='rails'
                                desc="Rails"
                                v-model="activeName"
            ></radio-button-large>
        </div>
        <div id="footer"  style="margin-top: 50px">
            <v-icon v-animate="{value: 'fadeInDown'}" style="color: #0A0B19" name="chevron-down"></v-icon>
        </div>
    </div>
</template>

<script>
    import RadioButtonLarge from "../RadioButtonLarge";

    export default {
        name: 'Frontend',
        props: {
            msg: String
        },
        components: {
            RadioButtonLarge
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
        color: #0A0B19;
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

<style src="../../assets/css/main.css"></style>
