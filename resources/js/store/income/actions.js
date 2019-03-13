import axios from '../../axios';

const actions = {

    /* save income */
    saveIncome({commit,state}){
        return axios.post('save-income',state.income)
    },

    /* get all incomes */
    getIncomes({commit,state}){
        axios.post('get-all-incomes?page=' + state.paginationLimit).then( response => {
            commit('setAllIncomes',response.data.incomes.data);
            commit('setPaginationLinks',response.data.links);
        });
    },

    /* update pagination limit */
    setPaginationLimit( {commit},limit ){
        commit('setPaginationLimit',limit);       
    }

};

export default actions;