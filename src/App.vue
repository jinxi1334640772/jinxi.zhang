<template>
    <div id="app">
        <div class="container">
            <navcomponent />
            <el-button type="primary" @click="displayThis">
                显示this
            </el-button>
            <el-button type="primary" @click="changeRoute">
                跳转路由
            </el-button>
            <el-row :gutter="10">
                <el-col :span="4">
                    <!-- <router-view name="aside"></router-view> -->
                    <asidebar />
                    <!-- <div v-for="item in items" :key="item">
                        {{ item }}
                    </div> -->
                </el-col>
                <el-col :span="20">
                    <router-view />
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import navcomponent from "./views/nav/navcomponent.vue";
import asidebar from "./views/nav/aside.vue";
export default {
    data() {
        return {
            items: 8
        };
    },
    components: { navcomponent, asidebar },
    methods: {
        displayThis() {
            console.log(this, "tihs");
        },
        changeRoute() {
            // this.$router.push({path:'/menu'})
            // this.$router.push('/menu')
            // this.$router.push({name:'menu'})
            this.$router.push({ name: "menu" });
        }
    }
};
</script>
<style>
.nav a {
    padding: 5px;
}
</style>
