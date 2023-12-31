import Vue from 'vue'
import Router from 'vue-router'
import LoginIn from '@/pages/LoginIn'
import SignUp from '@/pages/SignUp'
import Home from '@/pages/Home'
import Setting from '@/pages/Setting'
import MyHome from '@/pages/MyHome'
import authGuard from './auth';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login-in',
      name: 'login-in',
      component: LoginIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },{
        path:'/MyHome',
        name:'MyHome',
        component:MyHome,
        children:[
              {
                path:'/Info',
                 component:resolve =>require(['../pages/InfoPage.vue'],resolve),
                 beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/SelectInfo',
                component:resolve =>require(['../pages/SelectInfo.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/SelectScore',
                component:resolve =>require(['../pages/SelectScore.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/Collect',
                component:resolve =>require(['../pages/Collect.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/Simulation',
                component:resolve =>require(['../pages/Simulation.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/Volunteers',
                component:resolve =>require(['../pages/Volunteers.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/Learn',
                component:resolve =>require(['../pages/Learn.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/Notice',
                component:resolve =>require(['../pages/Notice.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
              {
                path:'/Letter',
                component:resolve =>require(['../pages/Letter.vue'],resolve),
                beforeEnter: authGuard // 在进入Dashboard路由之前应用路由守卫
              },
        ]
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: resolve => require(['../pages/404.vue'], resolve)
    },
 
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
