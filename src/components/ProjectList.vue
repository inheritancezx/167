<script setup>
import GlassCard from './GlassCard.vue'
import project from '../assets/puzzle.png'

defineProps({
  entries: {
    type: Array,
    required: true
  }
})

defineEmits(['entry-click', 'entry-delete'])
</script>

<template>
  <section class="project-list-section">
    <div class="search-bar glass glass-clear">
      <input type="text" class="search-input" placeholder="search here" />
    </div>
    
    <div class="project-entries">
      <GlassCard 
        v-for="entry in entries" 
        :key="entry.id" 
        variant="blue" 
        :icon="project" 
        :title="entry.title"
        @click="$emit('entry-click', entry)"
      />
    </div>
  </section>
</template>

<style scoped>
.project-list-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;
}

.project-entries {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 0.5rem;
}

.project-entries::-webkit-scrollbar {
  width: 8px;
}

.project-entries::-webkit-scrollbar-track {
  background: transparent;
}

.project-entries::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.project-entries::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
