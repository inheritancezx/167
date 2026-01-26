<script setup>
const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  variant: { type: String, default: 'green' } // green | blue | yellow
});
</script>

<template>
  <article :class="['admin-glass-card', `admin-glass-${props.variant}`]">
    <img :src="props.icon" class="admin-glass-icon" alt="admin card icon" />
    <h3 class="admin-glass-title">{{ props.title }}</h3>
  </article>
</template>
