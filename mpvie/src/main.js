import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide} from 'vue3-carousel'
// import Carousel from "vue3-carousel"; // 引入
// const app = createApp(App)
// app.use(Carousel).mount('#app') // 使用
createApp(App).mount('#app')
// 全局注册 $
createApp.prototype.$ = $
