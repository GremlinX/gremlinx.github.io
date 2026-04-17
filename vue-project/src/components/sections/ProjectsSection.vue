<template>
  <section id="projects" ref="sectionRef" class="content-section">
    <v-container>
      <div class="section-heading">
        <p class="section-kicker">Projetos</p>
        <h2>Cases em destaque para mostrar repertorio tecnico e criterio visual.</h2>
      </div>

      <div class="projects-grid">
        <v-card
          v-for="project in portfolioData.projects"
          :key="project.title"
          data-reveal
          class="project-card"
        >
          <div class="project-card-top">
            <p class="project-title">{{ project.title }}</p>
            <div class="project-stack">
              <v-chip
                v-for="tech in project.stack"
                :key="tech"
                color="primary"
                variant="outlined"
                size="small"
              >
                {{ tech }}
              </v-chip>
            </div>
          </div>

          <p class="project-description">{{ project.description }}</p>
          <p class="project-outcome">{{ project.outcome }}</p>
        </v-card>
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
