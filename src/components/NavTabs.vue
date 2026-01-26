<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: { type: Array, default: () => ['cyber journal', 'personal projects', 'about me :)'] }
});

const selectedIndex = ref(0);

const selectTab = (index) => {
  selectedIndex.value = index;
};
</script>

<template>
  <nav class="tabs">
    <ul class="tabs-list">
      <li v-for="(t, i) in props.tabs" :key="i" class="tab-item" :class="{ active: selectedIndex === i }">
        <a href="#" class="tab-link" @click.prevent="selectTab(i)">{{ t }}</a>
        <span class="tab-underline" />
      </li>
    </ul>
  </nav>
</template>
