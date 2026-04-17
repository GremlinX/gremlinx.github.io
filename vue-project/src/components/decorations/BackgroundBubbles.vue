<template>
  <div class="bubble-layer" aria-hidden="true">
    <span
      v-for="bubble in bubbles"
      :key="bubble.id"
      class="bubble-orb"
      :style="{
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        transform: `translate3d(${bubble.x}px, ${bubble.y}px, 0)`,
        background: bubble.color,
        opacity: bubble.opacity,
        transitionDuration: `${bubble.duration}ms`
      }"
    />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'

const palette = [
  'rgba(212, 163, 115, 0.22)',
  'rgba(204, 213, 174, 0.32)',
  'rgba(233, 237, 201, 0.26)',
  'rgba(250, 237, 205, 0.24)'
]

const bubbles = shallowRef([])

let resizeHandler
let timers = []
let viewport = { width: 0, height: 0 }

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

function createBubble(id) {
  const size = randomBetween(220, 420)

  return {
    id,
    size,
    x: randomBetween(0, Math.max(viewport.width - size, 0)),
    y: randomBetween(0, Math.max(viewport.height - size, 0)),
    color: palette[id % palette.length],
    opacity: randomBetween(0.18, 0.62),
    duration: randomBetween(2200, 4200)
  }
}

function syncViewport() {
  viewport = { width: window.innerWidth, height: window.innerHeight }

  bubbles.value = bubbles.value.map((bubble) => ({
    ...bubble,
    x: Math.min(bubble.x, Math.max(viewport.width - bubble.size, 0)),
    y: Math.min(bubble.y, Math.max(viewport.height - bubble.size, 0))
  }))
}

function morphBubble(targetId) {
  const nextDelay = randomBetween(2600, 6200)

  bubbles.value = bubbles.value.map((bubble) => {
    if (bubble.id !== targetId) return bubble

    const size = randomBetween(220, 420)

    return {
      ...bubble,
      size,
      x: randomBetween(0, Math.max(viewport.width - size, 0)),
      y: randomBetween(0, Math.max(viewport.height - size, 0)),
      opacity: Math.random() > 0.35 ? randomBetween(0.16, 0.58) : 0,
      duration: randomBetween(2800, 5200)
    }
  })

  const timer = window.setTimeout(() => morphBubble(targetId), nextDelay)
  timers.push(timer)
}

function startMorphing() {
  timers = bubbles.value.map((bubble) =>
    window.setTimeout(() => morphBubble(bubble.id), randomBetween(1000, 3600))
  )
}

onMounted(() => {
  syncViewport()
  bubbles.value = Array.from({ length: 5 }, (_, index) => createBubble(index))

  resizeHandler = () => {
    syncViewport()
  }

  window.addEventListener('resize', resizeHandler)
  startMorphing()
})

onBeforeUnmount(() => {
  timers.forEach((timer) => window.clearTimeout(timer))
  timers = []

  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
})
</script>
