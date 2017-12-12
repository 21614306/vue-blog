import Vue from 'vue'
import Vuex from 'vuex'
import left from './mutations/left.js'
import content from './mutations/content.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        left,
        content
    }
})