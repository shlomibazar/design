import { createRouter, createWebHashHistory } from 'vue-router'

import home from './views/home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },


]


export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

