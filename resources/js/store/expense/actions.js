import axios from 'axios';

const actions = {
    
    /* save expense */
    saveExpense( {commit}, expense ){
        return axios.post( 'save-expense', expense );
    }, 

    /* get expenses */
    fetchExpenses( {commit }, filterParams ){
        return axios.get('get-expenses?page=' + params.page, filterParams ).then( (response) => {
            if(response.data.status){
                commit('setExpenses', response.data.expenses.data);
                commit('setPaginationLinks',response.data.links);
            }
        });
    }

};

export default actions;