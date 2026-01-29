import { ref } from 'vue'

export function useProjectEntries() {
  const projectEntries = ref([
    { id: 1, title: '<project name> just completed!' },
    { id: 2, title: '<project name> just completed!' },
    { id: 3, title: '<project name> just completed!' },
    { id: 4, title: '<project name> just completed!' },
    { id: 5, title: '<project name> just completed!' },
    { id: 6, title: '<project name> just completed!' },
    { id: 7, title: '<project name> just completed!' }
  ])

  const addEntry = (entry) => {
    const newEntry = {
      id: Math.max(...projectEntries.value.map(e => e.id), 0) + 1,
      ...entry
    }
    projectEntries.value.unshift(newEntry)
    return newEntry
  }

  const deleteEntry = (id) => {
    projectEntries.value = projectEntries.value.filter(entry => entry.id !== id)
  }

  return {
    projectEntries,
    addEntry,
    deleteEntry
  }
}
