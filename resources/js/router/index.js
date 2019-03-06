import Vue from 'vue';
import VueRouter from 'vue-router';
import UserRoutes from '../router/user';

Vue.use(VueRouter);
var AllRoutes = [];
AllRoutes = AllRoutes.concat(UserRoutes);

const router = new VueRouter({
    mode : 'history',
    routes : AllRoutes
});

export default router;