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
                    <asidebar />
                </el-col>
                <el-col :span="20">
                    <router-view />
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import navcomponent from './views/nav/navcomponent.vue';
import asidebar from './views/nav/aside.vue';
import { getUser } from './utils/axios/jsonplaceholderApi.js';
import { edsSearchList } from './utils/axios/edsApi.js';
export default {
    components: { navcomponent, asidebar },
    data() {
        return {
            items: 8,
        };
    },
    methods: {
        displayThis() {
            // console.log(this, 'tihs');
            getUser({}).then(data => {
                console.log(data, 1111);
            });
            edsSearchList({ searchIdArr: [1602, 20011] }).then(data => {
                console.log(data, 2222);
            });
        },
        changeRoute() {
            // this.$router.push({path:'/menu'})
            // this.$router.push('/menu')
            // this.$router.push({name:'menu'})
            this.$router.push({ name: 'menu' });
        },
    },
};
</script>
<style>
.nav a {
    padding: 5px;
}
</style>
