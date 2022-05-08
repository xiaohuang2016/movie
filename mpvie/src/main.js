import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from 'axios'
// const app = createApp(App)
// app.use(Carousel).mount('#app') // 使用
createApp(App).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
    //注册全局方法
createApp(App).config.globalProperties.axios = Axios;
// createApp.prototype.$ = $