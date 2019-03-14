<template>

    <main>

            <DangerMessage v-bind:trueCondition = "invalidForm">You haven't filled all the required fields!</DangerMessage>
            <DangerMessage v-bind:trueCondition = "saveFailure && saveFailure!=null">Sorry! Couldn't save the income details.Please try again</DangerMessage>
            <SuccessMessage v-bind:trueCondition = "!saveFailure && saveFailure!=null">Your transaction has been saved successfully!</SuccessMessage>

            <div class="form-group">
                <label>Title</label>
                <input type="text" name="title" v-model="income.title" class="form-control" v-validate="'required'" />
                <p class="text text-danger">{{ errors.first('title') }}</p>
            </div>

            <div class="form-group">
                <label>Amount</label>
                <input type="text" name="amount" v-model="income.amount" class="form-control"  v-validate="'required|min_value:0.1'" />
                <p class="text text-danger">{{ errors.first('amount') }}</p>
            </div>

            <div class="form-group">
                <label>Comments ( Optional )</label>
                <textarea name="comments" v-model="income.comments" class="form-control" ></textarea>
            </div>

            <div class="form-group">
                <input type="button" class="btn btn-success float-right" @click="validateForm" value="Save" />
            </div>

    </main>
    
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import axios from '../../axios';

export default {
    name : 'AddIncome',
    data(){
        return {
           invalidForm : false,
           saveFailure : null
        }
    },
    methods : {
        validateForm(){
            this.$validator.validateAll().then( validationStatus => {
                if(!validationStatus){
                    this.invalidForm = true;
                    return;
                }

                this.invalidForm = false;
                this.saveIncome().then( response => {
                    this.saveFailure = !response.data.status;
                });
            });
        },
        ...mapActions(['saveIncome'])
    },
    computed : {
        ...mapGetters(['income'])
    }
}
</script>
