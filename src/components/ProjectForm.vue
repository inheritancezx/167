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
  },
  initialLink: {
    type: String,
    default: ''
  },
  initialCover: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['save', 'cancel', 'publish'])

const formData = ref({
  title: props.initialTitle,
  content: props.initialContent,
  link: props.initialLink,
  cover: props.initialCover
})

const textareaRef = ref(null)
const contentRef = computed({
  get: () => formData.value.content,
  set: (val) => formData.value.content = val
})

const coverImageInput = ref(null)

// Composables
const { showFormatMenu, toggleFormatMenu, applyFormat } = useTextFormat(textareaRef, contentRef)
const { imageInput, handleAddImage, handleImageUpload } = useImageUpload(contentRef)
const { addNumbering, addBulletPoint } = useTextManipulation(contentRef)

// Project cover image handler
const handleAddCoverImage = () => {
  coverImageInput.value?.click()
}

const handleCoverImageUpload = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    formData.value.cover = e.target.result
  }
  reader.readAsDataURL(file)
}

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
  <section class="new-project-section">
    <h2 class="section-title">New Project</h2>
    
    <div class="project-form">
      <div class="project-form-content">
        <div class="form-group">
          <input 
            v-model="formData.title"
            type="text" 
            class="project-input" 
            placeholder="project name"
          />
        </div>

        <div class="form-group">
          <textarea 
            ref="textareaRef"
            v-model="formData.content"
            class="project-textarea" 
            placeholder="project description"
          ></textarea>
        </div>

        <div class="form-group">
          <input 
            v-model="formData.link"
            type="text" 
            class="project-input" 
            placeholder="project link"
          />
        </div>

        <div class="form-group">
          <input 
            ref="coverImageInput"
            type="file" 
            accept="image/*" 
            style="display: none" 
            @change="handleCoverImageUpload"
          />
          <button @click="handleAddCoverImage" class="cover-upload-button">
            <span v-if="!formData.cover" class="cover-placeholder">project cover</span>
            <img v-else :src="formData.cover" alt="project cover preview" class="cover-preview" />
          </button>
        </div>

        <input 
          ref="imageInput"
          type="file" 
          accept="image/*" 
          style="display: none" 
          @change="handleImageUpload"
        />
      </div>

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
