<script setup>
const props = defineProps({
  title: { type: String, required: true },
  variant: { type: String, default: 'yellow' }, // 'yellow' | 'blue' | 'green'
});
</script>

<template>
  <article :class="['glass-card', `glass-${props.variant}`]">
    <slot name="icon" />
    <h2 class="card-title">{{ props.title }}</h2>
    <slot />
  </article>
</template>
