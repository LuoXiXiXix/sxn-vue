import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/style.less'
import './utils/filters'

// 引入图标
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/iconfont"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
