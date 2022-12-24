<template>
  <div class="home">
    <!-- <base-panel> -->
    <!-- <template #panel-head> -->
      <div class="nav">
      <router-link :active-class="($route.path === '/' || $route.path === '/all') ? 'active' : ''" to="/all">全部</router-link>
      <!-- <router-link to="/">全部</router-link> -->
      <router-link  active-class="active" to="/good">精华</router-link>
      <router-link active-class="active" to="/share">分享</router-link>
      <router-link active-class="active" to="/ask">问答</router-link>
      <router-link active-class="active" to="/job">招聘</router-link>
      <router-link active-class="active" to="/dev">客户测试</router-link>
      
    </div>
    <!-- </template> -->
    <!-- <template #panel-content> -->
    <router-view/>
  <!-- </template> -->
  <!-- </base-panel> -->
   
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.all{
  background-color: #ccc;
}
  .home{
  width: 1400px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  min-height: 140vh;
    .nav{
      // line-height: 40px;
      background-color: rgb(26, 26, 26);
      padding: 10px;
      display: flex;
      align-items: center;
      a{
        margin-right: 20px;
        padding: 4px;
        // align-items: center;
        font-size: 14px;
        color:  #ecbc2e;
        background-color:rgb(26, 26, 26);
        border-radius: 4px;
      }
      a:hover{
        color: rgb(193, 193, 233);
      }
      a.active{
        color: rgb(245, 96, 96);
        background-color: rgb(255, 255, 255);
      }
    }
  }
</style>