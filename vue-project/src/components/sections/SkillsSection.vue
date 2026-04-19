<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SkillBadge from '@/components/ui/SkillBadge.vue'

gsap.registerPlugin(ScrollTrigger)

interface SkillCategory {
  title: string
  emoji: string
  skills: { label: string; icon?: string }[]
}

const categories: SkillCategory[] = [
  {
    title: 'Backend',
    emoji: '⚙️',
    skills: [
      { label: 'C# - ASP.NET Core',  icon: 'mdi-dot-net'          },
      { label: 'Entity Framework',   icon: 'mdi-database-edit'    },
      { label: 'Java - Spring Boot', icon: 'mdi-leaf'             },
      { label: 'Node - Express',     icon: 'mdi-server'           },
      { label: 'REST APIs',          icon: 'mdi-api'              },
    ],
  },
  {
    title: 'Frontend',
    emoji: '🎨',
    skills: [
      { label: 'Vue 3',       icon: 'mdi-vuejs'                },
      { label: 'React',       icon: 'mdi-react'                },
      { label: 'Bootstrap',   icon: 'mdi-bootstrap'            },
      { label: 'JavaScript',  icon: 'mdi-language-javascript'  },
      { label: 'GSAP',        icon: 'mdi-animation'            },
      { label: 'Vite',        icon: 'mdi-lightning-bolt'       },
      { label: 'Axios',       icon: 'mdi-arrow-decision'       },
    ],
  },
  {
    title: 'Banco de Dados',
    emoji: '🗄️',
    skills: [
      { label: 'PostgreSQL',  icon: 'mdi-database' },
      { label: 'SQL Server',  icon: 'mdi-database' },
    ],
  },
  {
    title: 'IA & Machine Learning',
    emoji: '🤖',
    skills: [
      { label: 'Python',            icon: 'mdi-language-python'  },
      { label: 'scikit-learn',      icon: 'mdi-robot-outline'    },
      { label: 'HuggingFace',       icon: 'mdi-emoticon-outline' },
      { label: 'BERT / DistilBERT', icon: 'mdi-brain'            },
      { label: 'Gemini API',        icon: 'mdi-google'           },
      { label: 'FAISS',             icon: 'mdi-magnify'          },
      { label: 'LangGraph',         icon: 'mdi-graph-outline'    },
      { label: 'RAG',               icon: 'mdi-text-search'      },
    ],
  },
  {
    title: 'Ferramentas',
    emoji: '🛠️',
    skills: [
      { label: 'Git',        icon: 'mdi-git'                          },
      { label: 'GitHub',     icon: 'mdi-github'                       },
      { label: 'Docker',     icon: 'mdi-docker'                       },
      { label: 'Cypress',    icon: 'mdi-test-tube'                    },
      { label: 'Jupyter',    icon: 'mdi-notebook-outline'             },
      { label: 'VS Code',    icon: 'mdi-microsoft-visual-studio-code' },
      { label: 'Postman',    icon: 'mdi-send-check'                   },
      { label: 'Swagger UI', icon: 'mdi-code-json'                    },
    ],
  },
]

onMounted(() => {
  gsap.to('.skills-section-title', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#skills', start: 'top 75%' },
  })
  gsap.to('.skill-category', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
    scrollTrigger: { trigger: '#skills', start: 'top 70%' },
  })
  gsap.to('.skill-badge', {
    opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.04,
    scrollTrigger: { trigger: '.skills-grid', start: 'top 75%' },
  })
})
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-header">
      <span class="section-num">03</span>
      <h2 class="section-title skills-section-title">Skills</h2>
      <div class="section-line" />
    </div>

    <div class="skills-grid">
      <div
        v-for="cat in categories"
        :key="cat.title"
        class="skill-category"
      >
        <h3 class="skill-cat-title">{{ cat.title }}</h3>
        <div class="badge-grid">
          <SkillBadge
            v-for="skill in cat.skills"
            :key="skill.label"
            :label="skill.label"
            :icon="skill.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  position: relative;
  z-index: 1;
  padding: 8rem 3rem;
  background: var(--color-accent3);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}

.skill-category {
  opacity: 0;
  transform: translateY(30px);
}

.skill-cat-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1.5px solid var(--color-accent1);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.badge-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.badge-grid :deep(.skill-badge) {
  opacity: 0;
  transform: translateY(8px);
}

/* ── Tablet (≤ 1024px) ── */
@media (max-width: 1024px) {
  .skills-section { padding: 6rem 2rem; }
  .section-header { margin-bottom: 3rem; }
}

/* ── Mobile (≤ 768px) ── */
@media (max-width: 768px) {
  .skills-section  { padding: 5rem 1.5rem 4rem; }
  .skills-grid     { grid-template-columns: 1fr; gap: 2.5rem; }
  .section-header  { gap: 1rem; margin-bottom: 2.5rem; }
  .skill-cat-title { font-size: 1.15rem; }
}
</style>
