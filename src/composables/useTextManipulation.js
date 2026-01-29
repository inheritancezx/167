export function useTextManipulation(contentRef) {
  const addNumbering = () => {
    const lines = contentRef.value.split('\n')
    const lastLine = lines[lines.length - 1]
    
    if (lastLine === '' || lastLine.match(/^\d+\.\s/)) {
      const nextNum = lastLine === '' ? 1 : parseInt(lastLine.match(/^\d+/)[0]) + 1
      contentRef.value += `${nextNum}. `
    } else {
      contentRef.value += '\n1. '
    }
  }

  const addBulletPoint = () => {
    const lines = contentRef.value.split('\n')
    const lastLine = lines[lines.length - 1]
    
    if (lastLine === '') {
      contentRef.value += '• '
    } else {
      contentRef.value += '\n• '
    }
  }

  return {
    addNumbering,
    addBulletPoint
  }
}
