<template>
  <section id="about" ref="sectionRef" class="content-section">
    <v-container>
      <div class="section-heading">
        <p class="section-kicker">Sobre</p>
        <h2>Uma apresentacao que combina tecnica, clareza e presenca visual.</h2>
      </div>

      <v-row class="mt-8" density="comfortable">
        <v-col cols="12" md="5">
          <div data-reveal class="about-lead">
            <p>
              Trabalho melhor quando o design tem intencao e o codigo tem estrutura. A ideia aqui
              e construir uma home que te represente de verdade, sem cara de template generico.
            </p>
            <p>
              Essa base ja nasce pronta para receber seus textos reais, cases, links, metricas e
              refinamentos de motion.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <div class="feature-grid">
            <v-card
              v-for="card in portfolioData.aboutCards"
              :key="card.title"
              data-reveal
              class="feature-card"
            >
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-text>{{ card.text }}</v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import { useSectionReveal } from '@/composables/useSectionReveal'
import { portfolioData } from '@/data/portfolio'

const sectionRef = ref(null)

useSectionReveal(sectionRef)
</script>
