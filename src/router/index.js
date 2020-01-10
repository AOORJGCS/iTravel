import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,    //component: () => import( '/')
  }

]

const router = new VueRouter({
  routes
})

export default router
