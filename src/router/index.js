import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect:'/home',
        component: () => import('../view/Main.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../view/home/Home.vue')
            },
            {
                path: '/',
                name: 'mall',
                component: () => import('../view/mall/Mall.vue')
            }
            ,{
                path: '/',
                name: 'user',
                component: () => import('../view/user/User.vue')
            },
            {
                path: '/',
                name: 'page1',
                component: () => import('../view/Page1.vue')
            },
            {
                path: '/',
                name: 'page2',
                component: () => import('../view/Page2.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router