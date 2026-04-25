<script setup lang="ts">
import { onMounted, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectCard, { type Project } from '@/components/ui/ProjectCard.vue'
import { useLocaleStore } from '@/composables/useLocale'

gsap.registerPlugin(ScrollTrigger)

const locale = useLocaleStore()
const t      = computed(() => locale.t)

const tags = [
  ['.NET 9', 'Vue 3', 'PostgreSQL', 'Gemini AI', 'Vuetify', 'QuestPDF'],
  ['Python', 'FAISS', 'Gemini'],
  ['BERT', 'sklearn', 'HuggingFace'],
  ['MailKit', 'Hangfire', '.NET'],
  ['.NET'],
  ['Python', 'Numpy', 'Pandas', 'Seaborn', 'Matplotlib'],
]

const projects = computed<Project[]>(() =>
  t.value.projects.items.map((item, i) => ({
    num: i === 0 ? '' : String(i).padStart(2, '0'),
    name: item.name,
    description: item.description,
    tags: tags[i] ?? [],
    featured: i === 0,
  }))
)

onMounted(() => {
  gsap.to('.projects-section-title', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#projetos', start: 'top 75%' },
  })
  gsap.to('.project-card', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
    scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' },
  })
})
</script>

<template>
  <section id="projetos" class="projetos-section">
    <div class="section-header">
      <span class="section-num">{{ t.projects.sectionNum }}</span>
      <h2 class="section-title projects-section-title">{{ t.projects.title }}</h2>
      <div class="section-line" />
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.num || 'featured'"
        :project="project"
        :featured-label="t.projects.featured"
      />
    </div>
  </section>
</template>

<style scoped>
.projetos-section { position: relative; z-index: 1; padding: 8rem 3rem; background: var(--color-bg); }
.section-header { display: flex; align-items: baseline; gap: 2rem; margin-bottom: 5rem; overflow: hidden; }
.section-num { font-family: 'DM Mono', monospace; font-size: 0.72rem; letter-spacing: 0.15em; color: var(--color-accent1); }
.section-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 900; line-height: 1; opacity: 0; transform: translateY(40px); }
.section-line { flex: 1; height: 1px; background: var(--color-accent1); opacity: 0.4; }
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
@media (max-width: 1024px) { .projetos-section { padding: 6rem 2rem; } .projects-grid { grid-template-columns: repeat(2, 1fr); } .section-header { margin-bottom: 3rem; } }
@media (max-width: 768px)  { .projetos-section { padding: 5rem 1.5rem 4rem; } .projects-grid { grid-template-columns: 1fr; } .section-header { gap: 1rem; margin-bottom: 2.5rem; } }
</style>
