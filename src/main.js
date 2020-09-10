import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false


import axios from 'axios'
Vue.prototype.$http = axios

import { Circle } from 'vant';

Vue.use(Circle);
import 'vant/lib/circle/style';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
