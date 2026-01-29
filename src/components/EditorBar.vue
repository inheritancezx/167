<script setup>
import FormatMenu from './FormatMenu.vue'

import gardenia from '../assets/gardenia.png'
import daffodils from '../assets/daffodils.png'
import roses from '../assets/roses.png'
import orchid from '../assets/orchid.png'
import watercan from '../assets/watercan.png'
import bird from '../assets/bird.png'
import shovel from '../assets/shovel.png'

defineProps({
  showFormatMenu: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits([
  'add-image',
  'toggle-format',
  'apply-format',
  'add-numbering',
  'add-bullet',
  'cancel',
  'save',
  'publish'
])
</script>

<template>
  <div class="journal-editor-bar">
    <div class="editor-left">
      <button class="editor-button" @click="emit('add-image')" data-tooltip="Add Image">
        <img :src="gardenia" alt="gardenia" class="editor-icon" />
      </button>
      <div class="format-menu-container">
        <button class="editor-button" @click="emit('toggle-format')" data-tooltip="Text Format">
          <img :src="daffodils" alt="daffodils" class="editor-icon" />
        </button>
        <FormatMenu :show="showFormatMenu" @format="emit('apply-format', $event)" />
      </div>
      <button class="editor-button" @click="emit('add-numbering')" data-tooltip="Numbering">
        <img :src="roses" alt="roses" class="editor-icon" />
      </button>
      <button class="editor-button" @click="emit('add-bullet')" data-tooltip="Bullet Point">
        <img :src="orchid" alt="orchid" class="editor-icon" />
      </button>
    </div>
    <div class="editor-right">
      <button class="editor-button" @click="emit('cancel')" data-tooltip="Cancel">
        <img :src="shovel" alt="shovel" class="editor-icon" />
      </button>
      <button class="editor-button" @click="emit('save')" data-tooltip="Save">
        <img :src="watercan" alt="watercan" class="editor-icon" />
      </button>
      <button class="editor-button" @click="emit('publish')" data-tooltip="Publish">
        <img :src="bird" alt="bird" class="editor-icon" />
      </button>
    </div>
  </div>
</template>
