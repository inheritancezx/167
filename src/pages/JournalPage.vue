<script setup>
import SearchBar from '../components/SearchBar.vue'
import NavTabs from '../components/NavTabs.vue'

import journal from '../assets/pen.png'

const tabs = ['cyber journal', 'personal projects', 'about me']
const emit = defineEmits(['admin-portal'])

const journalEntries = [
  { id: 1, title: '<journal name> just published!' },
  { id: 2, title: '<journal name> just published!' },
  { id: 3, title: '<journal name> just published!' },
  { id: 4, title: '<journal name> just published!' },
  { id: 5, title: '<journal name> just published!' }
]
</script>

<template>
  <main class="journal-page">
    <header class="journal-navbar">
      <h1 class="journal-title">cyber journal</h1>
      <div class="journal-nav-tabs">
        <NavTabs :tabs="tabs" />
      </div>
    </header>

    <div class="journal-search">
      <SearchBar placeholder="search here" @admin-portal="emit('admin-portal')" />
    </div>

    <section class="journal-list">
      <article v-for="entry in journalEntries" :key="entry.id" class="journal-card">
        <img :src="journal" class="journal-card-icon" alt="journal icon" />
        <div class="journal-card-text">{{ entry.title }}</div>
      </article>
    </section>
  </main>
</template>
