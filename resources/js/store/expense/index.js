import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    expenses : [],
    paginationLinks : ''
};

export default{
    state,
    getters,
    mutations,
    actions
};
