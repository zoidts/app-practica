


require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import LaravelPermissionToVueJS from 'laravel-permission-to-vuejs';
import VueRouter from 'vue-router'
import routes from './router';
const router = new VueRouter({
    mode: "history",
    routes
  })
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(LaravelPermissionToVueJS);



const app = new Vue({
    router,
    el: '#app',
});
