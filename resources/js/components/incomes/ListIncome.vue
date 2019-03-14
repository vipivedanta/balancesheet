<template>

<main>

    <info-message trueCondition="allIncomes.length > 0">Your credit transactions</info-message>

    <table v-if="allIncomes.length > 0" class="table table-bordered table-condensed table-striped">
    <tr>
        <td>Title</td>
        <td>Amount</td>
        <td>Comments</td>
        <td>Date</td>
    </tr>   
    <tr v-for="(income,key) in allIncomes" :key="key">
        <td>{{ income.title }}</td>
        <td class="text-right">{{ income.amount }}</td>
        <td>{{ income.comments }}</td>
        <td>{{ income.created_at | moment('D MMMM,YYYY') }}</td>
    </tr>
    </table>

    <div @click="paginateIncomes($event)" class="float-right" v-html="paginationLinks"></div>
</main>
    
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
//import InfoMessage from '../../components/messages/InfoMessage';

export default {
    name : 'ListIncome',
    /*components :{
        InfoMessage
    },*/
    computed : {
        ...mapGetters( ['allIncomes','paginationLinks'] )
    },
    methods : {
        ...mapActions(['getIncomes','setPaginationLimit']),
        paginateIncomes(e){
            e.preventDefault();
            this.setPaginationLimit( parseInt(e.target.innerHTML) );
            this.getIncomes();            
        }
    },
    created(){
        this.getIncomes()
    }
}
</script>
