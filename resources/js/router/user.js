/* Components */
import Home from '../components/users/Home';
import AddExpense from '../components/users/AddExpense';
import ExpenseList from '../components/users/ExpenseList';

const UserRoutes = [
    { path : '/home',component : Home },
    { path : '/add-expense', component : AddExpense },
    { path : '/expenses', component : ExpenseList }
];
export default UserRoutes; 