// 获取主题列表
// 二次封装请求
import http from './http'
// tab  类别
// page   页数
// limit  条数
const getTopics = ({tab = 'all',page = 1,limit = 40}) => {
  //   get  请求传递参数  地址栏直接  ?
 return http.get('/topics', {params:{tab,page,limit}})
}
// 获取主题详情
const getTopic = (id,accesstoken) => http.get(`/topic/${id}`)
// 命名导出
export {getTopics,getTopic}
export const login = (accesstoken) => http.post('/accesstoken',{accesstoken : accesstoken})