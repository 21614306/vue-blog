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
export default {
  mounted() {
    console.log(this.$route.params);
  },
  data() {
    return {
      articles: [
        {
          type: "shoot",
          articleId: 1,
          title: "幸运出差之旅：在墨尔本的 6 Weeks"
        },
        {
          type: "shoot",
          articleId: 2,
          title: "看介里！Rails Girls成都站活动总结火热来袭~"
        },
        {
          type: "shoot",
          articleId: 3,
          title: "塔吉锅简介以及菜谱推荐"
        },
        {
          type: "shoot",
          articleId: 4,
          title: "吕立青拍的壁纸系列（一）"
        },
        {
          type: "shoot",
          articleId: 3,
          title: "西南交大摄影集【一】"
        }
      ]
    };
  }
};
</script>

