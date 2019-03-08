<template>
    
    <div>
        <div v-show="invalidForm" class="alert alert-danger">You haven't filled all the fields!</div>
        <div v-show="saveFailure" class="alert alert-warning">Could not save the data.Please try after sometime</div>
        <div v-show="!saveFailure && apiResponse" class="alert alert-success">New expense details are saved.Click <router-link to="expenses">expenses</router-link> to see your expenses</div>

        <form method="POST" action="">
        <div class="form-group">
            <label>Expense</label>
            <input type="text" v-model="expense.expense" class="form-control" v-validate="'required'" name="expense" /> 
            <p class="text text-danger">{{ errors.first('expense') }}</p>
        </div>   
        <div class="form-group">
            <label>Amount</label>
            <input type="text" v-model="expense.amount" v-validate="'min_value:0.1'" name="amount" class="form-control" />
            <p class="text text-danger">{{ errors.first('amount') }}</p>
        </div>

        <div class="form-group">
            <label>Comment(Optional)</label>
            <textarea class="form-control" v-model="expense.comments"></textarea>
        </div>

        <div class="form-group">
            <input v-if="!showLoader" type="button" v-on:click="validateExpense" class="btn btn-info float-right" value="Save" />
            <input v-if="showLoader" type="button" class="btn btn-info disabled float-right" value="Saving.." />
        </div>
        </form>
    </div>

</template>

<script>

import { mapActions } from 'vuex';

export default {
    name : 'AddExpense',
    data(){
        return {
                expense : {
                    expense : null,
                    amount : null,
                    comments : null
                },
                invalidForm : false,
                showLoader : false,
                saveFailure : false,
                apiResponse : false
           }
    },
    methods : {
        ...mapActions(['saveExpense']),
        validateExpense : function(){
            this.$validator.validateAll().then( (result) => {
                if(result){     
                    this.invalidForm = false;   
                    this.showLoader = true;
                    this.saveExpense( this.expense ).then( (response) => {
                        this.showLoader = false;
                        this.saveFailure = !response.data.status;
                        this.apiResponse = response.data;
                    }); 
                    return;
                }
                this.invalidForm = true; 
            });
        }
    }
}
</script>
