require('./bootstrap');
window.Vue = require('vue');
import VeeValidate from 'vee-validate';
import router from './router';
import App from './components/App';

Vue.use(VeeValidate);

new Vue({
    render : h => h(App),
    router : router
}).$mount('#app');