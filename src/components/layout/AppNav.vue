<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLocaleStore } from '@/composables/useLocale'
import { useThemeStore }  from '@/composables/useTheme'

const locale = useLocaleStore()
const themeStore = useThemeStore()
const t = computed(() => locale.t)

const isDark = computed(() => themeStore.theme === 'dark')

const navLinks = computed(() => [
  { label: t.value.nav.about,      href: '#sobre'       },
  { label: t.value.nav.projects,   href: '#projetos'    },
  { label: t.value.nav.skills,     href: '#skills'      },
  { label: t.value.nav.experience, href: '#experiencia' },
  { label: t.value.nav.contact,    href: '#contato'     },
])

const menuOpen = ref(false)
function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu()  { menuOpen.value = false }
</script>

<template>
  <nav class="app-nav" :class="{ 'menu-open': menuOpen }">
    <a href="#hero" class="nav-logo" @click="closeMenu">MI.</a>

    <!-- Desktop links -->
    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>

    <!-- Right: theme toggle + locale toggle + hamburger -->
    <div class="nav-right">

      <!-- Theme toggle -->
      <button
        class="theme-toggle"
        @click="themeStore.toggle"
        :aria-label="isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'"
      >
        <span class="theme-icon">
          <!-- Sun (light mode) -->
          <svg v-if="isDark" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          <!-- Moon (dark mode) -->
          <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </span>
        <span class="theme-label">{{ isDark ? 'Light — Tema café' : 'Dark — Tema noite' }}</span>
      </button>

      <!-- Divider -->
      <span class="nav-divider" aria-hidden="true">|</span>

      <!-- Locale toggle -->
      <button
        class="locale-toggle"
        @click="locale.toggle"
        :aria-label="`Switch to ${locale.locale === 'pt-BR' ? 'English' : 'Português'}`"
      >
        <span :class="{ active: locale.locale === 'pt-BR' }">PT</span>
        <span class="locale-divider">/</span>
        <span :class="{ active: locale.locale === 'en' }">EN</span>
      </button>

      <!-- Mobile hamburger -->
      <button
        class="nav-hamburger"
        :class="{ open: menuOpen }"
        @click="toggleMenu"
        aria-label="Abrir menu"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Backdrop -->
    <Transition name="fade">
      <div v-if="menuOpen" class="nav-backdrop" @click="closeMenu" />
    </Transition>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="menuOpen" class="nav-drawer">
        <ul>
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
          </li>
        </ul>

        <!-- Toggles inside drawer -->
        <div class="drawer-toggles">
          <button class="theme-toggle theme-toggle--drawer" @click="themeStore.toggle">
            <span class="theme-icon">
              <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </span>
            {{ isDark ? 'Light — Tema café' : 'Dark — Tema noite' }}
          </button>

          <button class="locale-toggle locale-toggle--drawer" @click="locale.toggle">
            <span :class="{ active: locale.locale === 'pt-BR' }">PT</span>
            <span class="locale-divider">/</span>
            <span :class="{ active: locale.locale === 'en' }">EN</span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.app-nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.5rem 3rem;
  display: flex; justify-content: space-between; align-items: center;
  /* mix-blend-mode: multiply; */
}
.app-nav.menu-open { mix-blend-mode: normal; }

.nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem; font-weight: 900; letter-spacing: -0.02em;
  color: var(--color-text); text-decoration: none;
  position: relative; z-index: 101;
}

.nav-links {
  display: flex; gap: 2.5rem; list-style: none; padding: 0; margin: 0;
}
.nav-links a {
  font-family: 'DM Mono', monospace; font-size: 0.75rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--color-text-muted); text-decoration: none; transition: color 0.2s;
}
.nav-links a:hover { color: var(--color-error); }

/* ── Right group ── */
.nav-right {
  display: flex; align-items: center; gap: 1rem;
  position: relative; z-index: 101;
}

.nav-divider {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem; color: var(--color-text-muted); opacity: 0.3;
  user-select: none;
}

/* ── Theme toggle ── */
.theme-toggle {
  display: flex; align-items: center; gap: 0.5rem;
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'DM Mono', monospace; font-size: 0.68rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
}
.theme-toggle:hover { color: var(--color-accent1); }
.theme-icon {
  display: flex; align-items: center;
  color: var(--color-accent1);
  flex-shrink: 0;
}

/* ── Locale toggle ── */
.locale-toggle {
  display: flex; align-items: center; gap: 0.3rem;
  background: none; border: none; cursor: pointer; padding: 0;
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.12em; color: var(--color-text-muted);
}
.locale-toggle span       { transition: color 0.2s; }
.locale-toggle span.active { color: var(--color-text); font-weight: 600; }
.locale-toggle:hover span  { color: var(--color-accent1); }
.locale-divider            { opacity: 0.4; }

/* ── Hamburger ── */
.nav-hamburger {
  display: none; flex-direction: column; justify-content: space-between;
  width: 24px; height: 18px; background: none; border: none;
  cursor: pointer; padding: 0;
}
.nav-hamburger span {
  display: block; width: 100%; height: 1.5px;
  background: var(--color-text); transform-origin: center;
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(8.25px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-8.25px) rotate(-45deg); }

/* ── Backdrop ── */
.nav-backdrop {
  position: fixed; inset: 0;
  background: rgba(13, 15, 20, 0.6);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  z-index: 99;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,   .fade-leave-to     { opacity: 0; }

/* ── Drawer ── */
.nav-drawer {
  position: fixed; inset: 0;
  background: var(--color-bg);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  z-index: 100; mix-blend-mode: normal;
}
.nav-drawer ul {
  list-style: none; padding: 0; margin: 0;
  text-align: center; display: flex; flex-direction: column; gap: 2.5rem;
}
.nav-drawer a {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 8vw, 3rem); font-weight: 700;
  color: var(--color-text); text-decoration: none;
  display: block; transition: color 0.2s;
}
.nav-drawer a:hover { color: var(--color-error); }

.drawer-toggles {
  display: flex; flex-direction: column;
  align-items: center; gap: 1.25rem;
  margin-top: 3rem;
}

.theme-toggle--drawer {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.locale-toggle--drawer {
  font-size: 1rem; letter-spacing: 0.15em;
}
.locale-toggle--drawer span.active { color: var(--color-text); }

.drawer-enter-active, .drawer-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.drawer-enter-from,   .drawer-leave-to     { opacity: 0; transform: translateY(-12px); }

/* ── Tablet ── */
@media (max-width: 1024px) {
  .app-nav { padding: 1.25rem 2rem; }
  /* Hide theme label text on tablet, keep icon only */
  .theme-label { display: none; }
}
@media (max-width: 768px) {
  .app-nav       { padding: 1.25rem 1.5rem; }
  .nav-links     { display: none; }
  .nav-hamburger { display: flex; }
  .theme-toggle:not(.theme-toggle--drawer) { display: none; }
  .locale-toggle:not(.locale-toggle--drawer) { display: none; }
  .nav-divider   { display: none; }
}
</style>
