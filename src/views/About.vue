<template>
    <div>
        <h1>about</h1>
        <div>
            <router-link to='/about/1111111111111'>1111111111111</router-link>
            <router-link to='/about/222222222222'>222222222222</router-link>
            <router-link to='/about/333333333333333'>333333333333333</router-link>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
export default {
    beforeRouteEnter(to, from, next) {
        //在渲染该组件的对应路由被confirm之前调用，不能获取组件实例的this，因为当守卫执行时，组件实例还没有被创建
        console.log('beforeRouterEnter被调动');
        next();
    },
    beforeRouteUpdate(to, from, next) {
        //在当前路由改变，并且该组件被复用时调用，比如在动态路由参数改变时会被调用，可以访问组件实例this
        console.log('beforeRouterUpdate被调用');
        next();
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调动
        console.log('beforeRouerLeabe被调用');
        next();
    }
}
</script>
<style>
</style>