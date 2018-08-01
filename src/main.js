import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConf from './routerConf';
import App from './App.vue';

Vue.use(VueRouter);

new Vue({
    route: routerConf,
    render: h => {
        return h(App)
    }
}).$mount('#app');