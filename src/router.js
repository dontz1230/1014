import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Fullmenu from "./views/Fullmenu.vue";
import Reservation from "./views/Reservation.vue";
import Msgboard from "./views/Msgboard.vue";
import Test from "./views/Test.vue";

 
Vue.use(Router);

export default new Router({
  scrollBehavior(from,to,savedPosition){
    return {x:0, y:0}
  },
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/menu",
      component: Fullmenu
    },
    {
      path: "/reservation",
      component: Reservation
    },
    {
      path: "/msgboard",
      component: Msgboard
    },
    {
      path:"/test",
      component: Test
    }
    
  ]
});
