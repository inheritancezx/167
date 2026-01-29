<script setup>
import { ref, computed } from 'vue'
import EditorBar from './EditorBar.vue'
import { useTextFormat } from '../composables/useTextFormat'
import { useImageUpload } from '../composables/useImageUpload'
import { useTextManipulation } from '../composables/useTextManipulation'

const props = defineProps({
  initialTitle: {
    type: String,
    default: ''
  },
  initialContent: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['save', 'cancel', 'publish'])

const formData = ref({
  title: props.initialTitle,
  content: props.initialContent
})

const textareaRef = ref(null)
const contentRef = computed({
  get: () => formData.value.content,
  set: (val) => formData.value.content = val
})

// Composables
const { showFormatMenu, toggleFormatMenu, applyFormat } = useTextFormat(textareaRef, contentRef)
const { imageInput, handleAddImage, handleImageUpload } = useImageUpload(contentRef)
const { addNumbering, addBulletPoint } = useTextManipulation(contentRef)

// Actions
const handleSave = () => {
  emit('save', formData.value)
}

const handleCancel = () => {
  emit('cancel')
  formData.value = { title: '', content: '' }
}

const handlePublish = () => {
  emit('publish', formData.value)
}
</script>

<template>
  <section class="new-journal-section">
    <h2 class="section-title">New Journal</h2>
    
    <div class="journal-form">
      <div class="form-group">
        <input 
          v-model="formData.title"
          type="text" 
          class="journal-input journal-title-input" 
          placeholder="Title"
        />
      </div>

      <div class="form-group">
        <textarea 
          ref="textareaRef"
          v-model="formData.content"
          class="journal-textarea" 
          placeholder="text here"
        ></textarea>
      </div>

      <input 
        ref="imageInput"
        type="file" 
        accept="image/*" 
        style="display: none" 
        @change="handleImageUpload"
      />

      <EditorBar
        :show-format-menu="showFormatMenu"
        @add-image="handleAddImage"
        @toggle-format="toggleFormatMenu"
        @apply-format="applyFormat"
        @add-numbering="addNumbering"
        @add-bullet="addBulletPoint"
        @cancel="handleCancel"
        @save="handleSave"
        @publish="handlePublish"
      />
    </div>
  </section>
</template>
