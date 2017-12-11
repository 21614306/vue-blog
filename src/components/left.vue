<template>
    <div class='left col-md-1'>
        <router-link to='/'>
            <img src="../assets/head-img.jpg" alt="" class='img-circle headimg'>
        </router-link>
        <ul class='sidebar'>
            <li class ='sidebar-item'  v-for='item in navItems'  v-on:click="select(item.id)" v-bind:class="{active:state===item.id}">
                <router-link v-bind:to='item.to'>
                    <img v-bind:src='BASEIMGURL+item.to+".svg"' alt="">
                    <span>{{item.catename}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
const BASEIMGURL = "../src/assets/"
let navItems = [
    {
        id:1,
        catename:'摄影',
        to:'shoot'
    },
       {
        id:2,           
        catename:'前端',
        to:'font-end'
    },   {
        id:3,
        catename:'资源',
        to:'resource'
    },   {
        id:4,
        catename:'编程',
        to:'code'
    },   {
        id :5,
        catename:'思考',
        to:'think'
    },   {
        id:6,
        catename:'演讲',
        to:'speech'
    },   {
        id:7,
        catename:'想法',
        to:'idea'
    },   {
        id:8,
        catename:'标签',
        to:'tag'
    },   {
        id:9,
        catename:'归档',
        to:'file'
    },
     {
         id:10,
        catename:'搜索',
        to:'search'
    },
     {
         id:11,
        catename:'关于',
        to:'about'
    },

] 
/**@state
 * 
 * 此参数是用来记录哪个标签被选中，默认选中摄影
 * 
 */
export default {
  data(){
      return{
          BASEIMGURL,
          navItems,
          state:0
      }
  },
  methods:{
      select(id){
          if(id == this.state){
              return
          }
          this.state = id;
      }
  }
}
</script>
<style>

</style>


