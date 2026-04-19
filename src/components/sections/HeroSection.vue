<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrollLineRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })
  tl.to('.hero-eyebrow',  { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    .to('.hero-name',     { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
    .to('.hero-title',    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .to('.hero-cta',      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to('.hero-right',    { opacity: 1, duration: 1,          ease: 'power2.out' }, '-=0.8')

  gsap.to('.shape-1', { borderRadius: '40% 60% 50% 50% / 40% 50% 60% 60%', duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  gsap.to('.shape-2', { borderRadius: '70% 30% 60% 40% / 30% 70% 30% 70%', duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
  gsap.to('.shape-3', { rotation: 45, scale: 1.1, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 })

  gsap.to('.hero-scroll-line', { scaleX: 0, transformOrigin: 'left', duration: 1.5, repeat: -1, ease: 'power2.inOut', delay: 2 })

  gsap.to('.shape-1', { y: -80, scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1.5 } })
  gsap.to('.shape-2', { y: -40, x: 20, scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 } })
})
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="hero-left">
      <p class="hero-eyebrow">✦ Disponível para projetos</p>
      <h1 class="hero-name">Marcelo Ito</h1>
      <h2 class="hero-title">
        Full<em>stack</em><br>
        Developer
      </h2>
      <p class="hero-subtitle">
        Construindo experiências digitais completas — do banco de dados à interface.
        .NET, Vue 3, e IA aplicada.
      </p>
      <a href="#projetos" class="hero-cta">
        Ver Projetos
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <div class="hero-right">
      <div class="hero-art">
        <div class="shape shape-1" />
        <div class="shape shape-2" />
        <div class="shape shape-3" />
        <div class="hero-code-snippet">
          <span class="c-comment">// Stack favorita</span><br>
          <span class="c-key">{</span><br>
          <span class="c-key">backend</span>: <span class="c-val">.NET 9</span><br>
          <span class="c-key">frontend</span>: <span class="c-val">Vue 3</span><br>
          <span class="c-key">banco</span>: <span class="c-val">PostgreSQL</span><br>
          <span class="c-key">ai</span>: <span class="c-val">Gemini API</span><br>
          <span class="c-key">status</span>: <span class="c-val c-val--ok">disponível ✓</span><br>
          <span class="c-key">}</span>
        </div>
      </div>
    </div>

    <div class="hero-scroll-hint">
      <div class="hero-scroll-line" />
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 8rem 3rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  overflow: hidden;
}

/* ── Left ── */
.hero-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent1);
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
}

.hero-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
  opacity: 0;
  transform: translateY(30px);
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.6rem, 3.5vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.75rem;
  opacity: 0;
  transform: translateY(30px);
  color: var(--color-text-muted);
}
.hero-title em { font-style: italic; color: var(--color-error); }

.hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  max-width: 420px;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-text);
  color: var(--color-bg);
  padding: 0.9rem 2rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s, transform 0.2s;
  opacity: 0;
}
.hero-cta:hover { background: var(--color-error); transform: translateX(4px); }
.hero-cta svg  { transition: transform 0.2s; }
.hero-cta:hover svg { transform: translateX(4px); }

/* ── Right ── */
.hero-right { position: relative; height: 520px; opacity: 0; }
.hero-art   { position: absolute; inset: 0; }

.shape { position: absolute; border-radius: 50%; }
.shape-1 { width: 300px; height: 300px; background: var(--color-accent2); top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
.shape-2 { width: 160px; height: 160px; background: var(--color-surface); border: 2px solid var(--color-accent1); top: 10%; right: 10%; border-radius: 30% 70% 40% 60% / 60% 30% 70% 40%; }
.shape-3 { width: 80px; height: 80px; background: var(--color-error); bottom: 15%; left: 5%; border-radius: 0; transform: rotate(15deg); }

.hero-code-snippet {
  position: absolute;
  bottom: 10%; right: 0;
  background: var(--color-text);
  color: var(--color-accent3);
  padding: 1.2rem 1.5rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  line-height: 1.8;
  width: 240px;
  border-left: 3px solid var(--color-accent1);
}
.c-comment { color: var(--color-text-muted); }
.c-key     { color: var(--color-accent1); }
.c-val     { color: var(--color-accent2); }
.c-val--ok { color: var(--color-success); }

/* ── Scroll hint ── */
.hero-scroll-hint {
  position: absolute;
  bottom: 2rem; left: 3rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.hero-scroll-line {
  width: 60px;
  height: 1px;
  background: var(--color-accent1);
  transform-origin: left;
}

/* ── Tablet (≤ 1024px) ── */
@media (max-width: 1024px) {
  .hero-section {
    padding: 7rem 2rem 5rem;
    gap: 2rem;
  }
  .hero-right { height: 400px; }
  .shape-1 { width: 240px; height: 240px; }
  .shape-2 { width: 120px; height: 120px; }
  .shape-3 { width: 60px; height: 60px; }
  .hero-code-snippet { width: 200px; font-size: 0.65rem; }
}

/* ── Mobile (≤ 768px) ── */
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    padding: 6.5rem 1.5rem 4rem;
    gap: 0;
    min-height: auto;
  }

  .hero-right {
    /* Decorative panel hidden on mobile — art becomes bg texture */
    display: none;
  }

  .hero-name    { font-size: clamp(2.4rem, 9vw, 3.5rem); }
  .hero-title   { font-size: clamp(1.3rem, 5vw, 1.8rem); }
  .hero-subtitle { font-size: 1rem; max-width: 100%; }

  .hero-scroll-hint { left: 1.5rem; }
}
</style>
