<script setup>
const props = defineProps({
  placeholder: { type: String, default: 'search here' }
});

import search from '../assets/search.png';
</script>

<template>
  <div class="search-bar glass glass-clear">
    <span class="search-icon" aria-hidden="true"><img :src="search" class="search-icon" alt="search icon" /></span>
    <input class="search-input" :placeholder="props.placeholder" aria-label="Search" />
  </div>
</template>
