<template>
  <footer class="site-footer">
    <v-container class="py-8">
      <div class="footer-shell">
        <div>
          <p class="footer-brand">{{ portfolioData.brand }}</p>
          <p class="footer-copy">
            Portfolio em Vue, Vuetify e GSAP com foco em experiencia, clareza e identidade.
          </p>
        </div>

        <div class="footer-links">
          <a :href="`mailto:${portfolioData.contact.email}`">{{ portfolioData.contact.email }}</a>
          <a :href="`https://${portfolioData.contact.linkedin}`" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a :href="`https://${portfolioData.contact.github}`" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>
