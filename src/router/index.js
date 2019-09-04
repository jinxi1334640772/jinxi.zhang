import Vue from 'vue';
import vueRouter from 'vue-router';
import routes from './routes';
Vue.use(vueRouter);
const router = new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savePosition) {
        // return 期望滚动到哪个位置
        console.log('scrollBehavior被调用')
        return { x: 0, y: 0 };
        //{selector:string,offset?:{x:number,y:number}}   (offset只在2.6.0+支持)
    }
})
export default router;
//全局前置守卫，当一个导航出发时，全局前置守卫按照创建顺序被调用
router.beforeEach((to, from, next) => {
    // console.log(to, from, '1111111111');
    console.log('beforeEach(),全局前置守卫被调用');
    next();
});
//全局解析守卫，和router.beforeEach()类似，区别是在所有组件内守卫和异步路由组件被解析之后被调用
router.beforeResolve((to, from, next) => {
    console.log('beforeResolve()全局解析守卫被调用');
    next();
});
//全局后置钩子，和守卫不同，不会接受next函数，也不会改变导航
router.afterEach((to, from) => {
    console.log('afterEach()全局后置钩子被调用');
})
/*
完整的导航解析流程
1，导航被触发
2.在失活的组件里调用离开守卫
3.调用全局的beforeEach全局前置守卫
4.在重用的组件里调用beforeRouteUpdate守卫
5.在路由配置里调用beforeEnter
6.解析异步路由组件
7.在被激活的组件里调用beforeRouteEnter
8.调用全局的beforeResolve守卫
9.导航被确认
10.调用全局的afterEach钩子
11.之法DOM更新
12.用创建好的实例调用befRouteEnter守卫中传给next的回调函数
*/