import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Fullmenu from "./views/Fullmenu.vue";
import Reservation from "./views/Reservation.vue";
import Msgboard from "./views/Msgboard.vue";

 
Vue.use(Router);

export default new Router({
  scrollBehavior(from,to,savedPosition){
    return {x:0, y:0}
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/menu",
      name: "fullmenu",
      component: Fullmenu
    },
    {
      path: "/reservation",
      name: "reservation",
      component: Reservation
    },
    {
      path: "/msgboard",
      name: "msgboard",
      component: Msgboard
    }
    
  ]
});
