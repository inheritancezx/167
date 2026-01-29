<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeadingTitle from '../components/HeadingTitle.vue'
import AdminCard from '../components/AdminCard.vue'
import CatCorner from '../components/CatCorner.vue'
import Navbar from '../components/Navbar.vue'

import catHead from '../assets/kumhead.png'
import logo from '../assets/kum.png'
import journal from '../assets/pen.png'
import project from '../assets/puzzle.png'

const router = useRouter()
const emit = defineEmits(['sign-out'])

const adminUsername = ref('')

defineProps({
  username: { type: String, default: 'Admin' }
})

const handleSignOut = () => {
  emit('sign-out')
}

const handleCardClick = (cardTitle) => {
  if (cardTitle === 'si paling cybr') {
    router.push({ name: 'admin-journal' })
  } else if (cardTitle === 'proyek kicik') {
    router.push({ name: 'admin-projects' })
  }
}
</script>

<template>
  <div class="dashboard">
    <Navbar>
      <template #left>
        <button class="admin-signout-btn" @click="handleSignOut">sign out</button>
      </template>
    </Navbar>

    <main class="admin-page">
      <CatCorner :src="catHead" alt="Cat Head" />

      <HeadingTitle text="lu mw ngedit apa bang?" />

        <div class="admin-cards-container">
          <div @click="handleCardClick('si paling cybr')" style="cursor: pointer;">
            <AdminCard variant="green" :icon="journal" title="si paling cybr" />
          </div>
          <div @click="handleCardClick('proyek kicik')" style="cursor: pointer;">
            <AdminCard variant="blue" :icon="project" title="proyek kicik" />
          </div>
          <AdminCard variant="yellow" :icon="logo" title="clumbang tuna" />
        </div>
    </main>
  </div>
</template>
