<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { num: '+1', label: 'Ano de código' },
  { num: 'Vue', label: '+ .NET' },
  { num: '∞',  label: 'Curiosidade' },
]

onMounted(() => {
  const trigger = { trigger: '#sobre', start: 'top 70%' }

  gsap.to('.sobre-label',  { opacity: 1, duration: 0.6,                           scrollTrigger: { trigger: '#sobre', start: 'top 75%' } })
  gsap.to('.sobre-title',  { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: trigger })
  gsap.to('.sobre-text',   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2, scrollTrigger: trigger })
  gsap.to('.sobre-stats',  { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.4, scrollTrigger: trigger })
})
</script>

<template>
  <section id="sobre" class="sobre-section">
    <div class="sobre-side">
      <p class="sobre-label">Sobre Mim</p>
    </div>

    <div class="sobre-content">
      <h2 class="sobre-title">
        Código com<br>
        <span>propósito</span>
        e cuidado
      </h2>
      <p class="sobre-text">
        Minha carreira na área da tecnologia se inicia no curso de Ciência da Computação,
        posteriormente direcionada para Análise e Desenvolvimento de Sistemas.
        Paralelamente, busquei aprimorar meus conhecimentos por meio de cursos, blogs,
        artigos especializados e principalmente no desenvolvimento de projetos pessoais.<br><br>
        A partir daí, fui contratado para atuar como Quality Assurance atuando na
        garantia da qualidade de sistemas por meio de análises detalhadas e testes
        automatizados, ao qual eu fui responsável pelo desenvolvimento do projeto.
        Permaneci nessa função por quase quatro anos, consolidando uma base sólida em boas
        práticas, testes e automação, e qualidade de software.<br><br>
        Após esta jornada, tive a oportunidade de atuar como desenvolvedor fullstack júnior,
        posição em que estou atualmente. Minha atuação envolve manutenção de sistemas,
        desenvolvimento de novas funcionalidades e aplicação de boas práticas adquiridas
        ao longo da minha experiência anterior.<br><br>
        Sou motivado por construir aplicações completas que realmente fazem sentido. Do backend em .NET ao
        frontend em Vue 3, além de estar atualmente explorando o universo de IA e machine learning.
      </p>
      <div class="sobre-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <div class="sobre-deco" aria-hidden="true" />
  </section>
</template>

<style scoped>
.sobre-section {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 8rem 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  align-items: start;
  background: var(--color-surface);
}

.sobre-side { padding-top: 2rem; }

.sobre-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent1);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding-top: 1rem;
  opacity: 0;
}

.sobre-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.2rem, 4vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(30px);
}
.sobre-title span { display: block; color: var(--color-error); font-style: italic; }

.sobre-text {
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--color-text-muted);
  max-width: 580px;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
}

.sobre-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  opacity: 0;
  transform: translateY(20px);
}

.stat { border-top: 1.5px solid var(--color-accent1); padding-top: 1rem; }

.stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1;
  color: var(--color-text);
  display: block;
}
.stat-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-top: 0.25rem;
  display: block;
}

.sobre-deco {
  position: absolute;
  right: 3rem; top: 50%;
  transform: translateY(-50%);
  width: 200px; height: 200px;
  border: 1.5px solid var(--color-accent2);
  border-radius: 50%;
  opacity: 0.4;
  pointer-events: none;
}

/* ── Tablet (≤ 1024px) ── */
@media (max-width: 1024px) {
  .sobre-section {
    padding: 6rem 2rem;
    gap: 3rem;
    grid-template-columns: auto 1fr;
  }
  .sobre-deco { display: none; }
  .sobre-text { max-width: 100%; }
}

/* ── Mobile (≤ 768px) ── */
@media (max-width: 768px) {
  .sobre-section {
    grid-template-columns: 1fr;
    padding: 5rem 1.5rem 4rem;
    gap: 2rem;
    min-height: auto;
  }

  /* Label vertical vira horizontal no mobile */
  .sobre-side { padding-top: 0; }
  .sobre-label {
    writing-mode: horizontal-tb;
    transform: none;
    padding-top: 0;
    margin-bottom: 0.5rem;
    display: block;
  }

  .sobre-title  { font-size: clamp(2rem, 7vw, 2.8rem); margin-bottom: 1.5rem; }
  .sobre-text   { font-size: 1rem; margin-bottom: 2rem; }

  .sobre-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .stat-num { font-size: 2rem; }
}

/* ── Small mobile (≤ 400px) ── */
@media (max-width: 400px) {
  .sobre-stats { grid-template-columns: 1fr 1fr; }
}
</style>
