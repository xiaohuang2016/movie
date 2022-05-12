import http from './http'
// 
/**
 *  @parms resquest 请求地址 例如：https://movie.douban.com/j/search_subjects
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
import {get, post } from './http'
export const hotMovieListApi = p => get('/api', p);
// const MOVIE_API = {
//     // https://movie.douban.com
//     //获取banner海报
//     getbannerImg :{
//         method:'get',
//         url:"/j/subject_abstract?subject_id=35240920"
//     },
//     //热门恐怖电影(恐怖)
//     hotMovieList:{
//         method:"get",
//         url:"/j/search_subjects?type=movie&tag=%E6%81%90%E6%80%96&sort=time&page_limit=20&page_start=0"
//     }
// }
// export default MOVIE_API