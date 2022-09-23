import App from './App'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(ElementUI,{size:'mini'})
Vue.prototype.$axios=axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
