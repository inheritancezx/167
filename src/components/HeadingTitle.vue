<script setup>
defineProps({
  text: { type: String, default: 'welcome!' }
});
</script>

<template>
  <h1 class="welcome-title">{{ text }}</h1>
</template>
