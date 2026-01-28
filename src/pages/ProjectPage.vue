<script setup>
import { useRouter } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import Navbar from '../components/Navbar.vue'
import GlassCard from '../components/GlassCard.vue'

import project from '../assets/puzzle.png'
import logo from '../assets/kum.png'

const router = useRouter()
const tabs = ['cyber journal', 'personal projects', 'about me']
const emit = defineEmits(['admin-portal', 'navigate'])

const navigate = (page) => {
  router.push({ name: page })
}

const projectEntries = [
  { id: 1, title: '<project name> just completed!' },
  { id: 2, title: '<project name> just completed!' },
  { id: 3, title: '<project name> just completed!' },
  { id: 4, title: '<project name> just completed!' },
  { id: 5, title: '<project name> just completed!' }
]
</script>

<template>
  <div class="dashboard user-page">
    <Navbar>
      <template #left>
        <button class="nav-button" @click="navigate('journal')">cyber journal</button>
      </template>
      <template #center>
        <h1 class="page-title">personal projects</h1>
      </template>
      <template #right>
        <button class="nav-button" @click="navigate('about')">about me</button>
        <button class="nav-button home-btn" @click="navigate('home')">
          <img :src="logo" alt="home" class="nav-icon" />
        </button>
      </template>
    </Navbar>

    <main class="journal-page">
        <SearchBar placeholder="search here" @admin-portal="emit('admin-portal')" />

        <section class="cards">
            <GlassCard v-for="entry in projectEntries" :key="entry.id" variant="blue" :icon="project" :title="entry.title" />
        </section>
    </main>
  </div>
</template>
