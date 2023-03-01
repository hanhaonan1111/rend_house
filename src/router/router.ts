import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import { hasToken } from '../utils/local'

const routes = [
    {
        path: '/login',
        component: Login,
        meta: { title: '登陆页面' }
    }, {
        path: '/register', component: Register,
        meta: { title: '登陆页面' }
    }
]

let router = createRouter({ routes, history: createWebHistory() })

const whiteList = ['/login', '/register']  //白名单

router.beforeEach((to, from, next) => {
    let flag = whiteList.indexOf(to.path)
    if (flag > 0) {
        // 访问需要token的页面
        if (!hasToken()) {
            // 有令牌
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

router.afterEach((to, from,) => {
    let title = to.meta.title || ''
    document.title = '好客租房-' + title
})




export default router