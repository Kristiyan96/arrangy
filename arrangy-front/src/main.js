import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from "./common/api.service"
import './registerServiceWorker'
import vuetify from "./plugins/vuetify"

import Guest from "@/layout/Guest"
import Client from "@/layout/Client"

Vue.config.productionTip = false
ApiService.init()

document.addEventListener("DOMContentLoaded", () => {
  let v = new Vue({
    router,
    render: h => h(App),
    vuetify,
    store
  });
  global.vm = v;
  v.$mount("#app");
});