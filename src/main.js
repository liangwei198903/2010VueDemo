import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  Axios  from  'axios'
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
const  bus=new  Vue();
export default bus;
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
