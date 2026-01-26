<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  tabs: { type: Array, default: () => ['cyber journal', 'personal projects', 'about me'] }
});

const route = useRoute();

const routesMap = {
  'cyber journal': '/journal',
  'personal projects': '/projects',
  'about me': '/about'
};

const isActive = (tab) => route.path === routesMap[tab];
</script>

<template>
  <nav class="tabs">
    <ul class="tabs-list">
      <li v-for="(t, i) in props.tabs" :key="i" class="tab-item" :class="{ active: isActive(t) }">
        <router-link :to="routesMap[t]" class="tab-link">{{ t }}</router-link>
        <span class="tab-underline" />
      </li>
    </ul>
  </nav>
</template>
