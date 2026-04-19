<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { useCursor }       from '@/composables/useCursor'
import BubbleCanvas        from '@/components/ui/BubbleCanvas.vue'
import AppNav              from '@/components/layout/AppNav.vue'
import AppFooter           from '@/components/layout/AppFooter.vue'
import MarqueeBand         from '@/components/ui/MarqueeBand.vue'
import HeroSection         from '@/components/sections/HeroSection.vue'
import AboutSection        from '@/components/sections/AboutSection.vue'
import ProjectsSection     from '@/components/sections/ProjectsSection.vue'
import SkillsSection       from '@/components/sections/SkillsSection.vue'
import ContactSection      from '@/components/sections/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

// Only activate custom cursor on non-touch devices
const isTouch = window.matchMedia('(hover: none)').matches
if (!isTouch) useCursor()
</script>

<template>
  <!-- Custom cursor — hidden via CSS on touch/mobile -->
  <div id="cursor"      class="cursor"      aria-hidden="true" />
  <div id="cursor-ring" class="cursor-ring" aria-hidden="true" />

  <BubbleCanvas />

  <AppNav />

  <main>
    <HeroSection />
    <MarqueeBand />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>

  <AppFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');

:root {
  --color-bg:         #fefae0;
  --color-surface:    #faedcd;
  --color-accent1:    #d4a373;
  --color-accent2:    #ccd5ae;
  --color-accent3:    #e9edc9;
  --color-text:       #3d2b1f;
  --color-text-muted: #7c6b5a;
  --color-error:      #b85c38;
  --color-success:    #7c9a63;
  --color-info:       #8aa399;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Crimson Pro', Georgia, serif;
  background: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
  cursor: none;
}

/* Restore default cursor on touch devices */
@media (hover: none) {
  body { cursor: auto; }
}

.cursor {
  width: 12px; height: 12px;
  background: var(--color-accent1);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease;
  mix-blend-mode: multiply;
}
.cursor-ring {
  width: 36px; height: 36px;
  border: 1.5px solid var(--color-accent1);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.08s ease;
  opacity: 0.6;
}

/* Hide cursor elements on touch screens */
@media (hover: none) {
  .cursor, .cursor-ring { display: none; }
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 200;
  opacity: 0.5;
}
</style>
