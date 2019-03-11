const getters = {
    getExpenses : state => state.expenses,
    getPaginationLinks : state => state.paginationLinks,
    expenseNames : state => state.expenseNames
};

export default getters;