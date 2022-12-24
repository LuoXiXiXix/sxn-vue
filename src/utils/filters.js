import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
// moment.locale(zh-cn)
Vue.filter('fromNow',(time) => moment(time).fromNow())
// 两个过滤器
// 是否置顶和精华
Vue.filter('topOrGood', (top,good) => top ? '置顶' : good ? '精华' : '')
// 类别文字转换
Vue.filter('tabTextTransform',(tab) => tab==='share' ? '分享' : tab==='ask' ? '问答' : tab === 'dev' ? '客户端测试' :'招聘')