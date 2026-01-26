<script setup>
import { ref } from 'vue'
import HeadingTitle from '../components/HeadingTitle.vue'
import SearchBar from '../components/SearchBar.vue'
import NavTabs from '../components/NavTabs.vue'
import AdminCard from '../components/AdminCard.vue'
import CatCorner from '../components/CatCorner.vue'

import catHead from '../assets/kumhead.png'
import logo from '../assets/kum.png'
import journal from '../assets/pen.png'
import project from '../assets/puzzle.png'

const emit = defineEmits(['sign-out'])

const adminUsername = ref('')

defineProps({
  username: { type: String, default: 'Admin' }
})

const handleSignOut = () => {
  emit('sign-out')
}
</script>

<template>
  <div class="admin-dashboard">
    <nav class="admin-navbar">
      <div class="admin-navbar-content">
        <button class="admin-signout-btn" @click="handleSignOut">sign out</button>
      </div>
    </nav>

    <main class="admin-page">
      <CatCorner :src="catHead" alt="Cat Head" />

      <HeadingTitle text="lu mw ngedit apa bang?" />

        <div class="admin-cards-container">
          <AdminCard variant="green" :icon="journal" title="si paling cybr" />
          <AdminCard variant="blue" :icon="project" title="proyek kicik" />
          <AdminCard variant="yellow" :icon="logo" title="clumbang tuna" />
        </div>
    </main>
  </div>
</template>
