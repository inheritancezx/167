<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['format'])

const handleFormat = (format) => {
  emit('format', format)
}
</script>

<template>
  <div v-if="show" class="format-menu">
    <button @click="handleFormat('bold')" class="format-option">Bold</button>
    <button @click="handleFormat('italic')" class="format-option">Italic</button>
  </div>
</template>
