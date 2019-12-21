import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import "./assets/less/index.less";
import Vant from 'vant';
import {UrlSearch} from './assets/untils/index'  //引用截取地址栏参数
import 'vant/lib/index.css';
import api from './api'

let Request = new UrlSearch(); //方法实例化
Vue.prototype.$api = api
Vue.config.productionTip = false;
Vue.use(Vant,axios);
Vue.prototype.$axios=axios
Vue.prototype.$Request=Request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
