<template>
  <article>
     <div v-html="article.content"></div>
  </article>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.params);
  },
  data() {
    return {
      article: {
        content: "<h1>fdsafsdafsdafsdafdsadasdassdafsdafasd</h1>"
      }
    };
  }
};
</script>
