import axios from '../../axios';

const actions = {
    
    /* save expense */
    saveExpense( {commit}, expense ){
        return axios.post( 'save-expense', expense );
    }, 

    /* get expenses */
    fetchExpenses( {commit }, filterParams ){
        return axios.get('get-expenses?page=' + filterParams.page, { params : {...filterParams}} ).then( (response) => {
            if(response.data.status){
                commit('setExpenses', response.data.expenses.data);
                commit('setPaginationLinks',response.data.links);
            }
        });
    },

    /* get expense names */
    getExpenseNames({commit}){
        return axios.get('expense-names').then( (response) => commit('setExpenseNames',response.data.expenses));
    }

};

export default actions;