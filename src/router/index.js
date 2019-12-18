import Vue from "vue";
import VueRouter from "vue-router";
import getReceive from "../views/getReceive.vue";
import personal from "../views/Personal.vue";

Vue.use(VueRouter)

const routes = [{
    path: "/getReceive",
    name: "getReceive",
    meta: {
      name: 'dfdfd'
    },
    component: getReceive
  },
  {
    path: "/personal",
    name: "personal",
    meta: {
      name: 'dfdfd'
    },
    component: personal
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
