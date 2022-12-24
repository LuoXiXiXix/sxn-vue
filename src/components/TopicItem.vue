<template>
  <div class="topic-item">
    <img  alt="" class="avatar_url" :src="author.avatar_url">
    <span class="count">
      <span>{{reply_count}}</span>
      /
      <span>{{visit_count}}</span>
    </span>
    <el-tag v-if="top || good" size="mini" effect="dark" class="tag" type="success">{{top? '置顶' : '精华'}}</el-tag>
    <el-tag class="tag" size="mini" v-else type="info">{{tab | tabTextTransform}}</el-tag>
    <router-link :to='`/topic/${id}`' class="title"> <h4>{{title}}</h4></router-link>
    <span class="time">{{last_reply_at | fromNow}}</span>
  </div>
</template>

<script>
export default {
props:['author','good','last_reply_at','reply_count','tab','title','top','visit_count','id'],

// computed:{
//   time(){
//     return this.last_reply_at.length
//   }
// },

}
</script>

<style lang="less">
.topic-item{
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  align-items: center;
  img{
    width: 40px;
    margin-right: 4px;
    border-radius: 4px;
  }
  .count{
    width: 80px;
    font-size: 12px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .title{
    flex-grow: 1;
    margin-left: 15px;
    color: #000;
  }
  .time{
    color: rgb(13, 192, 43);
  }
}
</style>