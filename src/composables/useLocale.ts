import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import ptBR from '@/locales/pt-BR.json'
import en   from '@/locales/en.json'

type Locale = 'pt-BR' | 'en'

const messages: Record<Locale, typeof ptBR> = { 'pt-BR': ptBR, en }

// Persist locale choice across reloads
const STORAGE_KEY = 'portfolio-locale'
const savedLocale = (localStorage.getItem(STORAGE_KEY) as Locale | null) ?? 'pt-BR'

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<Locale>(savedLocale)

  const t = computed(() => messages[locale.value])

  function toggle() {
    locale.value = locale.value === 'pt-BR' ? 'en' : 'pt-BR'
    localStorage.setItem(STORAGE_KEY, locale.value)
    // Update <html lang> attribute
    document.documentElement.lang = locale.value
  }

  function setLocale(l: Locale) {
    locale.value = l
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
  }

  return { locale, t, toggle, setLocale }
})
