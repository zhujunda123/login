import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
     //首页
  path: '/home',
  component: Home,
  meta: {
    isLogin: true
  },
},
  {
    //登录
  path: '/login',
  component: Login,
  meta: {
    isLogin: false
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
