const  mutations = {
    setExpenses : ( state , expenses ) => state.expenses = expenses,
    setPaginationLinks : (state,links) => state.paginationLinks = links
};

export default mutations;