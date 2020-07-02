import Vue from 'vue'
//import App from './App.vue'
import VueRouter from 'vue-router'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

import Home from './paginas/Home.vue';
const Contato = {template: '<p>Página de Contato</p>'}
const SemPagina = {template: '<h1>Pagina não existe</h1>'}

const routes = [
  {path: '/', component: Home},
  {path: '/contato', component: Contato}
]

const router = new VueRouter({
  routes
})



const app = new Vue({
  router
}).$mount('#app')