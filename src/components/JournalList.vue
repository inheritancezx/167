<script setup>
import GlassCard from './GlassCard.vue'
import journal from '../assets/pen.png'

defineProps({
  entries: {
    type: Array,
    required: true
  }
})

defineEmits(['entry-click', 'entry-delete'])
</script>

<template>
  <section class="journal-list-section">
    <div class="search-bar glass glass-clear">
      <input type="text" class="search-input" placeholder="search here" />
    </div>
    
    <div class="journal-entries">
      <GlassCard 
        v-for="entry in entries" 
        :key="entry.id" 
        variant="green" 
        :icon="journal" 
        :title="entry.title"
        @click="$emit('entry-click', entry)"
      />
    </div>
  </section>
</template>

<style scoped>
.journal-list-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;
}

.journal-entries {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 0.5rem;
}

.journal-entries::-webkit-scrollbar {
  width: 8px;
}

.journal-entries::-webkit-scrollbar-track {
  background: transparent;
}

.journal-entries::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.journal-entries::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
