import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios'
// 配置axios
axios.defaults.baseURL = 'https://api.achrome.cn/api'
Vue.prototype.$axios =axios
// 引入echarts
import echarts from 'echarts'
import 'echarts/lib/chart/radar/'
//挂载echarts到vue原型
Vue.prototype.$echarts = echarts
// 自定义指令
Vue.directive('focus',{
  inserted:(e)=>{
    e.focus()
  }
})
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
