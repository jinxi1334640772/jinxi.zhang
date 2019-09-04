import moduleB from './moduleb'
export default {
    // namespaced: true,
    state: {
        zhangjinxi: '张进喜',
        age: 26
    },
    getters: {
        zhangjinxi(state) {
            console.log(state);
        }
    },
    mutations: {
        zhangjinxi(state) {
            console.log(state);
        }
    },
    actions: {
        zhangjinxi(state) {
            console.log(state);
        }
    },
    modules: {
        moduleB
    }
}