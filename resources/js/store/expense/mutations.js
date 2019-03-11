const  mutations = {
    setExpenses : ( state , expenses ) => state.expenses = expenses,
    setPaginationLinks : (state,links) => state.paginationLinks = links,
    setExpenseNames : (state,names) => state.expenseNames = names,
};

export default mutations;