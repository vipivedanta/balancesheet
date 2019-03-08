<template>
    <div class="row">
        <div class="col-md-3">
            <input type="text" v-model="search.expense" class="form-control" placeholder="Expense" />
        </div>
        <div class="col-md-3">
            <input type="text" v-model="search.comments" class="form-control" placeholder="Comments" />
        </div>
        <div class="col-md-3">
            <input type="date" v-model="search.date" class="form-control" placeholder="Date" />
        </div>
        <div class="col-md-3">
            <input type="button" @click="filterExpenses" class="btn btn-danger" value="Search" />
        </div>
    </div>
</template>

<script>
export default {
    name : 'ExpenseFilter',
    props : [ 'search' ],
    methods : {
        filterExpenses(){
            this.$emit('filterQueryUpdated', this.search);
        }
    }
}
</script>

