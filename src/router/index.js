import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from  '../views/index'
import Detail from  '../views/detail'
import Box from  '../views/box'
Vue.use(VueRouter)

const routes = [
  { path: '/index',  name:"index", component: Index },
  { path: '/detail', name:"detail", component: Detail  },
  { path: '/box', name:"box", component: Box },

] 
    
  


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
