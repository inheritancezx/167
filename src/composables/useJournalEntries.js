import { ref } from 'vue'

export function useJournalEntries() {
  const journalEntries = ref([
    { id: 1, title: '<journal name> just published!' },
    { id: 2, title: '<journal name> just published!' },
    { id: 3, title: '<journal name> just published!' },
    { id: 4, title: '<journal name> just published!' },
    { id: 5, title: '<journal name> just published!' },
    { id: 6, title: '<journal name> just published!' },
    { id: 7, title: '<journal name> just published!' }
  ])

  const addEntry = (entry) => {
    const newEntry = {
      id: Math.max(...journalEntries.value.map(e => e.id), 0) + 1,
      ...entry
    }
    journalEntries.value.unshift(newEntry)
    return newEntry
  }

  const deleteEntry = (id) => {
    journalEntries.value = journalEntries.value.filter(entry => entry.id !== id)
  }

  return {
    journalEntries,
    addEntry,
    deleteEntry
  }
}
