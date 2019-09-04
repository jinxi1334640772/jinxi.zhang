export default [
    {
        path: '/', name: 'home', component: () => import('../views/Home.vue')
    },
    { path: '/menu', name: 'menu', component: () => import('../views/menu.vue') },
    {
        path: '/About', name: 'About', component: () => import('../views/About.vue'),
        children: [
            { path: ':id', component: () => import('../views/dynamicRoute.vue'), props: { zhangjinxi: 'zhangjinxi' } }
        ]
    },
    { path: '/connect', name: 'connect', component: () => import('../views/connect.vue'), redirect: '/rigester' },
    { path: '/rigester', name: 'rigester', component: () => import('../views/rigester.vue'), meta: { requiresAuth: true, name: 'zhnagjinxi' } },
    {
        path: '/login', name: 'login', component: () => import('../views/login.vue'), alias: '/alias', beforeEnter: (to, from, next) => {
            // 路由独享的守卫，和全局导航守卫一样，只是对当前路由有效
            console.log('beforeEnter()路由内守卫被调用');
            next();
        }
    },
    { path: '*', name: '404', component: () => import('../views/404.vue') },

]