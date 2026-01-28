<script setup>
import HeadingTitle from '../components/HeadingTitle.vue'
import SearchBar from '../components/SearchBar.vue'
import NavTabs from '../components/NavTabs.vue'
import GlassCard from '../components/GlassCard.vue'
import CatCorner from '../components/CatCorner.vue'

import catHead from '../assets/kumhead.png'
import logo from '../assets/kum.png'
import journal from '../assets/pen.png'
import project from '../assets/puzzle.png'

const tabs = ['cyber journal', 'personal projects', 'about me']
const emit = defineEmits(['admin-portal'])
</script>

<template>
  <main class="home-page">
    <div class="home-sticky">
      <HeadingTitle text="welcome!" />
      <CatCorner :src="catHead" alt="Cat Head" />
      <SearchBar placeholder="search here" @admin-portal="emit('admin-portal')" class="home-search" />
      <NavTabs :tabs="tabs" />
    </div>

    <div class="home-scrollable">
      <section class="cards">
        <GlassCard variant="yellow" title="Started a new posisition!" :icon="logo" />
        <GlassCard variant="blue" title="Project <name> Update: new features!!" :icon="project" />
        <GlassCard variant="green" title="<journal name> just published!" :icon="journal" />
          <GlassCard variant="blue" title="Project <name> Update: new features!!" :icon="project" />
      </section>
    </div>
  </main>
</template>
