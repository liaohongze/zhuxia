import Vue from "vue";
import VueRouter from "vue-router";
import getReceive from "../views/getReceive.vue";
import personal from "../views/Personal.vue";
import commission from "../views/Commission.vue";
import integral from "../views/Integral.vue";
import commissionRules from "../views/CommissionRules.vue";
import chongzhiIntegral from "../views/chongzhiIntegral.vue";

Vue.use(VueRouter)

const routes = [{
    path: "/getReceive",
    name: "getReceive",
    meta: {
    },
    component: getReceive
  },
  {
    path: "/personal",
    name: "personal",
    meta: {
    },
    component: personal
  },
  {
    path: "/commission",
    name: "commission",
    meta: {
    },
    component: commission
  },
  {
    path: "/integral",
    name: "integral",
    meta: {
    },
    component: integral
  },
  {
    path: "/commissionRules",
    name: "commissionRules",
    meta: {
    },
    component: commissionRules
  },
  {
    path: "/chongzhiIntegral",
    name: "chongzhiIntegral",
    meta: {
    },
    component: chongzhiIntegral
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
