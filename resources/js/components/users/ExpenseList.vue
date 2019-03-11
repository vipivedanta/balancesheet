<template>
      <div>

        <div v-if="getExpenses.length>0 && !showLoader" class="alert alert-info">Your expenses so far</div>
        <div v-if="showLoader" class="alert alert-info">Loading expenses...</div>
        <ExpenseFilter v-bind:search="search" @filterQueryUpdated="showExpenses"></ExpenseFilter>
        
        <div v-if="getExpenses.length==0" class="alert alert-warning">No expenses found</div>

        <table v-if="getExpenses.length>0" class="table table-bordered table-striped table-condensed">
        <thead>
        <tr>
        <th scope="col">Date</th>
        <th scope="col">Expense</th>
        <th scope="col">Amount</th>
        <th scope="col">Comments</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(expense,key) in getExpenses" v-bind:key="key">
        <td>{{ expense.created_at | moment('DD MMMM,YYYY') }}</td>
        <td>{{ expense.expense }}</td>
        <td class="text-right">{{ expense.amount }}</td>
        <td>{{ expense.comments }}</td>
        </tr>
        </tbody>
        </table>

        <div @click="pagainteExpenses($event)" v-html="getPaginationLinks" class="float-right"></div>

      </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import ExpenseFilter from './ExpenseFilter';

export default {
    name : 'ExpenseList',
    components : {
      ExpenseFilter
    },
    data(){
      return {
          search : {
              expenses : null,
              comments : null, 
              date : null,
              page : 0
          },
          expensesReady : false,
          showLoader : false
      }
    },
    methods : {
      ...mapActions(['fetchExpenses']),
      showExpenses(){
        this.showLoader = true;
        this.fetchExpenses( this.search ).then( (response) => {
            this.expensesReady = true;
            this.showLoader = false;
        });
      },
      pagainteExpenses(e){
        e.preventDefault();
        this.search.page = parseInt(e.target.innerHTML);
        this.showExpenses();
      }
    },
    created(){
      this.showExpenses();
    },
    computed : {
      ...mapGetters(['getExpenses','getPaginationLinks'])
    }
}
</script>
