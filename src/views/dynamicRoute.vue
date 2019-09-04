<template>
    <div>
        <h3>动态路由参数{{$route.params.id}}</h3>
        <h3>动态路由参数{{id}}</h3>
        <h3>动态路由参数{{zhangjinxi}}</h3>
    </div>
</template>
<script>
export default {
    props:['id','zhangjinxi']
}
</script>