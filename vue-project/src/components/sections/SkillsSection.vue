<template>
  <section id="skills" ref="sectionRef" class="content-section">
    <v-container>
      <div class="section-heading">
        <p class="section-kicker">Skills</p>
        <h2>Tecnologias, fundamentos e ferramentas que sustentam a execucao.</h2>
      </div>

      <div class="skills-shell">
        <div data-reveal class="skills-copy">
          <p>
            Vue e Vuetify entram como base de interface, enquanto o GSAP adiciona camadas de
            movimento mais refinadas sem comprometer a leitura da pagina.
          </p>
          <p>
            A ideia e manter sua stack visivel, mas sem transformar a home em uma lista fria de
            logos. Primeiro vendemos contexto, depois repertorio.
          </p>
        </div>

        <div class="skills-cloud">
          <span v-for="skill in portfolioData.skills" :key="skill" data-reveal class="skill-pill">
            {{ skill }}
          </span>
        </div>
      </div>
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
