import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Footer/Login.vue'
import List from './components/List/index.vue'
import Signup from './components/Footer/Signup.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/book-self',
      name: 'home',
      component: Home
    },
    {
      path: '/book-self/login',
      name: 'login',
      component: Login
    },
    {
      path: '/book-self/list',
      name: 'list',
      component: List,
      meta: { requiresAuth: true }
    },
    {
      path: '/book-self/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '*',
      redirect: '/book-self'
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router