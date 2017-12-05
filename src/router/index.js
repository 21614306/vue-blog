import middle from '../components/middle.vue'

import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
    {path:'/',component:middle},
    {path:'/middle',component:middle}
]
export default new VueRouter({
    routes
})