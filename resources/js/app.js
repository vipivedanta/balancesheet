require('./bootstrap');
window.Vue = require('vue');

import App from './components/App';

new Vue({
    render : h => h(App)
}).$mount('#app');