import axios from 'axios'
import * as types from '../type.js'


let state ={
    articles:[]
}

let actions ={
    selectItem({commit},data){
        axios.get('/src/data/'+data.cateType+'.json').then(function(res){
            commit('selectItem',{data:res.data.itemData})
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

let mutations ={
    [types.SELECTITEM](state,result){
        state.articles = result.data;
    }
}

const getters ={
    articles(state){
        return state.articles
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}