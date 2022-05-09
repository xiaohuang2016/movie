import http from './http'
// 
/**
 *  @parms resquest 请求地址 例如：https://movie.douban.com/j/search_subjects
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/testIp/j/"

// get请求
export function getListAPI(params){
    return http.get(`${resquest}/search_subjects`,params)
}
// post请求
export function postFormAPI(params){
    return http.post(`${resquest}/postForm.json`,params)
}
// put 请求
export function putSomeAPI(params){
    return http.put(`${resquest}/putSome.json`,params)
}
// delete 请求
export function deleteListAPI(params){
    return http.delete(`${resquest}/deleteList.json`,params)
}

