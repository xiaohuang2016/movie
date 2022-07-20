import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import $ from 'jquery'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/video.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/index.css'
import router from '../src/route/index'
import store from '../src/store/store'
const app = createApp(App)
app.use(Vuex)
    // app.use(store).use().mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 }).use(router).use(store).mount('#app')
    //注册全局方法
app.config.globalProperties.axios = axios;
// createApp.prototype.$ = $