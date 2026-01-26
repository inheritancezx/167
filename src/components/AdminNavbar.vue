<script setup>
const props = defineProps({
  title: { type: String, default: '' }
});
</script>

<template>
  <nav class="admin-navbar">
    <div class="admin-navbar-content">
      <div class="admin-navbar-left">
        <slot name="left">{{ props.title }}</slot>
      </div>
      <div class="admin-navbar-center">
        <slot></slot>
      </div>
      <div class="admin-navbar-right">
        <slot name="right" />
      </div>
    </div>
  </nav>
</template>
