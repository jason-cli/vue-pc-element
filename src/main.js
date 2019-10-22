import Vue from 'vue'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
import App from './App.vue'
import router from './routers'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as filters from './filters'

Vue.use(ElementUI);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
