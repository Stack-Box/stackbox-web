<template>
    <div class="Clients">
        <div>
            <h1 class="pt-12">Choose your clients . . .</h1>
        </div>
        <div class="md:w-auto mx-32 py-12 px-32 md:flex md:justify-between md:flex-wrap">
        <p-check class="p-default p-curve p-thick p-smooth h2" color="warning-o">MySQL</p-check>
        <p-check class="p-default p-curve p-thick p-smooth h2" color="warning-o">Elasticsearch</p-check>
        <p-check class="p-default p-curve p-thick p-smooth h2" color="warning-o">Kafka</p-check>
        </div>
        <div class="md:w-auto mx-32 py-12 px-32 md:flex md:justify-between md:flex-wrap">
            <p-check class="p-default p-curve p-thick p-smooth h2" color="warning-o">Nginx</p-check>
            <p-check class="p-default p-curve p-thick p-smooth h2" color="warning-o">S3</p-check>
            <p-check class="p-default p-curve p-thick p-smooth h2" color="warning-o">Kibana</p-check>
        </div>
        <div id="footer"  style="margin-top: 50px">
            <v-icon v-animate="{value: 'fadeInDown'}" style="color: #ff00bd" name="chevron-down"></v-icon>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Clients',
        props: {
            msg: String
        },
        components: {
        },
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

    .h2 {
        font-size: 2vw;
        margin: 0px;
        color: #fff9f2;
    }
    .choice{
        text-align: center;
    }
</style>

<style src="../../assets/css/main.css"></style>
