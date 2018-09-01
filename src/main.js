// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
import axios from 'axios'
import index from '../config/index'
import animate from 'animate.css'
import moment from 'moment'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(animate)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload,{
    preLoad: 1.3,
    error:'https://hilongjw.github.io/vue-lazyload/dist/404.png',
    attempt: 1
})


Vue.prototype.$moment = moment;
Vue.prototype.$http = axios
// Vue.component('child',{
//     render(h){
//         const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level]
//         return h(tag,this.$slots.default)
//     },
//     props:{
//         level:{
//             type:Number,
//             required:true
//         }
//     }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
