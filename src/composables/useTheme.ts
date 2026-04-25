import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

// Detect OS preference as default
function getDefaultTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>(getDefaultTheme())

  // Apply theme to <html> by toggling a class
  function applyTheme(t: Theme) {
    const html = document.documentElement
    if (t === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function setTheme(t: Theme) {
    theme.value = t
  }

  // Persist and apply on every change
  watch(theme, (t) => {
    localStorage.setItem(STORAGE_KEY, t)
    applyTheme(t)
  }, { immediate: true })

  return { theme, toggle, setTheme }
})
