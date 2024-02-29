import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskList from '../views/TaskList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'TaskList',
    component: TaskList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
