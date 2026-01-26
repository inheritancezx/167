<script setup>
import { ref } from 'vue'
import HeadingTitle from './HeadingTitle.vue'
import SearchBar from './SearchBar.vue'
import NavTabs from './NavTabs.vue'
import GlassCard from './GlassCard.vue'
import CatCorner from './CatCorner.vue'

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

    <main class="page">
      <CatCorner :src="catHead" alt="Cat Head" />

      <h1 class="admin-title">lu mw ngedit apa bang?</h1>

      <div class="admin-cards-container">
        <div class="admin-card admin-card-green">
          <img :src="journal" class="admin-card-icon" alt="journal icon" />
          <h3 class="admin-card-title">si paling cybr</h3>
        </div>
        <div class="admin-card admin-card-blue">
          <img :src="project" class="admin-card-icon" alt="project icon" />
          <h3 class="admin-card-title">proyek kicik</h3>
        </div>
        <div class="admin-card admin-card-yellow">
          <img :src="logo" class="admin-card-icon" alt="cat icon" />
          <h3 class="admin-card-title">clumbang tuna</h3>
        </div>
      </div>
    </main>
  </div>
</template>

