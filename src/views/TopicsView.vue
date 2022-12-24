<template>
  <div>
    <TopicItem v-for="topic in topics" :key="topic.id" v-bind="topic"/>
  </div>
</template>

<script>
import {getTopics} from '../plugins/api'
import TopicItem from '../components/TopicItem.vue'
export default {
  components: { TopicItem },
  data(){
    return {
      topics:[],
      loading:false,
    }
  },
  props:['tab'],
  components :{TopicItem},
  watch:{
    // '$route.params.tab':{
      tab:{
        async handler(val){
          this.loading = true;
          const res = await getTopics({ tab:val ||'all'})
          this.topics = res.data;
          this.loading = false;
        }
      },
      immediate:true
    // }
  },
  // async created(){
  //   const res = await getTopics({tab:'all'})
  //   this.topics = res.data
  // },

}
</script>

<style>

</style>