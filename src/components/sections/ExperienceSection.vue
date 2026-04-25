<script setup lang="ts">
import { onMounted, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLocaleStore } from '@/composables/useLocale'

gsap.registerPlugin(ScrollTrigger)

const locale = useLocaleStore()
const t = computed(() => locale.t)

const tags = [
  ['Cypress', 'Git', 'Python', 'Microsoft SQL Server'],
  ['.NET', 'Vue 3', 'PostgreSQL', 'Git', 'Docker',],
]

const experiences = computed(() =>
  t.value.experience.items.map((item, i) => ({
    ...item,
    tags: tags[i] ?? [],
    current: i === t.value.experience.items.length - 1,
  }))
)

onMounted(() => {
  gsap.to('.experience-section-title', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#experiencia', start: 'top 75%' },
  })
  document.querySelectorAll('.timeline-item').forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 82%' } })
  })
  gsap.fromTo('.timeline-line', { scaleY: 0 }, { scaleY: 1, duration: 1.2, ease: 'power2.out', transformOrigin: 'top', scrollTrigger: { trigger: '.timeline', start: 'top 75%' } })
})
</script>

<template>
  <section id="experiencia" class="experience-section">
    <div class="section-header">
      <span class="section-num">{{ t.experience.sectionNum }}</span>
      <h2 class="section-title experience-section-title">{{ t.experience.title }}</h2>
      <div class="section-line" />
    </div>

    <div class="timeline">
      <div class="timeline-line" aria-hidden="true" />

      <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
        <div class="timeline-dot" :class="{ current: exp.current }" aria-hidden="true">
          <div class="timeline-dot-inner" />
        </div>

        <div class="timeline-card">
          <div class="timeline-card-header">
            <div>
              <h3 class="timeline-role">{{ exp.role }}</h3>
              <p class="timeline-company">{{ exp.company }}</p>
            </div>
            <div class="timeline-meta">
              <span class="timeline-period">{{ exp.period }}</span>
              <span v-if="exp.current" class="timeline-current-badge">{{ t.experience.current }}</span>
            </div>
          </div>
          <p class="timeline-description">{{ exp.description }}</p>
          <div class="timeline-tags">
            <span v-for="tag in exp.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  position: relative;
  z-index: 1;
  padding: 8rem 3rem;
  background: var(--color-surface);
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

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 11px;
  top: 6px;
  bottom: 0;
  width: 1px;
  background: var(--color-accent1);
  opacity: 0.35;
  transform-origin: top;
}

.timeline-item {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  flex-shrink: 0;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 1.5px solid var(--color-accent1);
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  position: relative;
  z-index: 1;
}

.timeline-dot.current {
  background: var(--color-accent1);
  border-color: var(--color-accent1);
}

.timeline-dot-inner {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent1);
}

.timeline-dot.current .timeline-dot-inner {
  background: var(--color-bg);
}

.timeline-card {
  flex: 1;
  background: var(--color-bg);
  padding: 1.75rem 2rem;
  border: 1px solid transparent;
  transition: border-color 0.3s, transform 0.3s;
}

.timeline-card:hover {
  border-color: var(--color-accent1);
  transform: translateX(4px);
}

.timeline-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.timeline-role {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 0.25rem;
}

.timeline-company {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--color-accent1);
  text-transform: uppercase;
}

.timeline-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  flex-shrink: 0;
}

.timeline-period {
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.timeline-current-badge {
  font-family: 'DM Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-success);
  border: 1px solid var(--color-success);
  padding: 0.15rem 0.5rem;
}

.timeline-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-tags span {
  font-family: 'DM Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid rgba(212, 163, 115, 0.4);
  color: var(--color-text-muted);
  padding: 0.2rem 0.6rem;
}

@media (max-width: 1024px) {
  .experience-section {
    padding: 6rem 2rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 5rem 1.5rem 4rem;
  }

  .section-header {
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .timeline-item {
    gap: 1.5rem;
  }

  .timeline-line {
    left: 10px;
  }

  .timeline-card {
    padding: 1.25rem 1.25rem;
  }

  .timeline-card:hover {
    transform: none;
  }

  .timeline-card-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .timeline-meta {
    align-items: flex-start;
  }
}
</style>
