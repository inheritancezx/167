import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import JournalPage from '../pages/JournalPage.vue'
import AdminPage from '../pages/AdminPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/journal', name: 'journal', component: JournalPage },
  { path: '/projects', name: 'projects', component: HomePage },
  { path: '/about', name: 'about', component: HomePage },
  { path: '/admin', name: 'admin', component: AdminPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
