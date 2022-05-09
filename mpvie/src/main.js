import { createApp } from 'vue'
import App from './App.vue'
// import $ from 'jquery'
const $ = require('jquery');
window.$ = $;
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css';
// const app = createApp(App)
// app.use(Carousel).mount('#app') // 使用
const app = createApp(App)
// app.use(store).use().mount('#app')
app.use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
// 全局注册 $
// createApp.prototype.$ = $
