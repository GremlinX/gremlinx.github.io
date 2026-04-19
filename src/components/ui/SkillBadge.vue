<script setup lang="ts">
defineProps<{
  label: string
  icon?: string  // MDI icon name e.g. 'mdi-vuejs'
}>()
</script>

<template>
  <span class="skill-badge">
    <i v-if="icon" :class="['mdi', icon]" aria-hidden="true" />
    {{ label }}
  </span>
</template>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  background: var(--color-bg);
  border: 1px solid var(--color-accent1);
  padding: 0.4rem 0.85rem;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
  cursor: default;
}

.skill-badge:hover {
  background: var(--color-accent1);
  color: var(--color-bg);
  border-color: var(--color-accent1);
  transform: translateY(-2px);
}

.mdi {
  font-size: 0.9rem;
}
</style>
