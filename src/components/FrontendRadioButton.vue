<template>
    <div class="md:w-64 bg-white rounded-lg shadow-md p-6 hover:cursor-pointer mb-8 hover:bg-pink-lightest focus:outline-none focus:shadow-outline-green" :class="{'bg-pink-lightest bg-pink' : this.activeName === this.name}" tabindex="0" @click="updateActiveName" @keydown.space="updateActiveName">
        <div class="flex justify-between items-center mb-3">
            <div v-if="this.activeName === this.name">
                <svg class="w-6 h-6" width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="checkmark-outline" fill-rule="nonzero">
                            <path d="M31.1442786,171.840796 C5.2779518,146.858262 -5.09578082,109.862896 4.01023318,75.0738981 C13.1162472,40.2848999 40.2848999,13.1162472 75.0738981,4.01023318 C109.862896,-5.09578082 146.858262,5.2779518 171.840796,31.1442786 C209.549474,70.1869539 209.010186,132.247241 170.628714,170.628714 C132.247241,209.010186 70.1869539,209.549474 31.1442786,171.840796 Z" id="Shape" fill="#f66d9b"></path>
                            <polygon id="Path" fill="#B10084" points="66.6666667 89.4527363 89.5522388 112.437811 132.338308 69.6517413 146.268657 83.7810945 89.5522388 140.298507 52.7363184 103.482587 66.6666667 89.3532338"></polygon>
                        </g>
                    </g>
                </svg>
            </div>
        </div>

        <img width="25%" height="25%" :src="getImgUrl(icon)" v-bind:alt="icon">

        <div>
            <span class="text-xl font-semibold text-blue-darker">{{ this.desc }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'activeName',
            event: 'onUpdateName'
        },
        props: ['name','icon', 'desc', 'activeName'],
        methods: {
            updateActiveName() {
                this.$emit('onUpdateName', this.name)
            },
            getImgUrl(icon) {
                var images = require.context('../assets/', false, /\.png$/)
                return images('./' + icon + ".png")
            }
        }
    }

</script>

