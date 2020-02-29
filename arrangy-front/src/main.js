import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import vuetify from "./plugins/vuetify"

Vue.config.productionTip = false

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