import { ref } from 'vue'

export function useTextFormat(textareaRef, contentRef) {
  const showFormatMenu = ref(false)

  const toggleFormatMenu = () => {
    showFormatMenu.value = !showFormatMenu.value
  }

  const applyFormat = (format) => {
    const textarea = textareaRef.value
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = contentRef.value.substring(start, end)
    
    let formattedText = ''
    if (format === 'bold') {
      formattedText = `**${selectedText}**`
    } else if (format === 'italic') {
      formattedText = `*${selectedText}*`
    }
    
    contentRef.value = 
      contentRef.value.substring(0, start) + 
      formattedText + 
      contentRef.value.substring(end)
    
    showFormatMenu.value = false
  }

  return {
    showFormatMenu,
    toggleFormatMenu,
    applyFormat
  }
}
