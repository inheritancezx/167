<script setup>
defineProps({
  pages: {
    type: Array,
    required: true
  },
  homeIcon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  }
})

defineEmits(['navigate'])
</script>

<template>
  <div class="navbar-nav">
    <template v-for="page in pages" :key="page.name">
      <button class="nav-button" @click="$emit('navigate', page.name)">
        {{ page.label }}
      </button>
    </template>
    <h1 v-if="title" class="page-title">{{ title }}</h1>
    <button class="nav-button home-btn" @click="$emit('navigate', 'home')">
      <img :src="homeIcon" alt="home" class="nav-icon" />
    </button>
  </div>
</template>

<style scoped>
.navbar-nav {
  display: contents;
}
</style>
