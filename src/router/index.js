import content from '../components/content.vue'
import article from '../components/article.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [{
    path: '/:cateType',
    component: content,
    children: [{
        path: '/:cateType/:articleId',
        component: article
    }]
}]
export default new VueRouter({
    routes
})