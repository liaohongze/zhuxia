import Vue from "vue";
import VueRouter from "vue-router";
import getReceive from "../views/getReceive";
import personal from "../views/Personal";
import commission from "../views/Commission";
import integral from "../views/Integral";
import commissionRules from "../views/CommissionRules";
import chongzhiIntegral from "../views/chongzhiIntegral";
import RechargeRecord from "../views/RechargeRecord";
import InvitationList from "../views/InvitationList";
import WelfareCentre from "../views/WelfareCentre";

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
  {
    path: "/RechargeRecord",
    name: "RechargeRecord",
    meta: {
    },
    component: RechargeRecord
  },
  {
    path: "/InvitationList",
    name: "InvitationList",
    meta: {
    },
    component: InvitationList
  },
  {
    path: "/WelfareCentre",
    name: "WelfareCentre",
    meta: {
    },
    component: WelfareCentre
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
