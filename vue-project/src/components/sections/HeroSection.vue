<template>
  <section id="home" ref="heroSection" class="hero-section">
    <v-container class="hero-grid">
      <div class="hero-copy">
        <v-chip data-hero color="accent" variant="outlined" class="hero-chip">
          {{ portfolioData.availability }}
        </v-chip>

        <p data-hero class="eyebrow">Portfolio autoral</p>
        <h1 data-hero class="hero-title">
          {{ portfolioData.brand }}
          <span>{{ portfolioData.role }}</span>
        </h1>
        <p data-hero class="hero-description">
          {{ portfolioData.summary }}
        </p>

        <div data-hero class="hero-actions">
          <v-btn color="primary" size="x-large" href="#projects">Ver projetos</v-btn>
          <v-btn color="secondary" size="x-large" variant="tonal" href="#about">
            Conhecer historia
          </v-btn>
        </div>
      </div>

      <div data-hero class="hero-panel">
        <div class="hero-panel-inner">
          <p class="panel-label">Stack principal</p>
          <div class="hero-tags">
            <span v-for="skill in portfolioData.skills.slice(0, 6)" :key="skill">{{ skill }}</span>
          </div>

          <div class="metrics-grid">
            <article v-for="metric in portfolioData.metrics" :key="metric.label" class="metric-card">
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </article>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'

import { portfolioData } from '@/data/portfolio'

const heroSection = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('[data-hero]', {
      y: 72,
      opacity: 0,
      duration: 1,
      stagger: 0.14,
      ease: 'power3.out'
    })
  }, heroSection.value)
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>
