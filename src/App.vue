<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AdminPortal from './components/AdminPortal.vue'

const showAdminPortal = ref(false)
const isAdminLoggedIn = ref(false)
const adminUsername = ref('')
const router = useRouter()

const handleAdminPortalOpen = () => { showAdminPortal.value = true }
const handleAdminPortalClose = () => { showAdminPortal.value = false }

const handleAdminLogin = (data) => {
  adminUsername.value = data.username
  isAdminLoggedIn.value = true
  router.push('/admin')
}

const handleAdminSignOut = () => {
  isAdminLoggedIn.value = false
  adminUsername.value = ''
  showAdminPortal.value = false
  router.push('/')
}
</script>

<template>
  <router-view @admin-portal="handleAdminPortalOpen" @sign-out="handleAdminSignOut" />

  <AdminPortal
    v-if="showAdminPortal && !isAdminLoggedIn"
    @close="handleAdminPortalClose"
    @login="handleAdminLogin"
  />
</template>
