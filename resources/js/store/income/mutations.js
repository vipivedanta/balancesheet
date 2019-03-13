const mutations = {
    setAllIncomes : (state,allIncomes) => state.allIncomes = allIncomes,
    setPaginationLinks : (state,links) => state.paginationLinks = links,
    setPaginationLimit : (state,limit) => state.paginationLimit = limit
};
export default mutations;