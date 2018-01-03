import * as types from '../type.js'
import axios from 'axios'

const BASEURL ='http://127.0.0.1/myblog/public/api/'

let state ={
    navItems:[]
}

let getter ={
    navItems(state){
        return state.navItems
    }
}

let actions={
    getNavItems({commit}){
        axios.get(BASEURL+'get_cates').then(function(res){
           commit('getNavItems',{data:res.data}) 
        }).catch(function(err){
            console.log(err)
        })
    }
}

let mutations={
    [types.GETNAVITEMS](state,navItems){
        state.navItems = navItems.data;
    }
}



export default{
    namespaced:true,
    state,
    getter,
    actions,
    mutations
}