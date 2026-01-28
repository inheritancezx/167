<script setup>
import { usePageNavigation } from '../composables/usePageNavigation'
import Navbar from '../components/Navbar.vue'
import ProfileSection from '../components/ProfileSection.vue'

import logo from '../assets/kum.png'
import profilePic from '../assets/profile.jpg'

const { navigate } = usePageNavigation()
const emit = defineEmits(['admin-portal'])

const navPages = [
  { name: 'journal', label: 'cyber journal' },
  { name: 'projects', label: 'personal projects' }
]

const profileData = {
  image: profilePic,
  name: 'Fayza Aqila Bachtiar',
  greeting: "hi! I'm"
}
</script>

<template>
  <div class="dashboard user-page">
    <Navbar>
      <template #left>
        <button 
          v-for="page in navPages" 
          :key="page.name"
          class="nav-button" 
          @click="navigate(page.name)"
        >
          {{ page.label }}
        </button>
      </template>
      <template #center>
      </template>
      <template #right>
        <h1 class="page-title">about me</h1>
        <button class="nav-button home-btn" @click="navigate('home')">
          <img :src="logo" alt="home" class="nav-icon" />
        </button>
      </template>
    </Navbar>

    <main class="about-page">
      <ProfileSection 
        :image="profileData.image"
        :name="profileData.name"
        :greeting="profileData.greeting"
      />
    </main>
  </div>
</template>

