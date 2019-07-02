import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCars from './components/AppCars'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/cars'},
    { path: '/cars', component: AppCars }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})