import axios from 'axios';

const actions = {
    saveExpense( {commit}, expense ){
        return axios.post( 'save-expense', expense );
    }
};

export default actions;