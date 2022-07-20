import {
    createStore
} from 'vuex'
import {
    setItem,
    getItem
} from '@/utils/storage.js'
export default createStore({
    //存放数据,存放状态
    //使用方法
    state: {
        commitSun: {},
        isLogin: false, //用来显示是否登陆
        currentuser: null, //用来显示用户信息是否显示
        token: ""
    },
    //加工state成员给外界
    //state 当前VueX对象中的状态对象
    // getters 当前getters对象，用于将getters下的其他getter拿来用
    //组件使用this.$store.getters.fullInfo
    getters: {
        getIsLogin: state => state.isLogin,
        getToken: state => getItem(),
        getCurrentuser: state => state.currentuser

    },
    //state成员操作,操作state数据的方法的集合，比如对该数据的修改、增加、删除等等。
    //组件调用this.$store.commit('SET_TOKEN','new token')挂载方法
    //同步处理
    mutations: {
        setToken(state, token) {
            state.token = token
            setItem(token)
        },
        setCommit(state, data) {
            state.commitSun = data
        },
        userSatus(state, user) {
            if (user) {
                state.currentuser = user;
                state.isLogin = true
            } else {
                state.currentuser = null;
                state.isLogin = false
            }
        }
    },
    //异步处理
    //组件中使用this.$store.dispatch('aEdit','new TOKEN')
    actions: {
        setUser({ commit }, user) {
            commit("userSatus", user)
        }
    }
})