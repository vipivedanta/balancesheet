require('./bootstrap');
window.Vue = require('vue');
import Store from './store';
import VeeValidate from 'vee-validate';
import VueMoment from 'vue-moment';
import router from './router';
import App from './components/App';
import commonComponents from './components/base-components';



commonComponents.forEach(component => {
    Vue.component(component.name, component);
});

Vue.use(VeeValidate);
Vue.use(VueMoment);


new Vue({
    render : h => h(App),
    router : router,
    store : Store
}).$mount('#app');