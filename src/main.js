import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.scss'
import './assets/css/main.scss'
import Buefy from 'buefy'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
import feather from 'vue-icon'
import ForkeMeOnGithub from 'fork-me-on-github-vue';
import PrettyCheckbox from 'pretty-checkbox-vue';


Vue.config.productionTip = false

Vue.use(VueFullpage)
Vue.use(Buefy)
Vue.use(feather, 'v-icon')
Vue.use(ForkeMeOnGithub);
Vue.use(PrettyCheckbox);


new Vue({
  render: h => h(App),
}).$mount('#app')
