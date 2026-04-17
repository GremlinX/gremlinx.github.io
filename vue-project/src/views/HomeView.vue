<template>
  <div class="home-view">
    <BackgroundBubbles />
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from '@/components/layouts/TheNavbar.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import BackgroundBubbles from '@/components/decorations/BackgroundBubbles.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
