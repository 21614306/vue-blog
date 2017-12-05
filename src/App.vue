<template>
  <div id="app" class='clearfix'>
    <left></left>
    <router-view></router-view>
  </div>
</template>

<script>
import left from './components/left.vue'
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    'left':left
  }
};
</script>
