<script setup>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import JournalList from '../components/JournalList.vue'
import JournalForm from '../components/JournalForm.vue'
import { useJournalEntries } from '../composables/useJournalEntries'

import logo from '../assets/kum.png'

const router = useRouter()
const { journalEntries, addEntry } = useJournalEntries()

const navigate = (page) => {
  router.push({ name: page })
}

const handleEntryClick = (entry) => {
  // Handle entry selection if needed
  console.log('Entry clicked:', entry)
}

const handleSaveEntry = (formData) => {
  addEntry({
    title: formData.title,
    content: formData.content
  })
}

const handleCancel = () => {
  // Handle cancel if needed
  console.log('Form cancelled')
}
</script>

<template>
  <div class="dashboard admin-journal-page">
    <Navbar>
      <template #left>
        <h1 class="page-title">cyber journal</h1>
      </template>
      <template #right>
        <button class="nav-button" @click="navigate('admin')">back</button>
      </template>
    </Navbar>

    <main class="admin-journal-main">
      <div class="admin-journal-container">
        <JournalList 
          :entries="journalEntries" 
          @entry-click="handleEntryClick"
        />

        <JournalForm />
      </div>
    </main>
  </div>
</template>
