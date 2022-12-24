<template>
  <header>
    <div class="inner">
      <router-link to="/">
        <img src="../assets/logo.png" class="logo" width="100px" alt="">
      </router-link>
      <span class="iconfont icon-fangdajing "></span>
      <div class="header-right">
        <router-link to="/" class="home-link">首页</router-link>
      
        <router-link v-if="userInfo" to="/">未读消息</router-link>
        <router-link v-if="!userInfo" to="/login"><el-button type="warning" class="btn">登录</el-button></router-link>
        <img class="rentou" :src="userInfo.avatar_url" width="40" v-if="userInfo" alt="">
        <el-button v-if="userInfo" @click="logout">退出</el-button>
      </div>
      
    </div>
  </header>
</template>

<script>
export default {
data(){
  return{
    userInfo:null
  }
},
watch:{
  '$route.path':{
    handler(val){
      const userInfoJSON = sessionStorage.getItem('userInfo')
      if(val === '/' && !this.userInfo && this.userInfoJSon){
        console.log(12312)
        this.userInfo = JSON.parse(userInfoJSON)
      }
    }
  }
},
created(){
  const userInfoJSon = sessionStorage.getItem('userInfo')
  if(userInfoJSon){
    this.userInfo =JSON.parse(userInfoJSon)
  }
},
methods:{
  logout(){
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('accesstoken')
    this.userInfo = null
  }
}
}
</script>

<style lang="less">
header{
  width: 100%;
  height: 50px;
  background-color: rgb(17, 17, 17);
  .inner{
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  .logo{
    height: 54px;
  }
  .home-link{
    color: rgb(255, 255, 255);
    margin-right: 30px;
    font-size: 14px;
  }
  .home-link:hover{
    color: #fff;
  }
  .btn:hover{
    color: red;
    background-color:rgb(102, 17, 220);
  }
  .int{
    position: relative;
    margin-left: -600px;
    padding: 4px 35px;
    color: #ccc;
    background-color: rgb(145, 144, 144);
    border-radius: 15px;
    border: 1px solid rgb(145, 144, 144);
  }
  .iconfont{
    position: absolute;
    color: rgb(47, 44, 44);
    font-size: 14px;
    top: 19px;
    left: 364px;
  }
  .int:hover{
    background-color: #fff;
    border: 1px solid #fff;
  }
}

}
</style>