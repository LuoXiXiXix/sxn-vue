<template>
  <div class="topic" v-if="topic">
  <div class="topic-head">
    <div class="head-top">
      <el-tag v-if="topic.top || topic.good" type="success" effect="dark" size="mini">{{topic.top ? '置顶' : '精华'}}</el-tag>
      <h3>{{topic.title}}</h3>
    </div>
    <p>
      <span class="disc">·</span><span> 发布于 {{topic.creat_at | fromNow}}</span>
      <span class="disc">·</span><span> 作者 {{topic.author.loginname}}</span>
      <span class="disc">·</span><span>{{topic.visit_count}} 次浏览</span>
      <span class="disc">·</span><span> 来自 {{topic.tab | tabTextTransform}}</span>
    </p>
  </div>
    <div class="topic-content" v-html="topic.content"></div>
    <div class="comment-box"  v-if="topic.replies.length">
        <div class="comment-head">
          <span><span>{{topic.replies.length}} </span>回复</span>
        </div>
        <div class="comment-list">
          <div v-for="(comment,index) in topic.replies" :key="comment.id" :class="['comment-item',{active:commentLikeMost.includes(comment.id)}]">
            <img :src="comment.author.avatar_url" alt="">
            <div class="comment-content">
              <span class="info">
                <span>
                  {{comment.author.loginname}} {{index + 1}}楼 <span class="disc">·</span>{{comment.creat_at | fromNow}}
                </span>
                <span class="like" v-if="comment.ups.length">
                  <span class="icon-icon iconfont"></span>
                  <span>{{comment.ups.length}}</span>
                </span>
              </span>
              <span class="text" v-html="comment.content"></span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getTopic } from '../plugins/api'
export default {
props:['topicId'],
data(){
  return{
    topic:null
  }
},
computed:{
  // 文章点赞数组中点赞前两名
  
  commentLikeMost(){
    if(this.topic.replies.length === 0){
    return []
  }
    const arr = this.topic.replies.sort((a,b) => b.ups.length - a.ups.length)
    // console.log(arr[1])
    // console.log(arr[2])
    const commentIds = []
   const maxOne = arr[0].ups.length;
   if(maxOne > 2){
    const oneArr = arr.filter((item) => item.ups.length === maxOne);
    oneArr.forEach((comment) => {
      commentIds.push(comment.id)
    });
    const maxTwo = arr[oneArr.length].ups.length;
   if(maxTwo > 2){
    const twoArr = arr.filter((item) => item.ups.length === maxTwo);
    twoArr.forEach((comment) => {
      commentIds.push(comment.id)
      })
    }
   }
    return commentIds
  }
  },
  async created(){
   const res = await getTopic(this.topicId)
   console.log(res)
   this.topic = res.data
  }
}
// }
</script>

<style lang="less">
.topic{
width: 1400px;
margin: 0 auto;
margin-top: 20px;
// background-color: #fff;
border-radius: 3px;
overflow: hidden;
min-height: 140vh;
.topic-head{
  padding: 20px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  .head-top{
    display: flex;
    align-items: center;
    h3{
    margin-left: 20px;
    font-size: 30px;
  }
  }
  p{
    margin-top: 10px;
    font-size: 14px;
    // font-weight: 600;
    display: flex;
    align-items: center;
    // margin-top: 5px;
    .disc{
      transform: scale(3);
      margin-right: 10px;
      margin-bottom: 5px;
      margin-left: 10px;
    }
  }
  // align-items: center;
  // display: flex;
}
.topic-content{
  padding: 20px;
  line-height: 1.5;
  background-color: #fff;
  img{
    width: 100%;
  }
}
.comment-box{
  margin-top: 20px;
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
  .comment-head{
    background-color: #ccc;
    line-height: 40px;
    padding-left: 10px;
  }
  .comment-list{
    .comment-item{
      display: flex;
      align-items: flex-start;
      border-bottom: 1px solid #ccc;
      padding: 10px 10px 20px;
      img{
        width: 40px;
        border-radius: 5px;
        margin-right: 15px;
      }
      .comment-content{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        .info{
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .comment-item.active{
      background-color: rgb(172, 246, 221);
    }
  }
}
}
</style>