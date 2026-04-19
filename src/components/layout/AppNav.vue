<script setup lang="ts">
import { ref } from 'vue'

const links = [
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contato',  href: '#contato'  },
]

const menuOpen = ref(false)

function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu()  { menuOpen.value = false }
</script>

<template>
  <nav class="app-nav" :class="{ 'menu-open': menuOpen }">
    <a href="#hero" class="nav-logo" @click="closeMenu">MI.</a>

    <!-- Desktop links -->
    <ul class="nav-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>

    <!-- Mobile hamburger button -->
    <button
      class="nav-hamburger"
      :class="{ open: menuOpen }"
      @click="toggleMenu"
      aria-label="Abrir menu"
    >
      <span /><span /><span />
    </button>

    <!-- Backdrop -->
    <Transition name="fade">
      <div v-if="menuOpen" class="nav-backdrop" @click="closeMenu" />
    </Transition>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="menuOpen" class="nav-drawer">
        <ul>
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.app-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: multiply;
}

.nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: var(--color-text);
  text-decoration: none;
  position: relative;
  z-index: 101;
}

/* ── Desktop links ── */
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  font-family: 'DM Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--color-error); }

/* ── Hamburger ── */
.nav-hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 101;
}

.nav-hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--color-text);
  transform-origin: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* X state */
.nav-hamburger.open span:nth-child(1) { transform: translateY(8.25px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-8.25px) rotate(-45deg); }

/* Remove mix-blend-mode quando o menu está aberto para o logo ficar legível */
.app-nav.menu-open { mix-blend-mode: normal; }

/* ── Backdrop ── */
.nav-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(61, 43, 31, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 99;
}

.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to     { opacity: 0; }

/* ── Mobile drawer ── */
.nav-drawer {
  position: fixed;
  inset: 0;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  mix-blend-mode: normal;
}

.nav-drawer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.nav-drawer a {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 8vw, 3rem);
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  display: block;
  transition: color 0.2s;
}
.nav-drawer a:hover { color: var(--color-error); }

/* ── Drawer transition ── */
.drawer-enter-active,
.drawer-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.drawer-enter-from,
.drawer-leave-to   { opacity: 0; transform: translateY(-12px); }

/* ── Breakpoints ── */
@media (max-width: 1024px) {
  .app-nav { padding: 1.25rem 2rem; }
}

@media (max-width: 768px) {
  .app-nav { padding: 1.25rem 1.5rem; }
  .nav-links     { display: none; }
  .nav-hamburger { display: flex; }
}
</style>