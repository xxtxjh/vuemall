import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import toast from 'components/common/toast'
FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('./assets/images/common/placeholder.jpg')
})
Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
//防止首页等四个路由，连续点击报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
