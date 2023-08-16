import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import('../views/ExperiencesView.vue')
  },
  {
    path: '/projets',
    name: 'projets',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/projet/:projectName',
    name: 'projet',
    component: () => import('../views/ProjectView.vue'),
    props: route => ({ projectName: route.params.projectName })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
