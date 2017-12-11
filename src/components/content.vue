<template>
  <div class="content fl col-md-11">
      <ul class='catelog col-md-4'>
          <li class="catelog-item">
              <router-link to='article'>幸运出差之旅：在墨尔本的 6 Weeks</router-link>
          </li>
          <li class="catelog-item">
              <router-link to='article'>幸运出差之旅：在墨尔本的 6 Weeks</router-link>
          </li>
          <li class="catelog-item">
              <router-link to='article'>幸运出差之旅：在墨尔本的 6 Weeks</router-link>
          </li>
          <li class="catelog-item">
              <router-link to='article'>幸运出差之旅：在墨尔本的 6 Weeks</router-link>
          </li>
          <li class="catelog-item">
              <router-link to='article'>幸运出差之旅：在墨尔本的 6 Weeks</router-link>
          </li>
          <li class="catelog-item">
              <router-link to='article'>幸运出差之旅：在墨尔本的 6 Weeks</router-link>
          </li>
          <li class="catelog-item">
              <router-link to='article'>幸运出差之旅：在墨尔本的 6 Weeks</router-link>
          </li>
      </ul>
      <router-view>

      </router-view>
  </div>
</template>
<script>
export default {
     mounted(){
        console.log(this.$route.params)
    }

}
</script>

