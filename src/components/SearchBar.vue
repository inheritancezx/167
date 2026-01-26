<script setup>
import { ref } from 'vue';

const props = defineProps({
  placeholder: { type: String, default: 'search here' }
});

const emit = defineEmits(['admin-portal']);

import search from '../assets/search.png';

const searchInput = ref('');
const ADMIN_KEYWORD = 'buttercup'; 
const handleSearch = (e) => {
  searchInput.value = e.target.value;
  
  // Check if the input matches the admin keyword
  if (searchInput.value.toLowerCase() === ADMIN_KEYWORD.toLowerCase()) {
    emit('admin-portal');
    searchInput.value = ''; 
  }
};
</script>

<template>
  <div class="search-bar glass glass-clear">
    <span class="search-icon" aria-hidden="true"><img :src="search" class="search-icon" alt="search icon" /></span>
    <input 
      class="search-input" 
      :placeholder="props.placeholder" 
      aria-label="Search"
      v-model="searchInput"
      @input="handleSearch"
    />
  </div>
</template>
