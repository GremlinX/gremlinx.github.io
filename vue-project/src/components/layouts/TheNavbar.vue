<template>
  <header class="site-header">
    <v-container class="py-4">
      <nav class="nav-shell">
        <a class="brand-mark" href="#home">{{ portfolioData.brand }}</a>

        <div class="nav-links">
          <a v-for="item in links" :key="item.href" :href="item.href">{{ item.label }}</a>
        </div>

        <v-btn
          class="nav-cta"
          color="secondary"
          append-icon="mdi-arrow-down"
          href="#contact"
        >
          Vamos conversar
        </v-btn>
      </nav>
    </v-container>
  </header>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

const links = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contact' }
]
</script>
