import Vue from 'vue';
import Vuex from 'vuex';
import Expense from './expense';

Vue.use(Vuex);
const Store = new Vuex.Store({
    modules : {
        Expense
    }
});
export default Store;