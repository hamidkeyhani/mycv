import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/bootstrap.min.css'
// font awesome
import './assets/css/all.css'
import './assets/css/fontawesome.min.css'
import GlobalComponents from "@/gloablComponents";

Vue.config.productionTip = false
Vue.use(GlobalComponents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
