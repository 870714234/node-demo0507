import VueRouter from 'vue-router';
import modalAlarm from './page/modal-alarm.vue';

export default new VueRouter({
    routes: [{
        path: '',
        component: modalAlarm
    },{
        path: '/',
        component: modalAlarm
    }]
})

