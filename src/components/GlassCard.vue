<script setup>
const props = defineProps({
  title: { type: String, required: true },
  variant: { type: String, default: 'yellow' }, // 'yellow' | 'blue' | 'green'
  icon: { type: String, default: '' }
});
</script>

<template>
  <article :class="['glass-card', `glass-${props.variant}`]">
    <img v-if="props.icon" :src="props.icon" class="card-icon" alt="card icon" />
    <slot v-else name="icon" />
    <h2 class="card-title">{{ props.title }}</h2>
    <slot />
  </article>
</template>
