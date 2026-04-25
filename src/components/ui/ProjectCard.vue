<script setup lang="ts">
import { useLocaleStore } from '@/composables/useLocale'
import { computed } from 'vue'

export interface Project {
  num: string
  name: string
  description: string
  tags: string[]
  featured?: boolean
}

defineProps<{
  project: Project
  featuredLabel?: string
}>()

const locale = useLocaleStore()
const t = computed(() => locale.t)
</script>

<template>
  <article class="project-card" :class="{ featured: project.featured }">
    <div class="card-content">
      <span class="project-num">{{ project.featured ? (featuredLabel ?? '✦') : project.num }}</span>
      <h3 class="project-name" v-html="project.name" />
      <p class="project-desc">{{ project.description }}</p>
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
      <span class="project-arrow">↗</span>
    </div>
    <div v-if="project.featured" class="featured-visual">
      <div class="featured-circle" />
      <div class="featured-circle-2" />
      <span class="featured-label">{{ t.projects['featured-label']}}</span>
    </div>
  </article>
</template>

<style scoped>
.project-card { background: var(--color-surface); padding: 2.5rem 2rem; position: relative; overflow: hidden; cursor: none; display: block; }
.project-card::before { content: ''; position: absolute; inset: 0; background: var(--color-text); transform: translateY(100%); transition: transform 0.4s cubic-bezier(0.77,0,0.175,1); z-index: 0; }
.project-card:hover::before { transform: translateY(0); }
.card-content { position: relative; z-index: 1; }
.project-card:hover .project-num, .project-card:hover .project-name, .project-card:hover .project-desc { color: var(--color-bg); }
.project-card:hover .project-tags span { border-color: var(--color-accent2); color: var(--color-accent2); }
.project-card:hover .project-arrow { color: var(--color-accent1); transform: translate(4px,-4px); }
.project-num { font-family: 'DM Mono', monospace; font-size: 0.68rem; letter-spacing: 0.15em; color: var(--color-accent1); margin-bottom: 1.5rem; display: block; transition: color 0.3s; }
.project-name { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; line-height: 1.15; margin-bottom: 1rem; transition: color 0.3s; }
.project-desc { font-size: 0.95rem; line-height: 1.65; color: var(--color-text-muted); margin-bottom: 2rem; transition: color 0.3s; }
.project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
.project-tags span { font-family: 'DM Mono', monospace; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; border: 1px solid var(--color-accent1); color: var(--color-text-muted); padding: 0.2rem 0.6rem; transition: all 0.3s; }
.project-arrow { font-size: 1.5rem; color: var(--color-accent1); transition: color 0.3s, transform 0.2s; display: inline-block; }
.project-card.featured { grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; background: var(--color-text); }
.project-card.featured::before { display: none; }
.project-card.featured .project-num  { color: var(--color-accent1); }
.project-card.featured .project-name { color: var(--color-bg); font-size: 2.2rem; }
.project-card.featured .project-desc { color: var(--color-accent3); opacity: 0.7; }
.project-card.featured .project-tags span { border-color: var(--color-accent2); color: var(--color-accent2); }
.project-card.featured .project-arrow { color: var(--color-accent1); }
.featured-visual { display: flex; align-items: center; justify-content: center; position: relative; z-index: 1; min-height: 180px; }
.featured-circle  { width: 160px; height: 160px; border-radius: 50%; background: var(--color-accent1); opacity: 0.2; position: absolute; animation: pulse-slow 4s ease-in-out infinite; }
.featured-circle-2 { width: 110px; height: 110px; border-radius: 50%; background: var(--color-accent2); opacity: 0.3; animation: pulse-slow 4s ease-in-out infinite reverse; }
.featured-label { position: absolute; font-family: 'Playfair Display', serif; font-size: 1rem; font-style: italic; color: var(--color-accent3); text-align: center; line-height: 1.3; }
@keyframes pulse-slow { 0%,100% { transform: scale(1); } 50% { transform: scale(1.12); } }
@media (max-width: 1024px) { .project-card.featured { grid-template-columns: 3fr 2fr; } .project-card.featured .project-name { font-size: 1.8rem; } }
@media (max-width: 768px) { .project-card { padding: 2rem 1.5rem; } .project-card.featured { grid-column: span 1; grid-template-columns: 1fr; } .featured-visual { display: none; } .project-card.featured .project-name { font-size: 1.8rem; } }
</style>
