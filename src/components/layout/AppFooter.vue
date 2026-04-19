<template>
  <footer class="app-footer">
    <span>© 2025 — Desenvolvido com Vue 3 + Claude AI</span>
    <span class="accent">✦ Disponível para freelance</span>
  </footer>
</template>

<style scoped>
.app-footer {
  position: relative;
  z-index: 1;
  background: var(--color-text);
  border-top: 1px solid rgba(254, 250, 224, 0.1);
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.app-footer span {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
}

.app-footer span.accent { color: var(--color-accent1); }

/* ── Tablet (≤ 1024px) ── */
@media (max-width: 1024px) {
  .app-footer { padding: 1.5rem 2rem; }
}

/* ── Mobile (≤ 768px) ── */
@media (max-width: 768px) {
  .app-footer {
    padding: 1.25rem 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
