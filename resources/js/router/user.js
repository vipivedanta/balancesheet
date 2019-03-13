/* Components */
import Home from '../components/users/Home';
import AddExpense from '../components/users/AddExpense';
import ExpenseList from '../components/users/ExpenseList';
import AddIncome from '../components/incomes/AddIncome';
import ListIncome from '../components/incomes/ListIncome';

const UserRoutes = [
    { path : '/home',component : Home },
    { path : '/add-expense', component : AddExpense },
    { path : '/expenses', component : ExpenseList },
    { path : '/add-income', component : AddIncome },
    { path : '/my-incomes', component : ListIncome },
];
export default UserRoutes; 