import axios from '@/components/service/request'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const movieList = {
    hotMovieListApi(params) {
        return axios.get(`/maoyan`, { params: params });
    },
    popMovieListApi(params) {
        return axios.get(`/douban/j/search_subjects`, { params: params });
    },
    login(params) {
        return axios.get(`login`, { params: params });
    },
    auth() {
        return axios.get(`/user`);
    },
    detail(params) {
        return axios.get(`/douban/j/chart/top_list`, { params: params });
    },
    recentlyMovieListApi(params) {
        return axios.get(`/douban/j/search_subjects`, { params: params });
    },
    musicApi(params) {
        return axios.get(`/music/getTypeVideoList`, { params: params });
    },
    videoApi(params) {
        return axios.get(`/music/getTypeVideoList`, { params: params });
    },
    playUrlApi(params) {
        return axios.get(`/play`, { params: params })
    },
    videoPlayApi(params) {
        return axios.get(`/vedioPlay`, { params: params })
    }
}
export default movieList;