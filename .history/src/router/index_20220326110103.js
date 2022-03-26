import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLogin from '../components/MyLogin.vue'
import MyHome from '../components/MyHome.vue'
// import { from } from 'core-js/core/array'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 当用户访问根路径时，重定向到MyLogin
    { path: '/', redirect: '/MyLogin' },
    // 当用户访问mylogin这个地址时，展示component这个组件
    { path: '/mylogin', component: MyLogin },
    { path: '/myhome', component: MyHome }
  ]
})

// // 挂载路由守卫：若用户没有登录，则不能访问/myhome；如果用户通过url访问，则强制跳转到登录页面
// router.beforeEach((to, from, next) => {
//   // to表示将要访问的路径；from代表从哪个路径跳转而来；next是一个函数，表示放行
//   // next（）放行  next（‘/mylogin’）强制跳转
//   if (to.path === '/mylogin') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/mylogin')

//   next()
// })
