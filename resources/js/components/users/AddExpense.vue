<template>
    
    <div>
        <div v-show="invalidForm" class="alert alert-danger">You haven't filled all the fields!</div>

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
            <textarea class="form-control"></textarea>
        </div>

        <div class="form-group">
            <input type="button" v-on:click="validateExpense" class="btn btn-info float-right" value="Save" />
        </div>
        </form>
    </div>

</template>

<script>
export default {
    name : 'AddExpense',
    data(){
        return {
                expense : {
                    expense : null,
                    amount : null,
                    comments : null
                },
                invalidForm : false
           }
    },
    methods : {
        validateExpense : function(){
            this.$validator.validateAll().then( (result) => {
                if(result){     
                    this.invalidForm = false;               
                    return;
                }
                this.invalidForm = true;               
            });
        }
    }
}
</script>
