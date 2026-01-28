<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  greeting: {
    type: String,
    default: "hi! I'm"
  }
})
</script>

<template>
  <div class="about-container">
    <div class="about-profile">
      <div class="profile-zoom">
        <img :src="image" :alt="`${name} profile`" class="profile-image" />
      </div>
    </div>
    <div class="about-content">
      <p class="about-greeting">{{ greeting }}</p>
      <h1 class="about-name">{{ name }}</h1>
    </div>
  </div>
</template>
