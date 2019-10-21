import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from 'vue-resource'
Vue.use(VueResource);

// import VueMaterial from 'element-ui';
// import firebase from 'firebase'

// import { fb, db } from './views/firebase.js';

/* Vue material */
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// Vue.use(MdDatepicker)
Vue.use(VueMaterial)


import vuelidate from 'vuelidate'
Vue.use(vuelidate);


/* */
import Title from './components/reusable/Title.vue'
import Btn from './components/reusable/Btn.vue'
Vue.component('title-text', Title);
Vue.component('btn', Btn);

Vue.config.productionTip = false;
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
