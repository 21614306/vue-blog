import content from '../components/content.vue'
import article from '../components/article.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [{
    path: '/:cateType',
    component: content
},
{
    path: '/content',
    component: content,
    children: [{
            path: '/article',
            component: article
        }]
}]
export default new VueRouter({
    routes
})