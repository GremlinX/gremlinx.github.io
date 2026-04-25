<script setup lang="ts">
import { computed } from 'vue'
import { useLocaleStore } from '@/composables/useLocale'

const locale = useLocaleStore()
const t      = computed(() => locale.t)
</script>

<template>
  <footer class="app-footer">
    <span>{{ t.footer.built }}</span>
    <span class="accent">{{ t.footer.available }}</span>
  </footer>
</template>

<style scoped>
.app-footer { position: relative; z-index: 1; background: var(--color-text); border-top: 1px solid rgba(254,250,224,0.1); padding: 1.5rem 3rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.app-footer span { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--color-text-muted); }
.app-footer span.accent { color: var(--color-accent1); }
@media (max-width: 1024px) { .app-footer { padding: 1.5rem 2rem; } }
@media (max-width: 768px)  { .app-footer { padding: 1.25rem 1.5rem; flex-direction: column; text-align: center; gap: 0.5rem; } }
</style>
