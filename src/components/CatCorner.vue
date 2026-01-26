<script setup>
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'cat' }
})
</script>

<template>
  <div class="cat-corner" aria-hidden="true">
    <img :src="props.src" :alt="props.alt" class="cat-image" />
  </div>
</template>
