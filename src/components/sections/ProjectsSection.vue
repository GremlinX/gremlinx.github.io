<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectCard, { type Project } from '@/components/ui/ProjectCard.vue'

gsap.registerPlugin(ScrollTrigger)

const projects: Project[] = [
  {
    num: '',
    name: 'Minoru',
    description: 'Aplicação full-stack de produtividade e finanças pessoais. Blog, Kanban, finanças, sessões de estudo com IA, autenticação Google OAuth e geração de PDFs.',
    tags: ['.NET 9', 'Vue 3', 'PostgreSQL', 'Gemini AI', 'Vuetify', 'QuestPDF'],
    featured: true,
  },
  {
    num: '01',
    name: 'RAG<br>Engine',
    description: 'Sistema de retrieval-augmented generation com Sentence-BERT, FAISS e Gemini API.',
    tags: ['Python', 'FAISS', 'Gemini'],
  },
  {
    num: '02',
    name: 'NLP<br>Pipeline',
    description: 'Classificação de texto com TF-IDF, Naive Bayes, SVM e fine-tuning de DistilBERT.',
    tags: ['BERT', 'sklearn', 'HuggingFace'],
  },
  {
    num: '03',
    name: 'Email<br>Notifier',
    description: 'Sistema de notificações com MailKit e Hangfire para agendamento de tarefas em background.',
    tags: ['MailKit', 'Hangfire', '.NET'],
  },
  {
    num: '04',
    name: 'Discord<br>Bot',
    description: 'Projeto simples para finalidades pessoais. O bot é responsável por me avisar de fazer o Duolingo e enviar as últimas 4 nóticias publicadas pelo Correio Braziliense, através da API NewsData.',
    tags: ['.NET'],
  },
  {
    num: '05',
    name: 'Análise de Arrecadação de Impostos Federais no Brasil<br>(2000–2024)',
    description: 'Análise exploratória e descritiva dos dados de arrecadação de impostos federais no Brasil, identificando tendências, variações por estado/ano e os principais fatores que influenciaram a arrecadação federal.',
    tags: ['Python', 'Numpy', 'Pandas', 'Seaborn', 'Matplotlib'],
  },
]

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
      <span class="section-num">02</span>
      <h2 class="section-title projects-section-title">Projetos</h2>
      <div class="section-line" />
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.num || 'featured'"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.projetos-section {
  position: relative;
  z-index: 1;
  padding: 8rem 3rem;
  background: var(--color-bg);
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 2rem;
  margin-bottom: 5rem;
  overflow: hidden;
}

.section-num {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: var(--color-accent1);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 900;
  line-height: 1;
  opacity: 0;
  transform: translateY(40px);
}

.section-line {
  flex: 1;
  height: 1px;
  background: var(--color-accent1);
  opacity: 0.4;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

/* ── Tablet (≤ 1024px) ── */
@media (max-width: 1024px) {
  .projetos-section { padding: 6rem 2rem; }
  .projects-grid    { grid-template-columns: repeat(2, 1fr); }
  .section-header   { margin-bottom: 3rem; }
}

/* ── Mobile (≤ 768px) ── */
@media (max-width: 768px) {
  .projetos-section { padding: 5rem 1.5rem 4rem; }
  .projects-grid    { grid-template-columns: 1fr; }
  .section-header   { gap: 1rem; margin-bottom: 2.5rem; }
}
</style>
