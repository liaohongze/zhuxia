import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import "./assets/less/index.less";
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './api'

Vue.prototype.$api = api
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://dev.yituoke.ac.cn/';
Vue.use(Vant,axios);
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
