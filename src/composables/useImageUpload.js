import { ref } from 'vue'

export function useImageUpload(contentRef) {
  const imageInput = ref(null)

  const handleAddImage = () => {
    imageInput.value?.click()
  }

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const imageMarkdown = `\n![Image](${e.target.result})\n`
      contentRef.value += imageMarkdown
    }
    reader.readAsDataURL(file)
  }

  return {
    imageInput,
    handleAddImage,
    handleImageUpload
  }
}
