<template>
    <div class="row expense-filter">
        <div class="col-md-3">
            <input type="text" v-model="search.expense" class="form-control" placeholder="--Expense--" />
        </div>
        <div class="col-md-3">
            <input type="text" v-model="search.comments" class="form-control" placeholder="--Comments--" />
        </div>
        <div class="col-md-3">
            <!--<input type="date" v-model="search.date" class="form-control" placeholder="Date" />-->
            <datepicker :input-class="'form-control'" :placeholder="'--Date--'" v-model="search.date"></datepicker>
        </div>
        <div class="col-md-3">
            <input type="button" @click="filterExpenses" class="btn btn-danger" value="Search" />
        </div>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';

export default {
    name : 'ExpenseFilter',
    props : [ 'search' ],
    methods : {
        filterExpenses(){
            this.$emit('filterQueryUpdated', this.search);
        }
    },
    components : {
        Datepicker
    }
}
</script>

<style>
    .expense-filter{
        margin-bottom: 10px
    }
</style>
