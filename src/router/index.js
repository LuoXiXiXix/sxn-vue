import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import HomhView from '../views/HomhView.vue'
import TopicsView from '../views/TopicsView.vue'


Vue.use(VueRouter)

const routes = [
  {
path:'/login',
component:() => import('../views/LoginView.vue'),
  props:true
  },
{
  path: '/',
  component:HomhView,
  children:[
    {
      path:'',
      name:'homh',
      component:TopicsView,

    },
    {
      path:'/:tab',
      component:TopicsView,
      props:true
    },
   
  ]
},
{
  path:'/topic/:topicId',
  // 路由懒加载
  component: () => import('../views/TopicView.vue'),
  props:true
},
{
  path:'/user/:userId',
  component:() => import('../views/UserView.vue'),
  props:true
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
