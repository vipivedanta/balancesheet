import Vue from 'vue';
import Vuex from 'vuex';
import Expense from './expense';
import Income from './income';

Vue.use(Vuex);
const Store = new Vuex.Store({
    modules : {
        Expense,
        Income
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