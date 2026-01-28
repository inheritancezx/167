<script setup>
import { useRouter } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import Navbar from '../components/Navbar.vue'
import GlassCard from '../components/GlassCard.vue'

import journal from '../assets/pen.png'
import logo from '../assets/kum.png'

const router = useRouter()
const tabs = ['cyber journal', 'personal projects', 'about me']
const emit = defineEmits(['admin-portal', 'navigate'])

const navigate = (page) => {
  router.push({ name: page })
}

const journalEntries = [
  { id: 1, title: '<journal name> just published!' },
  { id: 2, title: '<journal name> just published!' },
  { id: 3, title: '<journal name> just published!' },
  { id: 4, title: '<journal name> just published!' },
  { id: 5, title: '<journal name> just published!' }
]
</script>

<template>
  <div class="dashboard user-page">
    <Navbar>
      <template #left>
        <h1 class="page-title">cyber journal</h1>
      </template>
      <template #center>
      </template>
      <template #right>
        <button class="nav-button" @click="navigate('projects')">personal projects</button>
        <button class="nav-button" @click="navigate('about')">about me</button>
        <button class="nav-button home-btn" @click="navigate('home')">
          <img :src="logo" alt="home" class="nav-icon" />
        </button>
      </template>
    </Navbar>

    <main class="journal-page">
        <SearchBar placeholder="search here" @admin-portal="emit('admin-portal')" />

        <section class="cards">
            <GlassCard v-for="entry in journalEntries" :key="entry.id" variant="green" :icon="journal" :title="entry.title" />
        </section>
    </main>
  </div>
</template>
