import Vue from 'vue'
import Home from './Home.vue'
import router from './router'
import store from './store'
import  "./assets/styles/reset.css"
import  "./assets/styles/border.css"
import  "./assets/styles/iconfont.css"
import  'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#home')
