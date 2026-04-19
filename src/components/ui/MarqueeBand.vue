<script setup lang="ts">
const techs = [
  'ASP.NET Core', 'Vue 3', 'PostgreSQL', 'Vuetify', 'Pinia',
  'Gemini API', 'Entity Framework', 'GSAP', 'QuestPDF', 'Hangfire',
]
// Duplicate for seamless loop
const items = [...techs, ...techs]
</script>

<template>
  <div class="marquee-wrap" aria-hidden="true">
    <div class="marquee-track">
      <template v-for="(item, i) in items" :key="i">
        <span>{{ item }}</span>
        <span class="accent">✦</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrap {
  position: relative;
  z-index: 1;
  background: var(--color-text);
  padding: 0.9rem 0;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-track {
  display: inline-flex;
  animation: marquee 25s linear infinite;
}

.marquee-track span {
  font-family: 'DM Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--color-bg);
  padding: 0 3rem;
  text-transform: uppercase;
}

.marquee-track span.accent { color: var(--color-accent1); }

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
