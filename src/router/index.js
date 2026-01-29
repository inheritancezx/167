import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import JournalPage from '../pages/JournalPage.vue'
import ProjectPage from '../pages/ProjectPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import AdminPage from '../pages/AdminPage.vue'
import AdminJournalPage from '../pages/AdminJournalPage.vue'
import AdminProjectPage from '../pages/AdminProjectPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/journal', name: 'journal', component: JournalPage },
  { path: '/projects', name: 'projects', component: ProjectPage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/admin', name: 'admin', component: AdminPage },
  { path: '/admin/journal', name: 'admin-journal', component: AdminJournalPage },
  { path: '/admin/projects', name: 'admin-projects', component: AdminProjectPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
