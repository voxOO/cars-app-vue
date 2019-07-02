import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCars from './components/AppCars'
import AddCar from './components/AddCar'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/cars'},
    { path: '/cars', component: AppCars },
    { path: '/add' , component: AddCar }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})