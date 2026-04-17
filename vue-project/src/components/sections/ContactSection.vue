<template>
  <section id="contact" ref="sectionRef" class="content-section contact-section">
    <v-container>
      <v-card data-reveal class="contact-card">
        <div class="contact-copy">
          <p class="section-kicker">Contato</p>
          <h2>Se o visual fez sentido, o proximo passo e transformar isso na sua narrativa real.</h2>
          <p>
            Podemos personalizar textos, trocar os cases placeholder pelos seus projetos e adicionar
            links, curriculo, experiencias e secoes extras.
          </p>
        </div>

        <div class="contact-actions">
          <v-btn color="primary" size="large" :href="`mailto:${portfolioData.contact.email}`">
            {{ portfolioData.contact.email }}
          </v-btn>
          <v-btn
            color="secondary"
            size="large"
            variant="tonal"
            :href="`https://${portfolioData.contact.github}`"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </v-btn>
          <v-btn
            color="accent"
            size="large"
            variant="tonal"
            :href="`https://${portfolioData.contact.linkedin}`"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </v-btn>
        </div>
      </v-card>
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
