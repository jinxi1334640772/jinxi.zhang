import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import('./utils/axios/index.js')
// import $ from 'jquery' 
// import('jquery')
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    data: {
        meg: '这里是上海'
    },
    render: h => h(App)
}).$mount('#app')