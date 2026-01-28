<script setup>
const props = defineProps({
  title: { type: String, default: '' }
});
</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-left">
        <slot name="left" />
      </div>
      <div class="navbar-center">
        <slot name="center" />
      </div>
      <div class="navbar-right">
        <slot name="right" />
      </div>
    </div>
  </nav>
</template>
