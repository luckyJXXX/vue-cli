import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axio from './utils/axio'
import iView from 'iview'
import './assets/style/reset.less'
import './assets/style/common.less'

Vue.config.productionTip = false
Vue.use(iView);

// 全局配置变量
window.Axios = axio
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
