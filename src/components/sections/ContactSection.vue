<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = [
  { label: 'GitHub',   href: 'https://github.com/GremlinX' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelo-ito-/' },
]

const EMAIL = 'marcelo-ito@hotmail.com'

onMounted(() => {
  const trigger = { trigger: '#contato', start: 'top 70%' }
  gsap.to('.contato-eyebrow', { opacity: 1, duration: 0.6,                           scrollTrigger: trigger })
  gsap.to('.contato-title',   { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: trigger })
  gsap.to('.contato-links',   { opacity: 1, duration: 0.7, delay: 0.3,               scrollTrigger: trigger })
  gsap.to('.contato-email',   { opacity: 1, duration: 0.7, delay: 0.5,               scrollTrigger: trigger })
})
</script>

<template>
  <section id="contato" class="contato-section">
    <p class="contato-eyebrow">✦ Vamos conversar</p>

    <h2 class="contato-title">
      Pronto para<br>
      <em>criar algo</em><br>
      incrível?
    </h2>

    <nav class="contato-links" aria-label="Links sociais">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        class="contato-link"
        target="_blank"
        rel="noopener noreferrer"
      >{{ link.label }}</a>
    </nav>

    <a :href="`mailto:${EMAIL}`" class="contato-email">{{ EMAIL }}</a>
  </section>
</template>

<style scoped>
.contato-section {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 8rem 3rem;
  background: var(--color-text);
  color: var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contato-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-accent1);
  margin-bottom: 2rem;
  opacity: 0;
}

.contato-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.8rem, 7vw, 7rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(40px);
}
.contato-title em { color: var(--color-accent1); font-style: italic; }

.contato-links {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  opacity: 0;
}

.contato-link {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent3);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.2rem;
  transition: color 0.2s, border-color 0.2s;
}
.contato-link:hover {
  color: var(--color-accent1);
  border-bottom-color: var(--color-accent1);
}

.contato-email {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1rem, 3.5vw, 1.6rem);
  font-style: italic;
  color: var(--color-accent1);
  text-decoration: none;
  opacity: 0;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
  /* Prevent long email from overflowing */
  word-break: break-all;
  max-width: 100%;
  text-align: center;
  padding: 0 1rem;
}
.contato-email:hover { border-bottom-color: var(--color-accent1); }

/* ── Tablet (≤ 1024px) ── */
@media (max-width: 1024px) {
  .contato-section { padding: 6rem 2rem; }
}

/* ── Mobile (≤ 768px) ── */
@media (max-width: 768px) {
  .contato-section {
    padding: 5rem 1.5rem 4rem;
    min-height: auto;
  }

  .contato-title {
    font-size: clamp(2.4rem, 9vw, 3.5rem);
    line-height: 1;
    margin-bottom: 2.5rem;
  }

  .contato-links {
    gap: 2rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contato-email { font-size: clamp(0.9rem, 4vw, 1.1rem); }
}
</style>
