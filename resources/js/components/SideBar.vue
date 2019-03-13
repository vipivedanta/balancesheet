<template>
    <ul class="list-group">
        <li class="list-group-item"><router-link to="/add-expense">Add Expense</router-link></li>
        <li class="list-group-item"><router-link to="/expenses">My Expenses</router-link></li>
        <li class="list-group-item"><router-link to="/add-income">Add Income</router-link></li>
        <li class="list-group-item"><router-link to="/my-incomes">My Incomes</router-link></li>
    </ul>    
</template>
<script>
export default {
    name : 'SideBar'
}
</script>
