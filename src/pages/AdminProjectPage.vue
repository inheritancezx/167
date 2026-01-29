<script setup>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import ProjectList from '../components/ProjectList.vue'
import ProjectForm from '../components/ProjectForm.vue'
import { useProjectEntries } from '../composables/useProjectEntries'

import logo from '../assets/kum.png'

const router = useRouter()
const { projectEntries, addEntry } = useProjectEntries()

const navigate = (page) => {
  router.push({ name: page })
}

const handleEntryClick = (entry) => {
  console.log('Project clicked:', entry)
}

const handleSaveEntry = (formData) => {
  addEntry({
    title: formData.title,
    content: formData.content
  })
}

const handleCancel = () => {
  console.log('Form cancelled')
}
</script>

<template>
  <div class="dashboard admin-project-page">
    <Navbar>
      <template #left>
        <h1 class="page-title">personal projects</h1>
      </template>
      <template #right>
        <button class="nav-button" @click="navigate('admin')">back</button>
      </template>
    </Navbar>

    <main class="admin-project-main">
      <div class="admin-project-container">
        <ProjectList 
          :entries="projectEntries" 
          @entry-click="handleEntryClick"
        />

        <ProjectForm 
          @save="handleSaveEntry"
          @cancel="handleCancel"
        />
      </div>
    </main>
  </div>
</template>
