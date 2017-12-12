import * as types from '../type.js'
import axios from 'axios'
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
        // console.log(1);
        axios.get('/src/data/cate.json').then(function(res){
           commit('getNavItems',{data:res.data.cateItem}) 
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