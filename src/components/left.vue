<template>
    <div class='left col-md-1'>
        <router-link to='/'>
            <img src="../assets/head-img.jpg" alt="" class='img-circle headimg'>
        </router-link>
        <ul class='sidebar'>
            <li class ='sidebar-item'  v-for='item in navItems'  v-on:click="select(item.id,item.to)" v-bind:class="{active:state===item.id}">
                <router-link v-bind:to='"/"+item.to'>
                    <img v-bind:src='BASEIMGURL+item.to+".svg"' alt="">
                    <span>{{item.catename}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
const BASEIMGURL = "../src/assets/"
import {mapState} from 'vuex'
/**@state
 * 
 * 此参数是用来记录哪个标签被选中，默认选中摄影
 * 
 */
export default {
  data(){
      return{
          BASEIMGURL,
          state:0       
      }
  },
  computed:{
      ...mapState({
          navItems:state=>state.left.navItems
      })
  },
  mounted(){
      this.$store.dispatch('left/getNavItems')
  },
  methods:{
      select(id,cateType){
          if(id == this.state){
              return
          }
          this.state = id;
          this.$store.dispatch('content/selectItem',{cateType})
      }
  }
}
</script>
<style>

</style>


