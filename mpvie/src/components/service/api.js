/**   
 * api接口统一管理
 */

const MOVIE_API = {
    // https://movie.douban.com
    //获取banner海报
    getbannerImg :{
        method:'get',
        url:"/j/subject_abstract?subject_id=35240920"
    },
    //热门恐怖电影(恐怖)
    hotMovieList:{
        method:"get",
        url:"/j/search_subjects?type=movie&tag=%E6%81%90%E6%80%96&sort=time&page_limit=20&page_start=0"
    }
}
export default MOVIE_API