<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { useLocaleStore } from '@/composables/useLocale'

const emit   = defineEmits<{ done: [] }>()
const locale = useLocaleStore()
const t      = computed(() => locale.t)

const splashRef  = ref<HTMLElement | null>(null)
const lineRef    = ref<HTMLElement | null>(null)
const nameRef    = ref<HTMLElement | null>(null)
const roleRef    = ref<HTMLElement | null>(null)
const counterRef = ref<HTMLElement | null>(null)

function animateCounter(el: HTMLElement, duration: number) {
  const obj = { val: 0 }
  gsap.to(obj, {
    val: 100, duration,
    ease: 'power2.inOut',
    onUpdate: () => { el.textContent = Math.round(obj.val) + '%' },
  })
}

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(splashRef.value, {
        opacity: 0, duration: 0.5, ease: 'power2.in',
        onComplete: () => emit('done'),
      })
    },
  })

  tl.fromTo(nameRef.value,    { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    .fromTo(roleRef.value,    { opacity: 0 },         { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
    .fromTo(lineRef.value,    { scaleX: 0 },          { scaleX: 1, duration: 1, ease: 'power3.inOut', transformOrigin: 'left' }, '-=0.2')
    .add(() => { if (counterRef.value) animateCounter(counterRef.value, 1) }, '-=1')
    .to({}, { duration: 0.3 })
})
</script>

<template>
  <div ref="splashRef" class="splash" aria-hidden="true">
    <div class="splash-inner">
      <p ref="nameRef" class="splash-name">Marcelo Ito</p>
      <p ref="roleRef" class="splash-role">{{ t.splash.role }}</p>
      <div class="splash-progress">
        <div class="splash-track">
          <div ref="lineRef" class="splash-fill" />
        </div>
        <span ref="counterRef" class="splash-counter">0%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash {
  position: fixed; inset: 0;
  z-index: 1000;
  background: var(--color-text);
  display: flex; align-items: center; justify-content: center;
}
.splash-inner {
  display: flex; flex-direction: column; align-items: flex-start;
  gap: 0.75rem; padding: 0 2rem;
  width: min(480px, 90vw);
}
.splash-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900; letter-spacing: -0.03em;
  color: var(--color-bg); line-height: 1; opacity: 0;
}
.splash-role {
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--color-accent1); opacity: 0;
}
.splash-progress {
  width: 100%; display: flex; align-items: center; gap: 1rem; margin-top: 1.5rem;
}
.splash-track { flex: 1; height: 1px; background: rgba(254,250,224,0.15); overflow: hidden; }
.splash-fill  { height: 100%; background: var(--color-accent1); transform: scaleX(0); transform-origin: left; }
.splash-counter {
  font-family: 'DM Mono', monospace; font-size: 0.7rem;
  letter-spacing: 0.1em; color: var(--color-text-muted); min-width: 3ch; text-align: right;
}
</style>
