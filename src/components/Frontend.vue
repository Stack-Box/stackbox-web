<template>
    <div class="Frontend">
        <h1>Choose a frontend framework</h1>
    </div>
</template>

<script>
    export default {
        name: 'Frontend',
        props: {
            msg: String
        }
    }

</script>
<style scoped>
    html,body{
        height: 100%;
    }
    h1 {
        font-size: 4em;
        letter-spacing: 10px;
        margin: 0px;
    }

    h2 {
        font-size: 2em;
        letter-spacing: 5px;
        margin: 0px;
        color: #ff00bd;
    }
</style>
