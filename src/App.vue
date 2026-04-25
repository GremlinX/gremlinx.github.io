<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { useCursor } from '@/composables/useCursor'
import { useLocaleStore } from '@/composables/useLocale'
import { useThemeStore } from '@/composables/useTheme'
import SplashScreen from '@/components/ui/SplashScreen.vue'
import BubbleCanvas from '@/components/ui/BubbleCanvas.vue'
import AppNav from '@/components/layout/AppNav.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import MarqueeBand from '@/components/ui/MarqueeBand.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

// Initialize both stores early — they apply their effects immediately
const locale = useLocaleStore()
document.documentElement.lang = locale.locale

// Theme store applies .dark class to <html> via its watcher
useThemeStore()

const splashDone = ref(false)
const { setupCursor } = useCursor()

function onSplashDone() {
  splashDone.value = true
  const isTouch = window.matchMedia('(hover: none)').matches
  if (!isTouch) setupCursor()
}
</script>

<template>
  <SplashScreen v-if="!splashDone" @done="onSplashDone" />

  <Transition name="app-reveal">
    <div v-if="splashDone" class="app-wrapper">
      <div id="cursor" class="cursor" aria-hidden="true" />
      <div id="cursor-ring" class="cursor-ring" aria-hidden="true" />

      <BubbleCanvas />
      <AppNav />

      <main>
        <HeroSection />
        <MarqueeBand />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <AppFooter />
    </div>
  </Transition>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');

/* ── Light theme (default) ── */
:root {
  --color-bg: #fefae0;
  --color-surface: #faedcd;
  --color-accent1: #d4a373;
  --color-accent2: #ccd5ae;
  --color-accent3: #e9edc9;
  --color-text: #3d2b1f;
  --color-text-muted: #7c6b5a;
  --color-error: #b85c38;
  --color-success: #7c9a63;
  --color-info: #8aa399;

  /* Theme transition speed — applied on every color-using property */
  --theme-transition: 0.35s ease;
}

/* ── Dark theme — preto azulado + dourado ── */
html.dark {
  --color-bg: #0d0f14;
  --color-surface: #141720;
  --color-accent1: #d4a373;
  /* golden anchor — brand stays consistent */
  --color-accent2: #4a6fa5;
  /* medium blue */
  --color-accent3: #1e2a3a;
  /* deep blue */
  --color-text: #e8e0d0;
  /* warm off-white */
  --color-text-muted: #7a8fa6;
  /* blue-grey */
  --color-error: #c0714a;
  /* slightly lighter terracotta for dark bg */
  --color-success: #6aab7e;
  --color-info: #5a8fa0;
}

/* Smooth color transitions across the whole page */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition:
    background-color var(--theme-transition),
    border-color var(--theme-transition),
    color var(--theme-transition);
}

/* Re-exclude elements where transition would cause jitter */
.cursor,
.cursor-ring,
.hero-cta,
.hero-cta svg,
.cv-btn,
.project-card::before,
.skill-badge,
.contato-link,
.nav-hamburger span {
  transition: none;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Crimson Pro', Georgia, serif;
  background: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
  cursor: none;
}

@media (hover: none) {
  body {
    cursor: auto;
  }
}

/* Cursor */
.cursor {
  width: 12px;
  height: 12px;
  background: var(--color-accent1);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease;
  mix-blend-mode: multiply;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--color-accent1);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.08s ease;
  opacity: 0.6;
}

/* In dark mode, multiply blend-mode makes cursor invisible — switch to normal */
html.dark .cursor {
  mix-blend-mode: normal;
  opacity: 0.85;
}

@media (hover: none) {

  .cursor,
  .cursor-ring {
    display: none;
  }
}

/* Grain */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 200;
  opacity: 0.5;
}

/* App reveal */
.app-reveal-enter-active {
  transition: opacity 0.6s ease;
}

.app-reveal-enter-from {
  opacity: 0;
}
</style>
