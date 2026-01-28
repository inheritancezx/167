<script setup>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

import logo from '../assets/kum.png'
import profilePic from '../assets/profile.jpg'

const router = useRouter()
const emit = defineEmits(['admin-portal'])

const navigate = (page) => {
  router.push({ name: page })
}
</script>

<template>
  <div class="dashboard user-page">
    <Navbar>
      <template #left>
        <button class="nav-button" @click="navigate('journal')">cyber journal</button>
        <button class="nav-button" @click="navigate('projects')">personal projects</button>
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
      <div class="about-container">
        <div class="about-profile">
          <div class="profile-zoom">
            <img :src="profilePic" alt="profile" class="profile-image" />
          </div>
        </div>
        <div class="about-content">
          <p class="about-greeting">hi! I'm</p>
          <h1 class="about-name">Fayza Aqila Bachtiar</h1>
        </div>
      </div>
    </main>
  </div>
</template>

