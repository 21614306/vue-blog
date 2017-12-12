<template>
  <div class="content fl col-md-11">
      <ul class='catelog col-md-4'>
          <li v-for='article in articles' class="catelog-item">
              <router-link v-bind:to='"/"+article.type+"/"+article.articleId'>{{article.title}}</router-link>
          </li>
      </ul>
      <router-view>
      </router-view>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('content/selectItem',{cateType:this.$route.params.cateType})
  },
  computed:{
    ...mapState({
      articles:state=>state.content.articles
    })
  }
};
</script>

