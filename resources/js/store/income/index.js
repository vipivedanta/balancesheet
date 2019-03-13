import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
    income : {
        title : null,
        amount : null,
        comments : null
    },
    allIncomes : {},
    paginationLinks : '',
    paginationLimit : 0
}

export default{
    state,
    getters,
    mutations,
    actions
}