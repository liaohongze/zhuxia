import request from './request'

// 导入api模块
const apis = [...token]
import token from './modules/token'
let api = {}
// addPrefix(apis)


// 执行下面的循环后，api形如：
// {
//   index: params => {
//     return request.post('/index', params)
//   }
//   ......
// }
/**
 * name：api调用名称
 * method：请求方法，get，post，put，delete等
 * path：请求路径
 */
apis.map(item => {
  api[item.name] = params => request[item.method](item.path, params)
})

export default api
