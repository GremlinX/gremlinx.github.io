<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let rafId: number

interface Bubble {
  x: number; y: number; r: number
  vx: number; vy: number; alpha: number
  color: { r: number; g: number; b: number }
  wobbleOffset: number; wobbleSpeed: number; wobbleAmp: number
}

const PALETTE = [
  { r: 212, g: 163, b: 115 }, // accent1
  { r: 204, g: 213, b: 174 }, // accent2
  { r: 233, g: 237, b: 201 }, // accent3
  { r: 250, g: 237, b: 205 }, // surface
]
const NUM_BUBBLES = 28

function rand(a: number, b: number) { return a + Math.random() * (b - a) }

function makeBubble(canvasW: number, canvasH: number): Bubble {
  const r = rand(18, 70)
  return {
    x: rand(r, canvasW - r),
    y: rand(r, canvasH - r),
    r,
    vx: rand(-0.12, 0.12),
    vy: rand(-0.18, -0.06),
    alpha: rand(0.04, 0.11),
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    wobbleOffset: Math.random() * Math.PI * 2,
    wobbleSpeed: rand(0.004, 0.012),
    wobbleAmp: rand(0.3, 0.9),
  }
}

function resize(canvas: HTMLCanvasElement) {
  canvas.width  = window.innerWidth
  canvas.height = document.body.scrollHeight
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!

  resize(canvas)
  let bubbles: Bubble[] = Array.from({ length: NUM_BUBBLES }, () =>
    makeBubble(canvas.width, canvas.height)
  )

  const onResize = () => {
    resize(canvas)
    bubbles = Array.from({ length: NUM_BUBBLES }, () =>
      makeBubble(canvas.width, canvas.height)
    )
  }
  window.addEventListener('resize', onResize)

  let lastTs = 0
  function draw(ts: number) {
    lastTs = ts
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const b of bubbles) {
      b.x += b.vx + Math.sin(ts * b.wobbleSpeed + b.wobbleOffset) * b.wobbleAmp * 0.015
      b.y += b.vy

      // Wrap: bubble exits top → reappear at bottom
      if (b.y + b.r < 0) {
        b.y = canvas.height + b.r
        b.x = rand(b.r, canvas.width - b.r)
      }
      if (b.x - b.r > canvas.width) b.x = -b.r
      if (b.x + b.r < 0)            b.x = canvas.width + b.r

      const { r, g, b: bl } = b.color

      // Soft radial fill
      const grad = ctx.createRadialGradient(
        b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.1,
        b.x, b.y, b.r
      )
      grad.addColorStop(0, `rgba(${r},${g},${bl},${(b.alpha * 0.7).toFixed(3)})`)
      grad.addColorStop(1, `rgba(${r},${g},${bl},0)`)

      ctx.beginPath()
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()

      // Thin ring
      ctx.beginPath()
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(${r},${g},${bl},${(b.alpha * 1.4).toFixed(3)})`
      ctx.lineWidth = 0.8
      ctx.stroke()

      // Specular highlight
      ctx.beginPath()
      ctx.arc(b.x - b.r * 0.32, b.y - b.r * 0.32, b.r * 0.18, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(254,250,224,${(b.alpha * 1.2).toFixed(3)})`
      ctx.fill()
    }

    rafId = requestAnimationFrame(draw)
  }

  rafId = requestAnimationFrame(draw)

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    cancelAnimationFrame(rafId)
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="bubble-canvas" aria-hidden="true" />
</template>

<style scoped>
.bubble-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
</style>
