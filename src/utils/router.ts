import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login/index.vue'
import { hasToken } from './local'
const routes = [
    { path: '/login', component: Login }
]

let router = createRouter({ routes, history: createWebHistory() })

const whiteList = ['/login', '/register']  //白名单

router.beforeEach((to, from, next) => {

    let flag = whiteList.indexOf(to.path)
    if (flag > 0) {
        // 访问需要token的页面
        if (hasToken()) {
            // 有令牌
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})





export default router