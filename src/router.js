import { createRouter, createWebHashHistory } from 'vue-router'


import Result from './views/Result.jsx'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/result',
      component: Result
    }
  ]
})