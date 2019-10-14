import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* Vue material */
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)

/* */
import Title from './components/reusable/Title.vue'
Vue.component('title-text', Title);

Vue.config.productionTip = false;
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
