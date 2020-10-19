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
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '/echarts',
        name: 'Echarts',
        component: Echarts
      }
    ]
  },{
    path: '/selectlocal',
    name: 'SelectLocal',
    component: SelectLocal
  },{
    path: '/shop',
    name: 'Shop',
    component: () => import(/*webpackChunkName:"shop"*/ '@/views/Shop.vue'),
    meta:{
      keepAlive:true
    }
  },{
    path: '/register',
    name: 'Register',
    component: () => import(/*webpackChunkName:"register"*/ '@/views/Register.vue')
  },{
    path: '/user',
    name: 'User',
    component: () => import(/*webpackChunkName:"user"*/ '@/views/User.vue')
  },{
    path: '/login',
    name: 'Login',
    component: () => import(/*webpackChunkName:"user"*/ '@/views/Login.vue')
  },{
    path: '/product/:pid',
    name: 'Product',
    component: ()=>import(/*webpackChunkName:"production"*/ '@/views/Product.vue')
  }
]

const router = new VueRouter({
  routes
})
// 保护用户信息页面，判断登录状态
router.beforeEach((to,from,next)=>{
  if(to.name == 'User') {
    if(localStorage.getItem('token')==null) next({path:'/login'})
    next()
  }
  next()
})
export default router
