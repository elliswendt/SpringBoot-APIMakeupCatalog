import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SmartTable from 'vuejs-smart-table'
Vue.component('vuejs-smart-table', SmartTable);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
