import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const router = createRouter({
        history: createWebHistory(),
        routes: [{
            path: '/',
            name: 'home',
            component: defineAsyncComponent(() =>
                import ('../views/index.vue')),
            meta: {
                title: '首页'
            }
        }, {
            path: '/myLogin',
            name: 'login',
            component: defineAsyncComponent(() =>
                import ('../views/myLogin.vue')),
            meta: {
                title: '登录'
            }
        }, {
            path: '/registerForm',
            name: 'registerForm',
            component: defineAsyncComponent(() =>
                import ('../views/registerForm.vue')),
            meta: {
                title: '注册'
            }
        }, {
            path: '/movieList',
            name: 'movieList',
            component: defineAsyncComponent(() =>
                import ('../views/movieList.vue')),
            meta: {
                title: '电影列表'
            }
        }, {
            path: '/single',
            name: 'single',
            component: defineAsyncComponent(() =>
                import ('../views/single.vue')),
            meta: {
                title: '电影详情页'
            }
        }, {
            path: '/videoPage',
            name: 'videoPage',
            component: defineAsyncComponent(() =>
                import ('../views/videoPage.vue')),
            meta: {
                title: '视频'
            }
        }, {
            path: '/videoList',
            name: 'videoList',
            component: defineAsyncComponent(() =>
                import ('../views/videoList.vue')),
            meta: {
                title: '视频详情页'
            }
        }, {
            path: '/alcoholList',
            name: 'alcoholList',
            component: defineAsyncComponent(() =>
                import ('../views/alcoholList.vue')),
            meta: {
                title: '酒类列表页'
            }

        }, {
            path: '/musicPage',
            name: 'musicPage',
            component: defineAsyncComponent(() =>
                import ('../views/musicPage.vue')),
            meta: {
                title: '音乐'
            }
        }, {
            path: '/bookPage',
            name: 'bookPage',
            component: defineAsyncComponent(() =>
                import ('../views/bookPage.vue')),
            meta: {
                title: '书本'
            }
        }, {
            path: '/*',
            redirect: '/'
        }]
    })
    //全局路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to, from)
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})
router.afterEach((to, from) => {
    // console.log(to, from)
    console.log('afterEach')
})

export default router