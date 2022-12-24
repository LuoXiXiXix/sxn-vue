<template>
  <div class="app">
   <TopHeader/>
  <router-view/>
  <!-- <HomhView/> -->
  </div>
</template>

<script>

import { RouterView } from 'vue-router';
import TopHeader from './components/TopHeader.vue'
// import HomhView from './views/HomhView.vue';
export default {
    components: { TopHeader, RouterView }
}
</script>

<style lang="less">
.app{
  background-color: rgb(247, 241, 241);
  min-height: 100vh;
}
</style>