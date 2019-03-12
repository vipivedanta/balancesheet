import Vue from 'vue';
import Vuex from 'vuex';
import Expense from './expense';

Vue.use(Vuex);
const Store = new Vuex.Store({
    modules : {
        Expense
    },
    state : {
        showLoader : false
    }, 
    getters : {
        getShowLoader: state => state.showLoader,
    },
    mutations : {
        setLoader : (state,newLoader) => state.showLoader = newLoader 
    }, 
    actions : {
        updateLoader : ( {commit}, newLoader) => commit('setLoader',newLoader )
    }
});
export default Store;