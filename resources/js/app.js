require('./bootstrap');
window.Vue = require('vue');
import router from './router';
import App from './components/App';

new Vue({
    render : h => h(App),
    router : router
}).$mount('#app');