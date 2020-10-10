import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SelectLocal from '../views/SelectLocal.vue'
import Echarts from '../components/Echarts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'Echarts',
        name: 'Echarts',
        component: Echarts
      }
    ]
  },{
    path: '/selectlocal',
    name: 'SelectLocal',
    component: SelectLocal
  }
]

const router = new VueRouter({
  routes
})
export default router
