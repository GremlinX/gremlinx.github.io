<script setup lang="ts">
import { onMounted, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLocaleStore } from '@/composables/useLocale'

gsap.registerPlugin(ScrollTrigger)

const locale = useLocaleStore()
const t      = computed(() => locale.t)

const CV_PATH = '/assets/cv-marcelo-ito.pdf'

onMounted(() => {
  const trigger = { trigger: '#sobre', start: 'top 70%' }
  gsap.to('.sobre-photo',  { opacity: 1, x: 0,  duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '#sobre', start: 'top 72%' } })
  gsap.to('.sobre-label',  { opacity: 1,         duration: 0.6,                     scrollTrigger: { trigger: '#sobre', start: 'top 75%' } })
  gsap.to('.sobre-title',  { opacity: 1, y: 0,  duration: 0.8, ease: 'power3.out', scrollTrigger: trigger })
  gsap.to('.sobre-text',   { opacity: 1, y: 0,  duration: 0.7, ease: 'power3.out', delay: 0.2, scrollTrigger: trigger })
  gsap.to('.sobre-bottom', { opacity: 1, y: 0,  duration: 0.7, ease: 'power3.out', delay: 0.4, scrollTrigger: trigger })
})
</script>

<template>
  <section id="sobre" class="sobre-section">
    <div class="sobre-side">
      <p class="sobre-label">{{ t.about.label }}</p>
      <div class="sobre-photo-wrap">
        <img
          src="/assets/images/photo.jpg"
          :alt="t.about.photoAlt"
          class="sobre-photo"
          loading="lazy"
          width="200" height="250"
        />
        <div class="photo-frame" aria-hidden="true" />
      </div>
    </div>

    <div class="sobre-content">
      <h2 class="sobre-title">
        {{ t.about.title1 }}<br>
        <span>{{ t.about.title2 }}</span>
        {{ t.about.title3 }}
      </h2>

      <p class="sobre-text">
        {{ t.about.bio1 }}<br><br>
        {{ t.about.bio2 }}<br><br>
        {{ t.about.bio3 }}
      </p>

      <div class="sobre-bottom">
        <div class="sobre-stats">
          <div class="stat">
            <span class="stat-num">{{ t.about.stats.qa }}</span>
            <span class="stat-label">{{ t.about.stats.qaLabel }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">{{ t.about.stats.stack }}</span>
            <span class="stat-label">{{ t.about.stats.stackLabel }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">{{ t.about.stats.curiosity }}</span>
            <span class="stat-label">{{ t.about.stats.curiosityLabel }}</span>
          </div>
        </div>

        <a :href="CV_PATH" download="CV-Marcelo-Ito.pdf" class="cv-btn" aria-label="Baixar CV em PDF">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1v8M3 6l4 4 4-4M2 12h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {{ t.about.cv }}
        </a>
      </div>
    </div>

    <div class="sobre-deco" aria-hidden="true" />
  </section>
</template>

<style scoped>
.sobre-section {
  position: relative; z-index: 1;
  min-height: 100vh; padding: 8rem 3rem;
  display: grid; grid-template-columns: auto 1fr;
  gap: 5rem; align-items: start;
  background: var(--color-surface);
}
.sobre-side { display: flex; flex-direction: column; align-items: center; gap: 2rem; padding-top: 2rem; }
.sobre-label {
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--color-accent1); writing-mode: vertical-rl;
  transform: rotate(180deg); opacity: 0;
}
.sobre-photo-wrap { position: relative; width: 200px; }
.sobre-photo {
  display: block; width: 200px; height: 250px;
  object-fit: cover; object-position: top;
  filter: grayscale(20%); transition: filter 0.4s ease;
  position: relative; z-index: 1;
  opacity: 0; transform: translateX(-16px);
}
.sobre-photo:hover { filter: grayscale(0%); }
.photo-frame {
  position: absolute; top: 12px; left: 12px; right: -12px; bottom: -12px;
  border: 1.5px solid var(--color-accent1); opacity: 0.5; z-index: 0;
}
.sobre-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.2rem, 4vw, 4rem); font-weight: 700;
  line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 2rem;
  opacity: 0; transform: translateY(30px);
}
.sobre-title span { display: block; color: var(--color-error); font-style: italic; }
.sobre-text {
  font-size: 1.05rem; line-height: 1.8; color: var(--color-text-muted);
  max-width: 580px; margin-bottom: 2.5rem;
  opacity: 0; transform: translateY(20px);
}
.sobre-bottom {
  display: flex; align-items: flex-end;
  justify-content: space-between; gap: 2rem; flex-wrap: wrap;
  opacity: 0; transform: translateY(20px);
}
.sobre-stats { display: grid; grid-template-columns: repeat(3, auto); gap: 2rem; }
.stat { border-top: 1.5px solid var(--color-accent1); padding-top: 1rem; min-width: 72px; }
.stat-num { font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 900; line-height: 1; color: var(--color-text); display: block; }
.stat-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-muted); margin-top: 0.25rem; display: block; }
.cv-btn {
  display: inline-flex; align-items: center; gap: 0.6rem;
  font-family: 'DM Mono', monospace; font-size: 0.78rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  text-decoration: none; color: var(--color-bg);
  background: var(--color-text); padding: 0.85rem 1.75rem;
  border: 1.5px solid var(--color-text);
  transition: background 0.2s, color 0.2s, transform 0.2s; white-space: nowrap;
}
.cv-btn:hover { background: transparent; color: var(--color-text); transform: translateY(-2px); }
.sobre-deco {
  position: absolute; right: 3rem; top: 50%; transform: translateY(-50%);
  width: 200px; height: 200px; border: 1.5px solid var(--color-accent2);
  border-radius: 50%; opacity: 0.4; pointer-events: none;
}
@media (max-width: 1024px) {
  .sobre-section { padding: 6rem 2rem; gap: 3rem; }
  .sobre-deco { display: none; }
  .sobre-text { max-width: 100%; }
  .sobre-photo-wrap { width: 160px; }
  .sobre-photo { width: 160px; height: 200px; }
}
@media (max-width: 768px) {
  .sobre-section { grid-template-columns: 1fr; padding: 5rem 1.5rem 4rem; gap: 0; min-height: auto; }
  .sobre-side { flex-direction: row; align-items: flex-start; padding-top: 0; margin-bottom: 2rem; gap: 1.5rem; }
  .sobre-label { writing-mode: horizontal-tb; transform: none; padding-top: 0; align-self: center; }
  .sobre-photo-wrap { width: 110px; }
  .sobre-photo { width: 110px; height: 138px; }
  .photo-frame { top: 7px; left: 7px; right: -7px; bottom: -7px; }
  .sobre-title { font-size: clamp(2rem, 7vw, 2.8rem); margin-bottom: 1.5rem; }
  .sobre-text  { font-size: 1rem; margin-bottom: 2rem; }
  .sobre-bottom { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
  .sobre-stats  { gap: 1.25rem; }
  .stat-num     { font-size: 1.8rem; }
  .cv-btn       { width: 100%; justify-content: center; }
}
</style>
