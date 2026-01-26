<script setup>
import HeadingTitle from './components/HeadingTitle.vue'
import SearchBar from './components/SearchBar.vue'
import NavTabs from './components/NavTabs.vue'
import GlassCard from './components/GlassCard.vue'
import CatCorner from './components/CatCorner.vue'

import catHead from './assets/kumhead.png'
import logo from './assets/kum.png'
import journal from './assets/pen.png'
import project from './assets/puzzle.png'
</script>

<template>
  <main class="page">
    <CatCorner :src="catHead" alt="Cat Head" />

    <HeadingTitle text="welcome!" />

    <div class="page-content">
      <SearchBar placeholder="search here"/>
      <NavTabs />

      <section class="cards">
        <GlassCard variant="yellow" title="Started a new posisition!">
          <template #icon>
            <img :src="logo" class="card-icon" alt="cat icon" />
          </template>
        </GlassCard>
        <GlassCard variant="blue" title="Project <name> Update: new features!!">
          <template #icon>
            <img :src="project" class="card-icon" alt="cat icon" />
          </template>
        </GlassCard>
        <GlassCard variant="green" title="<journal name> just published!">
          <template #icon>
            <img :src="journal" class="card-icon" alt="cat icon" />
          </template>
        </GlassCard>
      </section>
    </div>
  </main>
</template>
