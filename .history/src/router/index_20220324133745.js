/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLogin from '../components/MyLogin.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 当用户访问根路径时，重定向到MyLogin
    { path: '/', redirect: '/MyLogin' },
    // 当用户访问mylogin这个地址时，展示component这个组件
    { path: '/mylogin', component: MyLogin }
  ]
})
