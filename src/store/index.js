import Vue from 'vue';
import Vuex from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'
import moduleA from './modules/moduleA'

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        moduleA
    }
});

console.log(store, 'store');

// store.watch((state,getter)=>{
//     return state.message;
// }, ()=>{
//     console.log('store.watch()已经被调用');
// })
// store.subscribe((mutation, state) => {
//     console.log(mutation, state);
// })
store.subscribeAction((action,state)=>{
    console.log(action,state);
})




export default store;